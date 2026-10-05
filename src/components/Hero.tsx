import { connectChannels, hero } from "../content/site";
import { SocialIcon } from "./SocialIcon";

function linkProps(href: string) {
  if (href.startsWith("http://") || href.startsWith("https://")) {
    return { target: "_blank", rel: "noreferrer noopener" } as const;
  }
  return {};
}

export function Hero() {
  return (
    <section className="hero" aria-labelledby="intro-heading">
      <div className="wrap hero-layout">
        <div className="hero-copy">
          <h1 id="intro-heading">{hero.heading}</h1>
          <p className="hero-role">{hero.role}</p>
          <p className="hero-line">{hero.line}</p>
          <div className="hero-actions">
            <a className="hero-cta" href="#connect">
              {hero.cta}
            </a>
            <ul className="hero-social">
              {connectChannels.map((link) => {
                const href = link.href || "#connect";
                return (
                  <li key={link.icon}>
                    <a href={href} aria-label={link.label} {...linkProps(href)}>
                      <SocialIcon icon={link.icon} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <figure className="hero-frame">
          <img
            src={hero.image.src}
            alt={hero.image.alt}
            width={hero.image.width}
            height={hero.image.height}
            style={hero.image.position ? { objectPosition: hero.image.position } : undefined}
            fetchPriority="high"
            decoding="async"
          />
          <figcaption>{hero.caption}</figcaption>
        </figure>
      </div>
    </section>
  );
}
