import { areas } from "../content/site";

const [garments, sourcing, vanber, brands] = areas.items;

export function Areas() {
  return (
    <section className="section" id="work" aria-labelledby="work-heading">
      <div className="wrap">
        <header className="work-intro">
          <h2 id="work-heading">{areas.heading}</h2>
          <p>{areas.line}</p>
        </header>
        <div className="work-bento">
          <article className="work-card is-highlight">
            <h3>{vanber.title}</h3>
            <p>{vanber.line}</p>
          </article>
          <article className="work-card work-card-wide">
            <h3>{garments.title}</h3>
            <p>{garments.line}</p>
          </article>
          <article className="work-card work-card-broad">
            <h3>{sourcing.title}</h3>
            <p>{sourcing.line}</p>
          </article>
          <article className="work-card work-card-brands">
            <h3>{brands.title}</h3>
            <p>{brands.line}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
