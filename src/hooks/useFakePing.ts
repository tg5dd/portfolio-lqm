import { useEffect, useState } from "react";

/**
 * Simulated "ping" — returns a value that fluctuates around `base` (ms).
 * Used to give the status panel a sense of liveness.
 */
export function useFakePing(base = 18, range = 6): number {
  const [v, setV] = useState(base);
  useEffect(() => {
    const id = window.setInterval(() => {
      const drift = (Math.random() - 0.5) * range;
      setV(Math.max(2, Math.round(base + drift)));
    }, 1400);
    return () => window.clearInterval(id);
  }, [base, range]);
  return v;
}
