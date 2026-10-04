import { milestones } from "../content/site";
import { Reveal } from "./Reveal";

const items = [
  { index: "01", ...milestones.cupp },
  { index: "02", ...milestones.mascot },
];

export function Milestones() {
  return (
    <section className="section" id="milestones" aria-labelledby="milestones-heading">
      <Reveal className="wrap">
        <h2 id="milestones-heading" className="section-title">
          {milestones.heading}
        </h2>
        <div className="milestone-grid">
          {items.map((item) => (
            <article className="milestone" key={item.index}>
              <figure>
                <img
                  src={item.image.src}
                  alt={item.image.alt}
                  width={item.image.width}
                  height={item.image.height}
                  loading="lazy"
                  decoding="async"
                />
                <span>{item.meta}</span>
              </figure>
              <div className="milestone-copy">
                <p className="milestone-index">{item.index}</p>
                <h3>{item.title}</h3>
                {"programme" in item && item.programme ? (
                  <p className="milestone-programme">{item.programme}</p>
                ) : null}
                <p className="milestone-body">{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
