import { useEffect, useState } from "react";
import "./CursorGlow.css";

/**
 * A soft neon halo that follows the cursor. Disabled on touch / reduced motion.
 */
export default function CursorGlow() {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reduce =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    const isTouch = window.matchMedia?.("(pointer: coarse)").matches ?? false;
    if (reduce || isTouch) {
      setEnabled(false);
      return;
    }
    setEnabled(true);

    const handler = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  if (!enabled || !pos) return null;

  return (
    <div
      className="cursor-glow"
      style={{ transform: `translate3d(${pos.x}px, ${pos.y}px, 0)` }}
      aria-hidden
    />
  );
}
