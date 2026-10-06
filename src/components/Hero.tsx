import { hero, metrics } from "../content/site";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="intro-heading">
      <img
        className="hero-bg"
        src={hero.image.src}
        alt={hero.image.alt}
        width={hero.image.width}
        height={hero.image.height}
        fetchPriority="high"
        decoding="async"
      />
      <div className="hero-stage">
        <div className="hero-title">
          <div className="hero-kicker">
            <p className="hero-focus">{hero.focus}</p>
            <p className="hero-goal">{hero.goal}</p>
          </div>
          <h1 id="intro-heading">{hero.heading}</h1>
        </div>
        <ul className="hero-stats">
          {metrics.map((metric) => (
            <li key={metric.label}>
              <div>
                <strong>{metric.word}</strong>
                <span>{metric.label}</span>
              </div>
            </li>
          ))}
        </ul>
        <div className="hero-aside">
          <p className="hero-line">{hero.line}</p>
          <a className="btn btn-light" href="#connect">
            {hero.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
