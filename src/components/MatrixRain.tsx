import { useEffect, useRef } from "react";
import "./MatrixRain.css";

const CHARS = "アァカサタナハマヤラワABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@!?&%*=+";

/**
 * Subtle "matrix rain" on the far-right column. Low density,
 * slow fall, no glare — just a quiet textural backdrop.
 */
export default function MatrixRain() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    const isMobile = window.innerWidth < 768;
    if (reduce || isMobile) return;

    let raf = 0;
    let drops: number[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const cols = Math.floor(canvas.width / 18);
      drops = new Array(cols).fill(0).map(() => Math.random() * -50);
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.fillStyle = "rgba(5, 6, 10, 0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = "14px 'JetBrains Mono', monospace";
      for (let i = 0; i < drops.length; i++) {
        const ch = CHARS[Math.floor(Math.random() * CHARS.length)];
        const x = i * 18;
        const y = drops[i] * 18;
        ctx.fillStyle = "rgba(0, 240, 255, 0.18)";
        ctx.fillText(ch, x, y);
        // brighter head
        ctx.fillStyle = "rgba(57, 255, 20, 0.55)";
        ctx.fillText(ch, x, y);
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += 0.5;
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={ref} className="matrix-rain" aria-hidden />;
}
