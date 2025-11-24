"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ActiveLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={isActive ? "navbar-link navbar-link-active" : "navbar-link"}
    >
      {label}
    </Link>
  );
}
