import { quotes } from "../content/site";

export function Quotes() {
  return (
    <section className="quote-band" aria-labelledby="quote-heading">
      <img
        src={quotes.image.src}
        alt=""
        width={quotes.image.width}
        height={quotes.image.height}
        style={quotes.image.position ? { objectPosition: quotes.image.position } : undefined}
      />
      <div className="quote-veil" aria-hidden="true" />
      <blockquote>
        <p id="quote-heading">{quotes.line}</p>
        <footer>
          <img
            src={quotes.portrait.src}
            alt="Ahmad Amir."
            width={80}
            height={80}
            style={
              quotes.portrait.position
                ? { objectPosition: quotes.portrait.position }
                : undefined
            }
          />
          <cite>
            <strong>{quotes.heading}</strong>
            <span>{quotes.role}</span>
          </cite>
        </footer>
      </blockquote>
    </section>
  );
}
