"use client";

import { TooltipProvider } from "@/components/ui/tooltip";
import { useState } from "react";

export function Providers({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return <TooltipProvider delayDuration={0}>{children}</TooltipProvider>;
}
