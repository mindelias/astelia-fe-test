"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="w-full flex justify-center">
      <div className="flex flex-col items-center justify-center space-y-6 p-8 text-center">
        {/* (A big skeleton bar for the "page heading") */}
        <Skeleton className="h-20 w-1/4" />

        {/* A few lines of skeleton for content */}
        <div className="space-y-2">
          <Skeleton className="mx-auto h-5 w-2/3" />
          <Skeleton className="mx-auto h-5 w-1/2" />
          <Skeleton className="mx-auto h-5 w-3/4" />
        </div>

        {/* A fallback text or "coming soon" note */}
        <p className="mt-4 text-sm text-muted-foreground">
          We&apos;re still working on this page. Please check back soon!
        </p>
      </div>
      {children}
    </section>
  );
}
