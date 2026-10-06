import { ventures } from "../content/site";
import { Reveal } from "./Reveal";

export function Ventures() {
  return (
    <section className="ventures" id="ventures" aria-labelledby="ventures-heading">
      <div className="shell venture-layout">
        <header className="venture-copy">
          <h2 id="ventures-heading">
            My Businesses{" "}
            <br />
            &amp; Ventures
          </h2>
          <p>{ventures.line}</p>
        </header>
        <Reveal>
          <ol className="venture-list">
            {ventures.items.map((venture) => (
              <li key={venture.name}>
                <div>
                  <h3>
                    {venture.href ? (
                      <a href={venture.href} target="_blank" rel="noreferrer noopener">
                        {venture.name}
                      </a>
                    ) : (
                      venture.name
                    )}
                  </h3>
                  <small>
                    {venture.role}, {venture.year}
                  </small>
                  {venture.summary ? <p>{venture.summary}</p> : null}
                </div>
                <span>{venture.group}</span>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
