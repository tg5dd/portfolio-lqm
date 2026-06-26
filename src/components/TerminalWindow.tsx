import type { ReactNode } from "react";
import "./TerminalWindow.css";

interface TerminalWindowProps {
  title?: string;
  path?: string;
  controls?: boolean;
  children: ReactNode;
  className?: string;
}

/**
 * A faux macOS terminal window. Renders the traffic-light row + title bar
 * and a body that scrolls if content overflows.
 */
export default function TerminalWindow({
  title = "zsh",
  path = "~/netop",
  controls = true,
  children,
  className = "",
}: TerminalWindowProps) {
  return (
    <div className={`tw ${className}`}>
      <div className="tw__bar">
        {controls && (
          <div className="tw__dots" aria-hidden>
            <span className="tw__dot tw__dot--red" />
            <span className="tw__dot tw__dot--amber" />
            <span className="tw__dot tw__dot--green" />
          </div>
        )}
        <div className="tw__title">
          <span className="tw__title-text">{title}</span>
          <span className="tw__title-path">— {path}</span>
        </div>
        <div className="tw__bar-meta" aria-hidden>
          <span>UTF-8</span>
          <span>·</span>
          <span>VT100</span>
        </div>
      </div>
      <div className="tw__body">{children}</div>
    </div>
  );
}
