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
      <div className="hero-stage">
        <div className="hero-copy">
          <p className="hero-greeting">{hero.greeting}</p>
          <h1 id="intro-heading" className="hero-name">
            {hero.name}
          </h1>
          <p className="hero-line">{hero.line}</p>
          <a className="hero-cta" href="#connect">
            {hero.cta}
          </a>
        </div>
        {hero.portrait ? (
          <div className="hero-media">
            <img
              src={hero.portrait.src}
              alt={hero.portrait.alt}
              width={hero.portrait.width}
              height={hero.portrait.height}
              fetchPriority="high"
              decoding="async"
            />
          </div>
        ) : null}
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
    </section>
  );
}
