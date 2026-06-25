import { createServerClient } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const createClient = async (request: NextRequest) => {
  let supabaseResponse = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(
    supabaseUrl!,
    supabaseKey!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value));
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // IMPORTANT: Avoid writing any logic between createServerClient and
  // supabase.auth.getUser(). A simple mistake can make it very hard to debug
  // issues with users being randomly logged out.

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Role-based access control
  const path = request.nextUrl.pathname;

  if (user) {
    // In a real app, we would fetch the user's role from the database here
    // or from a custom claim in the JWT.
    // For now, we'll use a simplified check based on path prefixes and
    // assume metadata stores the role.
    const userRole = user.app_metadata?.role || "STUDENT";
    const verificationStatus = user.user_metadata?.verificationStatus || "PENDING";

    // Redirect users based on role and path
    if (path.startsWith("/admin") && userRole !== "ADMIN") {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    if (path.startsWith("/tutor") && userRole !== "TUTOR") {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    // Tutors must be approved to access certain tutor features (e.g., resource creation)
    if (path === "/tutor/resources" && userRole === "TUTOR" && verificationStatus !== "APPROVED") {
      // Allow viewing but maybe show a banner or restricted state in the page itself
      // Or redirect to tutor dashboard with a warning
    }

    // Redirect logged in users away from auth pages
    if (path === "/login" || path === "/register") {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  } else {
    // Protected routes
    const protectedPaths = ["/dashboard", "/admin", "/tutor", "/wallet", "/profile", "/settings"];
    if (protectedPaths.some(p => path.startsWith(p))) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return supabaseResponse;
};
