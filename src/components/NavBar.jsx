import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { siteConfig } from "../config/site";

const links = [
  { name: "About", href: "#about" },
  { name: "Journey", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Coding", href: "#coding" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = [
      "home",
      ...links.map((link) => link.href.slice(1)),
    ]
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (first, second) =>
              second.intersectionRatio - first.intersectionRatio,
          )[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-25% 0px -62% 0px", threshold: [0, 0.15, 0.35, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  const navigation = (
    <div className="nav-links">
      {links.map((link) => {
        const selected = active === link.href.slice(1);
        return (
          <a
            key={link.name}
            href={link.href}
            aria-current={selected ? "location" : undefined}
            onClick={() => setOpen(false)}
            className={`nav-link ${selected ? "nav-link-active" : ""}`}
          >
            {link.name}
            {selected && (
              <motion.span
                layoutId="nav-active-indicator"
                className="nav-active-indicator"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
          </a>
        );
      })}
    </div>
  );

  return (
    <header className="site-nav">
      <a href="#home" className="site-nav-brand" aria-label="Yograj Tripathi, home">
        Y<span>.</span>
        <span className="site-nav-brand-label">YOGRAJ.EXE</span>
      </a>

      <nav className="desktop-nav" aria-label="Main navigation">
        {navigation}
      </nav>

      <a
        href={siteConfig.linkedin}
        className="nav-connect"
        target="_blank"
        rel="noreferrer"
      >
        Let&apos;s connect <span aria-hidden="true">↗</span>
      </a>

      <button
        className="mobile-nav-toggle"
        type="button"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((isOpen) => !isOpen)}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={open ? "close" : "open"}
            initial={{ opacity: 0, rotate: -35, scale: 0.75 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 35, scale: 0.75 }}
            transition={{ duration: 0.16 }}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </motion.span>
        </AnimatePresence>
      </button>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="mobile-nav-panel"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.18 }}
          >
            {navigation}
            <a
              className="mobile-nav-connect"
              href={siteConfig.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              Connect on LinkedIn ↗
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
