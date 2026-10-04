import type { CSSProperties } from "react";
import { about } from "../content/site";

export function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-heading">
      <div className="wrap">
        <div className="about-panel">
          <div className="about-copy">
            <h2 id="about-heading">
              {about.heading.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h2>
            <p>{about.line}</p>
          </div>
          <ul className="about-stage">
            {about.notes.map((note) => (
              <li
                key={note.label}
                style={
                  {
                    "--x": note.x,
                    "--drop": note.drop,
                    "--tilt": note.tilt,
                  } as CSSProperties
                }
              >
                <span className="about-thread" aria-hidden="true" />
                <span className="about-node" aria-hidden="true" />
                <p>{note.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
