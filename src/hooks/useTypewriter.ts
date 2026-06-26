import { useEffect, useState } from "react";

/**
 * Typewriter effect — reveals `text` one character at a time.
 * - `speed` is milliseconds per character.
 * - Respects `prefers-reduced-motion` (renders instantly).
 */
export function useTypewriter(text: string, speed = 28): { displayed: string; done: boolean } {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setDone(false);

    const prefersReduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduce) {
      setDisplayed(text);
      setDone(true);
      return;
    }

    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        setDone(true);
        window.clearInterval(id);
      }
    }, speed);

    return () => window.clearInterval(id);
  }, [text, speed]);

  return { displayed, done };
}
