import { ventures, type Venture } from "../content/site";
import { Reveal } from "./Reveal";

function meta(venture: Venture) {
  return venture.year ? `${venture.role} · ${venture.year}` : venture.role;
}

function siteLabel(href: string) {
  return href.replace(/^https?:\/\/(?:www\.)?/, "").replace(/\/$/, "");
}

function VentureLink({ venture }: { venture: Venture }) {
  if (!venture.href) return null;
  return (
    <a className="venture-site" href={venture.href} target="_blank" rel="noreferrer noopener">
      {siteLabel(venture.href)}
    </a>
  );
}

export function Ventures() {
  const featured = ventures.items.filter((item) => item.featured);
  const rest = ventures.items.filter((item) => !item.featured);

  return (
    <section className="section ventures" id="ventures" aria-labelledby="ventures-heading">
      <Reveal className="wrap">
        <p className="eyebrow">Portfolio</p>
        <h2 id="ventures-heading">{ventures.heading}</h2>
        <p className="section-line">{ventures.line}</p>
      </Reveal>
      <Reveal className="wrap venture-featured">
        {featured.map((venture) => (
          <article className="venture-lead" key={venture.name}>
            <p className="venture-group">{venture.group}</p>
            <h3>{venture.name}</h3>
            <p className="venture-meta">{meta(venture)}</p>
            <p className="venture-summary">{venture.summary}</p>
            <VentureLink venture={venture} />
          </article>
        ))}
      </Reveal>
      <Reveal className="wrap venture-list">
        {rest.map((venture) => (
          <article className="venture" key={venture.name}>
            <p className="venture-group">{venture.group}</p>
            <div className="venture-main">
              <h3>{venture.name}</h3>
              <p className="venture-meta">{meta(venture)}</p>
            </div>
            <p className="venture-summary">{venture.summary}</p>
            <VentureLink venture={venture} />
          </article>
        ))}
      </Reveal>
    </section>
  );
}
