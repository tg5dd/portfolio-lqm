import "./CRTOverlay.css";

/**
 * Static overlay layers that give the page its CRT / arcade feel.
 * - scanlines: animated horizontal stripes
 * - noise: subtle film grain
 * - vignette: corner darkening
 * - sweep: a one-shot scanline that travels top→bottom on mount
 */
export default function CRTOverlay() {
  return (
    <>
      <div className="crt-overlay" aria-hidden />
      <div className="crt-noise" aria-hidden />
      <div className="crt-vignette" aria-hidden />
      <div className="crt-sweep" aria-hidden />
    </>
  );
}
