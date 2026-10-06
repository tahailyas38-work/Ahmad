import { journey } from "../content/site";
import { Reveal } from "./Reveal";

export function Journey() {
  return (
    <section className="journey" id="journey" aria-labelledby="journey-heading">
      <div className="journey-split">
        <figure className="journey-media">
          <img
            src={journey.image.src}
            alt=""
            width={journey.image.width}
            height={journey.image.height}
            style={
              journey.image.position ? { objectPosition: journey.image.position } : undefined
            }
          />
        </figure>
        <Reveal className="journey-copy">
          <h2 id="journey-heading">{journey.heading}</h2>
          <p className="journey-line">{journey.line}</p>
          <ol>
            {journey.chapters.map((chapter) => (
              <li key={chapter.index}>
                <span>{chapter.index}</span>
                <h3>{chapter.title}</h3>
                <p>{chapter.text}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
