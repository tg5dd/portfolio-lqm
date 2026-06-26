import { useMemo, useState } from "react";
import {
  projects,
  projectCategoryLabel,
  type ProjectCategory,
} from "../data/projects";
import "./Projects.css";

const FILTERS: Array<{ key: ProjectCategory | "all"; count: number }> = (
  ["all", "qa", "network", "lab"] as const
).map((k) => ({
  key: k,
  count:
    k === "all"
      ? projects.length
      : projects.filter((p) => p.category === k).length,
}));

export default function Projects() {
  const [active, setActive] = useState<ProjectCategory | "all">("all");
  const filtered = useMemo(
    () =>
      active === "all"
        ? projects
        : projects.filter((p) => p.category === active),
    [active]
  );

  return (
    <section className="projects">
      <header className="projects__head">
        <span className="section-eyebrow">section · 03 / projects</span>
        <h2 className="projects__title">$ tree ~/projects --dirsfirst</h2>
        <p className="projects__sub dim cn">
          实习与项目经验汇总 —— 测试类、网络类、课程实验,按时间倒序排列。
        </p>
      </header>

      <div className="projects__filter" role="tablist" aria-label="project category">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            role="tab"
            aria-selected={active === f.key}
            className={`projects__filter-btn ${active === f.key ? "is-active" : ""}`}
            onClick={() => setActive(f.key)}
          >
            <span className="projects__filter-arrow" aria-hidden>
              {active === f.key ? ">" : " "}
            </span>
            <span className="projects__filter-name">
              {projectCategoryLabel[f.key].toLowerCase()}
            </span>
            <span className="projects__filter-count">[{f.count}]</span>
          </button>
        ))}
      </div>

      <ul className="projects__list">
        {filtered.map((p) => (
          <li key={p.id} className={`project project--${p.category}`}>
            <div className="project__head">
              <div className="project__headline">
                <span className="project__tree" aria-hidden>
                  ├─
                </span>
                <h3 className="project__name">{p.name}</h3>
                <span
                  className={`project__status project__status--${p.status.toLowerCase()}`}
                >
                  [{p.status}]
                </span>
              </div>
              <div className="project__meta">
                {p.role && <span className="project__role">{p.role}</span>}
                <span className="project__cat">{p.category}</span>
                <span className="project__year">· {p.year}</span>
              </div>
            </div>

            <p className="project__desc cn">{p.description}</p>

            {p.bullets && p.bullets.length > 0 && (
              <ul className="project__bullets cn">
                {p.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            )}

            {p.highlight && (
              <div className="project__highlight">
                <span className="project__highlight-mark">›</span> {p.highlight}
              </div>
            )}

            <div className="project__foot">
              <ul className="project__stack" aria-label="tech stack">
                {p.stack.map((s) => (
                  <li key={s} className="project__stack-item">
                    {s}
                  </li>
                ))}
              </ul>
              <div className="project__links">
                {p.links.repo && (
                  <a
                    href={p.links.repo}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="project__link"
                  >
                    <span className="project__link-key">repo</span>
                    <span className="project__link-val">→</span>
                  </a>
                )}
                {p.links.demo && (
                  <a
                    href={p.links.demo}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="project__link project__link--demo"
                  >
                    <span className="project__link-key">demo</span>
                    <span className="project__link-val">↗</span>
                  </a>
                )}
                {!p.links.repo && !p.links.demo && (
                  <span className="project__link project__link--private">
                    <span className="project__link-key">internal / nda</span>
                  </span>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>

      {filtered.length === 0 && (
        <div className="projects__empty">
          <span className="red">ERR_NO_PROJECTS</span> no entries in this category.
        </div>
      )}
    </section>
  );
}
