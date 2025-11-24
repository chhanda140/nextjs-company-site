// src/components/Navbar.tsx
"use client";

import React, { useState } from "react";
import ActiveLink from "./ActiveLink";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // toggle and prevent scroll (optional)
  const toggleOpen = () => {
    setOpen((s) => !s);
    if (!open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  const closeMenu = () => {
    setOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <header>
      <nav className="navbar" role="navigation" aria-label="Main navigation">
        <div className="navbar-container">
          <Link href="/" className="navbar-logo" onClick={closeMenu}>
            <img
              src="/logo.png" alt="Logo" className="navbar-logo-img" 
            />
            <span className="navbar-logo-text">My Company</span>
          </Link>

          <div className="navbar-links" role="menubar">
            <ActiveLink href="/" label="Home" />
            <ActiveLink href="/about" label="About" />
            <ActiveLink href="/services" label="Services" />
            <ActiveLink href="/portfolio" label="Portfolio" />
            <ActiveLink href="/contact" label="Contact" />
          </div>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="navbar-hamburger"
            onClick={toggleOpen}
            type="button"
          >
            <span className="bar" style={{ transform: open ? "rotate(45deg) translateY(6px)" : "" }} />
            <span className="bar" style={{ opacity: open ? 0 : 1 }} />
            <span className="bar" style={{ transform: open ? "rotate(-45deg) translateY(-6px)" : "" }} />
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`navbar-mobile ${open ? "open" : ""}`} role="menu">
          <div className="mobile-inner">
            <ActiveLink href="/" label="Home" onClick={closeMenu} />
            <ActiveLink href="/about" label="About" onClick={closeMenu} />
            <ActiveLink href="/services" label="Services" onClick={closeMenu} />
            <ActiveLink href="/portfolio" label="Portfolio" onClick={closeMenu} />
            <ActiveLink href="/contact" label="Contact" onClick={closeMenu} />

            {/* Optional small CTA inside mobile menu */}
            <a href="/contact" className="button" style={{ marginTop: 8 }} onClick={closeMenu}>
              Start a project
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
