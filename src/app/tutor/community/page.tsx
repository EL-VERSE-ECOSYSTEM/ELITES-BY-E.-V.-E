"use client";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export default function TutorCommunityPage() {
  return (
    <div className="pb-20">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Tutor Community</h1>
        <Card>
          <CardContent className="p-4">
            <p>Connect with other tutors in the ecosystem.</p>
          </CardContent>
        </Card>
      </div>
      <MobileBottomNav />
    </div>
  );
}
