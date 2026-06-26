import { profile, skillMatrix } from "../data/profile";
import { timeline } from "../data/timeline";
import "./About.css";

const typeLabel: Record<string, string> = {
  work: "WORK",
  education: "EDU",
  campus: "CAMPUS",
};

export default function About() {
  return (
    <section className="about">
      <header className="about__head">
        <span className="section-eyebrow">section · 02 / about</span>
        <h2 className="about__title">$ cat ./about.txt</h2>
      </header>

      <div className="about__grid">
        {/* Bio block */}
        <article className="about__bio">
          <div className="about__cmd">
            <span className="about__cmd-prompt">$</span>{" "}
            <span className="about__cmd-input">whoami</span>
          </div>
          <pre className="about__cmd-output about__cmd-output--ascii">
{`  ╔══════════════════════════════════════════════╗
  ║  ${profile.name.padEnd(8, "　")}  (${profile.callsign})      ║
  ║  ${profile.location.city.padEnd(20)}  ${profile.location.timezone.padEnd(6)}  ║
  ║  ${profile.gpa.padEnd(43)}║
  ╚══════════════════════════════════════════════╝`}
          </pre>

          <div className="about__cmd">
            <span className="about__cmd-prompt">$</span>{" "}
            <span className="about__cmd-input">cat about.txt</span>
          </div>
          <p className="about__cmd-output about__cmd-output--text cn">
            {profile.bio.cn}
          </p>
          <p className="about__cmd-output about__cmd-output--text dim">
            {profile.bio.en}
          </p>

          <div className="about__cmd">
            <span className="about__cmd-prompt">$</span>{" "}
            <span className="about__cmd-input">cat education.txt</span>
          </div>
          <div className="about__edu">
            <div className="about__edu-row">
              <span className="about__edu-school">{profile.education.school}</span>
              <span className="about__edu-period mute">{profile.education.period}</span>
            </div>
            <div className="about__edu-major cn">{profile.education.major}</div>
          </div>
        </article>

        {/* Skill matrix */}
        <article className="about__skills">
          <div className="about__cmd">
            <span className="about__cmd-prompt">$</span>{" "}
            <span className="about__cmd-input">ls -la ~/skills/</span>
          </div>
          <div className="about__skillgrid">
            {skillMatrix.map((g) => (
              <div key={g.group} className="about__skillgroup">
                <div className="about__skillgroup-head">
                  <span className="about__skillgroup-name">├─ {g.group.toLowerCase()}/</span>
                  <span className="about__skillgroup-count">[{g.items.length}]</span>
                </div>
                <div className="about__skillgroup-items">
                  {g.items.map((it, i) => (
                    <span
                      key={it}
                      className={`about__tag ${i === g.items.length - 1 ? "is-last" : ""}`}
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </article>

        {/* Courses */}
        <article className="about__courses">
          <div className="about__cmd">
            <span className="about__cmd-prompt">$</span>{" "}
            <span className="about__cmd-input">cat ~/courses.txt</span>
          </div>
          <ul className="about__courselist">
            <li className="about__course-head">
              <span>#</span>
              <span>课程名称</span>
              <span className="mute">credits</span>
            </li>
            {profile.education && (
              <CourseList courses={
                [
                  "计算机网络",
                  "Python 程序设计",
                  "数据库原理",
                  "Linux 网络管理",
                  "操作系统原理",
                  "计算机组成原理",
                  "网络系统集成",
                  "虚拟化技术",
                ]
              } />
            )}
          </ul>
        </article>

        {/* Self eval */}
        <article className="about__eval">
          <div className="about__cmd">
            <span className="about__cmd-prompt">$</span>{" "}
            <span className="about__cmd-input">cat ~/self-eval.txt</span>
          </div>
          <p className="about__eval-text cn">
            工作积极认真,注重细节,具备较强的问题分析与解决能力。善于运用办公自动化软件提升工作效率,能在工作中主动发现问题、分析问题并推动解决。勤奋好学,踏实肯干,动手能力强,具有强烈的责任心与社会责任感。具备良好的团队协作精神与沟通能力,乐于接受新挑战,持续追求自我提升。
          </p>
        </article>

        {/* Timeline */}
        <article className="about__timeline">
          <div className="about__cmd">
            <span className="about__cmd-prompt">$</span>{" "}
            <span className="about__cmd-input">journalctl -u career --reverse</span>
          </div>
          <ol className="about__tl">
            {timeline.map((t, i) => (
              <li key={i} className="about__tl-item">
                <div className="about__tl-marker" aria-hidden>
                  <span className="about__tl-line" />
                  <span
                    className={`about__tl-dot about__tl-dot--${t.type}`}
                    title={typeLabel[t.type]}
                  />
                </div>
                <div className="about__tl-body">
                  <div className="about__tl-meta">
                    <span className="about__tl-year mono">{t.year}</span>
                    <span className={`about__tl-type about__tl-type--${t.type}`}>
                      [{typeLabel[t.type]}]
                    </span>
                  </div>
                  <div className="about__tl-title">
                    {t.title}{" "}
                    <span className="dim">@ {t.org}</span>
                  </div>
                  <ul className="about__tl-detail cn">
                    {t.detail.map((d, j) => (
                      <li key={j}>{d}</li>
                    ))}
                  </ul>
                  <div className="about__tl-tags">
                    {t.tags.map((tag) => (
                      <span key={tag} className="about__tl-tag">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </article>
      </div>
    </section>
  );
}

function CourseList({ courses }: { courses: string[] }) {
  return (
    <>
      {courses.map((c, i) => (
        <li key={c} className="about__course">
          <span className="mute">{String(i + 1).padStart(2, "0")}</span>
          <span className="cn">{c}</span>
          <span className="mute">{(2 + (i % 3)).toFixed(1)}</span>
        </li>
      ))}
    </>
  );
}
