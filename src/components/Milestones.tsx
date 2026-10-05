import { milestones } from "../content/site";
import { Reveal } from "./Reveal";

export function Milestones() {
  return (
    <section className="section milestone-section" id="milestones" aria-labelledby="milestones-heading">
      <Reveal className="wrap wrap-focus">
        <p className="eyebrow">Selected</p>
        <h2 id="milestones-heading">{milestones.heading}</h2>
        <div className="milestone-grid">
          {milestones.items.map((item) => (
            <article className="milestone-card" key={item.title}>
              <p className="milestone-kicker">{item.kicker}</p>
              <h3>{item.title}</h3>
              <p className="milestone-meta">{item.meta}</p>
              <p className="milestone-body">{item.body}</p>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
