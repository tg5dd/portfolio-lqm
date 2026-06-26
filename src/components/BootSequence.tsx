import { useEffect, useState } from "react";
import "./BootSequence.css";

interface BootSequenceProps {
  onComplete: () => void;
}

const lines = [
  { t: "[ OK ]   netop-os v6.6.6 — terminal edition", d: 60 },
  { t: "[ OK ]   mounted /dev/identity", d: 90 },
  { t: "[ OK ]   loaded netfilter rules (84 / 84)", d: 110 },
  { t: "[ OK ]   established bgp session: AS65001 ↔ AS65002", d: 140 },
  { t: "[ OK ]   test suite warm: 1,847 specs ready", d: 100 },
  { t: "[ OK ]   telemetry pipeline: prometheus :9090  loki :3100", d: 100 },
  { t: "[ WARN ] coffee level low — refilling", d: 140 },
  { t: "[ OK ]   kernel scheduler: nice", d: 90 },
  { t: "", d: 120 },
  { t: "       /\\\\_/\\ ", d: 60 },
  { t: "      ( o.o )  ", d: 60 },
  { t: "       > ^ <   welcome, operator.", d: 60 },
  { t: "", d: 200 },
  { t: "→ press any key or wait to continue_", d: 0 },
];

/**
 * Boot-up screen that fakes a Linux POST sequence.
 * Auto-completes after all lines render (or on user interaction).
 */
export default function BootSequence({ onComplete }: BootSequenceProps) {
  const [shown, setShown] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let i = 0;
    const totalDelay = lines.reduce((s, l) => s + l.d, 0) + 400;
    const tick = window.setInterval(() => {
      setProgress((p) => Math.min(100, p + 100 / (totalDelay / 80)));
    }, 80);

    const step = () => {
      const next = i + 1;
      if (next > lines.length) {
        window.clearInterval(stepper);
        window.clearInterval(tick);
        window.setTimeout(onComplete, 250);
        return;
      }
      setShown(next);
      i = next;
    };
    const stepper = window.setInterval(step, lines[i]?.d ?? 100);
    return () => {
      window.clearInterval(stepper);
      window.clearInterval(tick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Skip on any key or click
  useEffect(() => {
    const handler = () => onComplete();
    window.addEventListener("keydown", handler, { once: true });
    window.addEventListener("click", handler, { once: true });
    return () => {
      window.removeEventListener("keydown", handler);
      window.removeEventListener("click", handler);
    };
  }, [onComplete]);

  return (
    <div className="boot" role="status" aria-live="polite">
      <div className="boot__frame">
        <pre className="boot__log">
          {lines.slice(0, shown).map((l, idx) => {
            const isWarn = l.t.startsWith("[ WARN ]");
            const isOk = l.t.startsWith("[ OK ]");
            return (
              <div
                key={idx}
                className={`boot__line ${isOk ? "boot__line--ok" : ""} ${
                  isWarn ? "boot__line--warn" : ""
                }`}
              >
                {l.t || "\u00A0"}
                {idx === shown - 1 && <span className="cursor" />}
              </div>
            );
          })}
        </pre>

        <div className="boot__bar" aria-hidden>
          <div className="boot__bar-fill" style={{ width: `${progress}%` }} />
        </div>
        <div className="boot__meta">
          <span>booting</span>
          <span>{Math.floor(progress)}%</span>
        </div>
      </div>
    </div>
  );
}
