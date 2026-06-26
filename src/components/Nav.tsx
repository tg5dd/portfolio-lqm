import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { profile } from "../data/profile";
import { useClock } from "../hooks/useClock";
import "./Nav.css";

const items = [
  { to: "/", label: "home", glyph: "01" },
  { to: "/about", label: "about", glyph: "02" },
  { to: "/projects", label: "projects", glyph: "03" },
  { to: "/contact", label: "contact", glyph: "04" },
];

export default function Nav() {
  const clock = useClock(1000);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__inner">
        <NavLink to="/" className="nav__brand" onClick={() => setOpen(false)}>
          <span className="nav__brand-bracket">[</span>
          <span className="nav__brand-name">{profile.callsign}</span>
          <span className="nav__brand-bracket">]</span>
          <span className="nav__brand-arrow"> →</span>
          <span className="nav__brand-target">{profile.handle}</span>
        </NavLink>

        <button
          className={`nav__burger ${open ? "is-open" : ""}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="toggle menu"
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>

        <nav className={`nav__menu ${open ? "is-open" : ""}`} aria-label="primary">
          {items.map((it) => (
            <NavLink
              key={it.to}
              to={it.to}
              end={it.to === "/"}
              className={({ isActive }) =>
                `nav__link ${isActive ? "is-active" : ""}`
              }
              onClick={() => setOpen(false)}
            >
              <span className="nav__link-num">{it.glyph}</span>
              <span className="nav__link-slash">/</span>
              <span className="nav__link-label">{it.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="nav__meta" aria-hidden>
          <span className="nav__status">
            <span className="nav__status-dot" /> {profile.status.replace(/_/g, " ")}
          </span>
          <span className="nav__time">{clock}</span>
        </div>
      </div>
    </header>
  );
}
