import { milestones } from "../content/site";
import { Reveal } from "./Reveal";

export function Milestones() {
  return (
    <section className="milestones" id="milestones" aria-labelledby="milestones-heading">
      <Reveal className="shell">
        <header className="mile-intro">
          <h2 id="milestones-heading">{milestones.heading}</h2>
          <p>{milestones.line}</p>
        </header>
        <div className="mile-split">
          <ol>
            {milestones.highlights.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ol>
          <figure>
            <img
              src={milestones.image.src}
              alt={milestones.image.alt}
              width={milestones.image.width}
              height={milestones.image.height}
              style={
                milestones.image.position
                  ? { objectPosition: milestones.image.position }
                  : undefined
              }
            />
          </figure>
        </div>
      </Reveal>
    </section>
  );
}
