"use client";
import { Skeleton } from "@nextui-org/react";

export default function Loading() {
  return (
    <div className="w-full">
      <Skeleton isLoaded className="rounded-lg">
        <div className="h-24 rounded-lg bg-secondary"></div>
      </Skeleton>
    </div>
  );
}
