import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Coding", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop */}
      <nav className="fixed top-6 left-1/2 z-50 hidden -translate-x-1/2 md:block">
        <div className="rounded-full border border-orange-400/25 bg-black/45 px-7 py-4 backdrop-blur-xl shadow-[0_0_40px_rgba(255,140,0,.18)]">
          <div className="flex gap-8">
            {links.map((l) => (
              <a
                key={l.name}
                href={l.href}
                className="text-sm text-white/85 transition hover:text-cyan-300"
              >
                {l.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile */}
      <nav className="fixed top-4 left-4 right-4 z-50 md:hidden">
        <div className="flex items-center justify-between rounded-2xl border border-orange-400/20 bg-black/50 px-4 py-3 backdrop-blur-xl">
          <span className="font-bold tracking-wider text-white">YT</span>

          <button onClick={() => setOpen(!open)}>
            {open ? (
              <X className="text-white" size={22} />
            ) : (
              <Menu className="text-white" size={22} />
            )}
          </button>
        </div>

        {open && (
          <div className="mt-3 rounded-2xl border border-cyan-400/15 bg-[#04101A]/95 p-3 backdrop-blur-xl">
            {links.map((l) => (
              <a
                key={l.name}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-3 text-white/90 transition hover:bg-cyan-400/10"
              >
                {l.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}