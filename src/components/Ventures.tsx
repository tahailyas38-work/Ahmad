import { ventures, type Venture } from "../content/site";
import { Reveal } from "./Reveal";

function meta(venture: Venture) {
  return venture.year ? `${venture.role} · ${venture.year}` : venture.role;
}

function siteLabel(href: string) {
  return href.replace(/^https?:\/\/(?:www\.)?/, "").replace(/\/$/, "");
}

export function Ventures() {
  return (
    <section className="section" id="ventures" aria-labelledby="ventures-heading">
      <Reveal className="wrap">
        <h2 id="ventures-heading" className="section-title ventures-heading">
          {ventures.heading}
        </h2>
        <p className="section-line ventures-line">{ventures.line}</p>
        <div className="venture-list">
          {ventures.items.map((venture, index) => (
            <article className="venture" key={venture.name}>
              <p className="venture-index">{String(index + 1).padStart(2, "0")}</p>
              <h3>{venture.name}</h3>
              <div className="venture-detail">
                <p className="venture-meta">{meta(venture)}</p>
                <p className="venture-summary">{venture.summary}</p>
              </div>
              {venture.href ? (
                <a
                  className="venture-site"
                  href={venture.href}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {siteLabel(venture.href)}
                </a>
              ) : (
                <span className="venture-site" />
              )}
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
