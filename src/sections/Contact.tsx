import { useState, type FormEvent } from "react";
import { profile } from "../data/profile";
import "./Contact.css";

type Status = "idle" | "sending" | "sent";

export default function Contact() {
  const [msg, setMsg] = useState("");
  const [from, setFrom] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [copied, setCopied] = useState<string | null>(null);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!msg.trim() || !from.trim()) return;
    setStatus("sending");
    window.setTimeout(() => {
      // eslint-disable-next-line no-console
      console.log("[contact] message submitted:", { from, msg });
      setStatus("sent");
      setMsg("");
      setFrom("");
      window.setTimeout(() => setStatus("idle"), 4000);
    }, 900);
  };

  const copy = (val: string, label: string) => {
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(val).then(() => {
      setCopied(label);
      window.setTimeout(() => setCopied(null), 1400);
    });
  };

  return (
    <section className="contact">
      <header className="contact__head">
        <span className="section-eyebrow">section · 04 / contact</span>
        <h2 className="contact__title">$ ./establish-uplink.sh</h2>
        <p className="contact__sub dim cn">
          想聊点网络架构、安全运维,或是测试自动化?选下面任意一条通道都行 —— 我会回复的。
        </p>
      </header>

      <div className="contact__grid">
        {/* Terminal log */}
        <article className="contact__log">
          <div className="contact__cmd">
            $ <span className="cyan">whois {profile.handle}.dev</span>
          </div>
          <pre className="contact__pre">
{`Domain Name:    ${profile.handle.toUpperCase()}.DEV
Registrar:      HANDSHAKE
Status:         ${profile.status.replace(/_/g, " ")}
Name:           ${profile.name} (${profile.nameEn})
Handle:         @${profile.handle}
Location:       ${profile.location.city}
Coords:         ${profile.location.coords}
Timezone:       ${profile.location.timezone}
GPA:            ${profile.gpa}
Updated:        2025-Q2`}
          </pre>

          <div className="contact__cmd">
            $ <span className="cyan">ping -c 3 qq.com</span>
          </div>
          <pre className="contact__pre">
{`PING qq.com (203.205.255.222) 56(84) bytes
64 bytes from 203.205.255.222: icmp_seq=1 ttl=54 time=${18 + Math.floor(Math.random() * 6)}ms
64 bytes from 203.205.255.222: icmp_seq=2 ttl=54 time=${18 + Math.floor(Math.random() * 6)}ms
64 bytes from 203.205.255.222: icmp_seq=3 ttl=54 time=${18 + Math.floor(Math.random() * 6)}ms

--- qq.com ping statistics ---
3 packets transmitted, 3 received, 0% packet loss
rtt min/avg/max = 18/19/22 ms`}
          </pre>

          <div className="contact__cmd">
            $ <span className="cyan">cat ~/channels.txt</span>
          </div>
          <ul className="contact__channels">
            <li>
              <span className="contact__ch-key">email</span>
              <button
                className="contact__ch-val link-underline"
                onClick={() => copy(profile.email, "email")}
                type="button"
              >
                {profile.email}
              </button>
              <span className="contact__ch-state">
                {copied === "email" ? "[COPIED]" : ""}
              </span>
            </li>
            <li>
              <span className="contact__ch-key">phone</span>
              <button
                className="contact__ch-val link-underline"
                onClick={() => copy(profile.phone, "phone")}
                type="button"
              >
                {profile.phone}
              </button>
              <span className="contact__ch-state">
                {copied === "phone" ? "[COPIED]" : ""}
              </span>
            </li>
            <li>
              <span className="contact__ch-key">qq</span>
              <button
                className="contact__ch-val link-underline"
                onClick={() => copy(profile.social.qq, "qq")}
                type="button"
              >
                {profile.social.qq}
              </button>
              <span className="contact__ch-state">
                {copied === "qq" ? "[COPIED]" : ""}
              </span>
            </li>
            <li>
              <span className="contact__ch-key">github</span>
              <a
                className="contact__ch-val link-underline"
                href={profile.social.github}
                target="_blank"
                rel="noreferrer noopener"
              >
                {profile.social.github.replace("https://", "")}
              </a>
              <span />
            </li>
            <li>
              <span className="contact__ch-key">linkedin</span>
              <a
                className="contact__ch-val link-underline"
                href={profile.social.linkedin}
                target="_blank"
                rel="noreferrer noopener"
              >
                {profile.social.linkedin.replace("https://", "")}
              </a>
              <span />
            </li>
          </ul>
        </article>

        {/* Form */}
        <article className="contact__form">
          <div className="contact__cmd">
            $ <span className="cyan">./send-packet --to {profile.handle}</span>
          </div>

          <form onSubmit={submit} className="contact__form-body">
            <label className="contact__field">
              <span className="contact__field-prompt">from:</span>
              <input
                type="email"
                className="contact__input"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                placeholder="you@somewhere.net"
                required
                spellCheck={false}
                autoComplete="email"
              />
            </label>
            <label className="contact__field">
              <span className="contact__field-prompt">msg :</span>
              <textarea
                className="contact__input contact__input--multi"
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                placeholder="> 说点有意思的..."
                rows={6}
                required
              />
            </label>

            <div className="contact__form-foot">
              <div
                className={`contact__form-status contact__form-status--${status}`}
              >
                {status === "idle" && (
                  <>
                    <span className="cursor" /> awaiting input
                  </>
                )}
                {status === "sending" && (
                  <>
                    <span className="cyan">$ transmitting</span>{" "}
                    <span className="mute">[encrypting...]</span>
                  </>
                )}
                {status === "sent" && (
                  <>
                    <span className="green">$ sent successfully</span>{" "}
                    <span className="mute">— 我会尽快回复</span>
                  </>
                )}
              </div>
              <button
                type="submit"
                className="contact__submit"
                disabled={
                  status === "sending" || !msg.trim() || !from.trim()
                }
              >
                <span className="contact__submit-bracket">[</span>
                <span>transmit</span>
                <span className="contact__submit-bracket">]</span>
                <span className="contact__submit-arrow">→</span>
              </button>
            </div>
          </form>
        </article>
      </div>

      <footer className="contact__foot">
        <div className="contact__foot-line" />
        <div className="contact__foot-grid">
          <div>
            <span className="mute">build</span>{" "}
            <span className="cyan">netop-os v6.6.6</span>
          </div>
          <div>
            <span className="mute">major</span>{" "}
            <span>{profile.education.major}</span>
          </div>
          <div>
            <span className="mute">encoding</span>{" "}
            <span>utf-8 / ascii / gbk</span>
          </div>
          <div>
            <span className="mute">©</span>{" "}
            <span>
              {new Date().getFullYear()} {profile.name}
            </span>
          </div>
        </div>
        <pre className="contact__ascii" aria-hidden>
{`    ╔══════════════════════════════════════════╗
    ║   EOF — thank you for reaching the end.   ║
    ╚══════════════════════════════════════════╝`}
        </pre>
      </footer>
    </section>
  );
}
