import { journey } from "../content/site";
import { Reveal } from "./Reveal";

export function Journey() {
  return (
    <section className="section journey" id="journey" aria-labelledby="journey-heading">
      <Reveal className="wrap wrap-narrow">
        <p className="eyebrow">Progression</p>
        <h2 id="journey-heading">{journey.heading}</h2>
        <p className="section-line">{journey.line}</p>
      </Reveal>
      <Reveal className="wrap chapter-rail">
        {journey.chapters.map((chapter) => (
          <article className="chapter" key={chapter.index}>
            <p className="chapter-index">{chapter.index}</p>
            <h3>{chapter.title}</h3>
            {"note" in chapter && chapter.note ? <p className="chapter-note">{chapter.note}</p> : null}
            <ul className="chapter-names">
              {chapter.names.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </article>
        ))}
      </Reveal>
    </section>
  );
}
