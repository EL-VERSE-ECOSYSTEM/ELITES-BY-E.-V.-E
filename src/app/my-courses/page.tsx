"use client";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ProgressBar } from "@/components/ui/ProgressBar";

export default function MyCoursesPage() {
  return (
    <div className="pb-20">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">My Courses</h1>
        <div className="space-y-4">
          {[1, 2].map((i) => (
            <Card key={i}>
              <CardContent className="p-4">
                <h3 className="font-bold mb-2">Modern React Patterns</h3>
                <ProgressBar value={45} className="mb-2" />
                <p className="text-xs text-muted-foreground mb-4">45% Completed</p>
                <Button size="sm">Continue Learning</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <MobileBottomNav />
    </div>
  );
}
