import { about } from "../content/site";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section className="section about" id="about" aria-labelledby="about-heading">
      <Reveal className="wrap wrap-narrow about-head">
        <p className="eyebrow">Profile</p>
        <h2 id="about-heading">{about.heading}</h2>
        <p className="section-line">{about.lead}</p>
      </Reveal>
      <Reveal className="wrap about-index">
        {about.areas.map((area) => (
          <article key={area.label} className="about-area">
            <p className="about-index-no">{area.index}</p>
            <h3>{area.label}</h3>
            <p>{area.text}</p>
          </article>
        ))}
      </Reveal>
    </section>
  );
}
