import { useTypewriter } from "../hooks/useTypewriter";
import { useFakePing } from "../hooks/useFakePing";
import { useClock } from "../hooks/useClock";
import { profile } from "../data/profile";
import { Link } from "react-router-dom";
import "./Hero.css";

const headlinePhrases = [
  "auditing the perimeter.",
  "breaking software on purpose.",
  "hardening networks.",
  "automating test cases.",
  "investigating packets at 03:14.",
  "shipping quality.",
  "watching tcpdump.",
  "shipping anyway.",
];

export default function Hero() {
  const { displayed, done } = useTypewriter(`hi, i'm ${profile.name}.`, 60);
  const ping = useFakePing(18, 5);
  const utc = useClock(1000);
  const cycle = useTypewriter(rotate(), 70);

  function rotate() {
    const i = Math.floor(Math.random() * headlinePhrases.length);
    return headlinePhrases[i];
  }

  return (
    <section className="hero">
      <div className="hero__grid" aria-hidden>
        <div className="hero__grid-line hero__grid-line--v" />
        <div className="hero__grid-line hero__grid-line--v" />
        <div className="hero__grid-line hero__grid-line--v" />
        <div className="hero__grid-line hero__grid-line--h" />
        <div className="hero__grid-line hero__grid-line--h" />
      </div>

      <div className="hero__corner hero__corner--tl">[ 0x01 ]</div>
      <div className="hero__corner hero__corner--tr">[ 0x02 ]</div>
      <div className="hero__corner hero__corner--bl">[ 0x03 ]</div>
      <div className="hero__corner hero__corner--br">[ 0x04 ]</div>

      <p className="hero__intro">
        <span className="hero__intro-pre">~/{profile.handle} $</span>{" "}
        <span className="hero__intro-cmd">./intro --lang=zh</span>
      </p>

      <h1 className="hero__title">
        <span className="hero__title-prefix">// </span>
        <span className="hero__title-main">
          {displayed}
          {!done && <span className="cursor" />}
        </span>
      </h1>

      <p className="hero__subname mono">
        <span className="dim">{profile.nameEn}</span>{" "}
        <span className="mute">·</span>{" "}
        <span className="cyan">{profile.headline}</span>{" "}
        <span className="mute">·</span>{" "}
        <span className="dim">GPA {profile.gpa.split(" ")[0]}</span>
      </p>

      <p className="hero__roles">
        {profile.roles.map((r, i) => (
          <span
            key={r}
            className={`hero__role hero__role--${i === 0 ? "net" : i === 1 ? "qa" : "lab"}`}
          >
            <span className="hero__role-tag">
              [{["NET", "OPS", "QA"][i] || "QA"}]
            </span>
            {r}
          </span>
        ))}
      </p>

      <h2 className="hero__cycle" aria-live="polite">
        <span className="hero__cycle-pre">currently_</span>{" "}
        <span className="hero__cycle-main">
          {cycle.displayed}
          {!cycle.done && <span className="cursor" />}
        </span>
      </h2>

      <div className="hero__learning">
        <span className="hero__learning-label">// 正在学习</span>
        {profile.learning.map((l) => (
          <span key={l} className="hero__learning-tag">
            {l}
          </span>
        ))}
      </div>

      <p className="hero__bio cn">{profile.bio.cn}</p>

      <div className="hero__actions">
        <Link to="/projects" className="hero__btn hero__btn--primary">
          <span className="hero__btn-bracket">[</span>
          <span className="hero__btn-label">查看项目</span>
          <span className="hero__btn-bracket">]</span>
          <span className="hero__btn-arrow">→</span>
        </Link>
        <Link to="/contact" className="hero__btn">
          <span className="hero__btn-bracket">[</span>
          <span className="hero__btn-label">建立联系</span>
          <span className="hero__btn-bracket">]</span>
        </Link>
      </div>

      <div className="hero__status">
        <div className="hero__status-cell">
          <span className="hero__status-key">system</span>
          <span className="hero__status-val green">● ONLINE</span>
        </div>
        <div className="hero__status-cell">
          <span className="hero__status-key">latency</span>
          <span className="hero__status-val cyan">
            {ping}
            <span className="mute">ms</span>
          </span>
        </div>
        <div className="hero__status-cell">
          <span className="hero__status-key">uplink</span>
          <span className="hero__status-val">{profile.location.coords}</span>
        </div>
        <div className="hero__status-cell">
          <span className="hero__status-key">uptime</span>
          <span className="hero__status-val">{utc}</span>
        </div>
      </div>

      <div className="hero__keys" aria-hidden>
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i}>
            {String.fromCharCode(0x30a0 + Math.floor(Math.random() * 96))}
          </span>
        ))}
      </div>
    </section>
  );
}
