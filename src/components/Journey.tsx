import { journey } from "../content/site";
import { Reveal } from "./Reveal";
import { RichText } from "./RichText";

export function Journey() {
  return (
    <section className="section" id="journey" aria-labelledby="journey-heading">
      <Reveal className="wrap">
        <h2 id="journey-heading" className="section-title">
          {journey.heading}
        </h2>
        <div className="chapter-list">
          {journey.chapters.map((chapter) => (
            <article className="chapter" key={chapter.index}>
              <div className="chapter-mark">
                <p className="chapter-index">{chapter.index}</p>
                <p className="chapter-when">{chapter.marker}</p>
              </div>
              <div>
                <h3>{chapter.title}</h3>
                <p className="chapter-body">
                  <RichText runs={chapter.body} />
                </p>
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
