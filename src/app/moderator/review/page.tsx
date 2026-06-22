"use client";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export default function ModeratorReviewPage() {
  return (
    <div className="pb-20">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Content Review</h1>
        <Card>
          <CardContent className="p-4">
            <p>No pending reviews at the moment.</p>
          </CardContent>
        </Card>
      </div>
      <MobileBottomNav />
    </div>
  );
}
