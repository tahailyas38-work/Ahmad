import { about } from "../content/site";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section className="about" id="about" aria-labelledby="about-heading">
      <Reveal className="shell about-inner">
        <h2 id="about-heading">{about.heading}</h2>
        <p>{about.body}</p>
      </Reveal>
    </section>
  );
}
