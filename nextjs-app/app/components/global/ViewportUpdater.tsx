"use client";

import { useViewportHeight } from "@/utils/hooks/useViewportHeight";

export default function ViewportUpdater() {
  useViewportHeight();
  return null;
}