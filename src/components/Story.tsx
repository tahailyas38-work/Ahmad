import type { Photo } from "../content/site";

type StoryProps = {
  id: string;
  headingId: string;
  kicker: string;
  heading: readonly string[];
  lead: string;
  body: string;
  cta: { href: string; label: string };
  image: Photo;
};

export function Story({ id, headingId, kicker, heading, lead, body, cta, image }: StoryProps) {
  return (
    <section className="section story" id={id} aria-labelledby={headingId}>
      <div className="wrap story-grid">
        <div className="story-copy">
          <p className="story-kicker">{kicker}</p>
          <h2 id={headingId}>
            {heading.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <p className="story-lead">{lead}</p>
          <p className="story-body">{body}</p>
          <a className="story-cta" href={cta.href}>
            {cta.label}
            <span aria-hidden="true">→</span>
          </a>
        </div>
        <figure className="story-frame">
          <img
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            style={image.position ? { objectPosition: image.position } : undefined}
            loading="lazy"
            decoding="async"
          />
        </figure>
      </div>
    </section>
  );
}
