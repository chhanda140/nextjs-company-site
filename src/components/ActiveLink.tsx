// src/components/ActiveLink.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type ActiveLinkProps = {
  href: string;
  label: React.ReactNode;
  onClick?: (event?: React.MouseEvent<HTMLAnchorElement>) => void;
};

export default function ActiveLink({ href, label, onClick }: ActiveLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  // Link supports onClick, so we forward it directly.
  return (
    <Link
      href={href}
      onClick={onClick}
      className={isActive ? "navbar-link navbar-link-active" : "navbar-link"}
    >
      {label}
    </Link>
  );
}
