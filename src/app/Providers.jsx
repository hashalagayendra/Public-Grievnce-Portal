"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";

export default function Providers({ children, session }) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
