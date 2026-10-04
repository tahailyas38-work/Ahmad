import { useState } from "react";
import { gallery } from "../content/site";

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section" id="gallery" aria-labelledby="gallery-heading">
      <div className="wrap">
        <h2 id="gallery-heading" className="section-title gallery-heading">
          {gallery.heading}
        </h2>
        <ul className="gallery-fan">
          {gallery.cards.map((card, index) => {
            const flipped = open === index;
            return (
              <li key={card.src}>
                <button
                  type="button"
                  className={flipped ? "gallery-card is-open" : "gallery-card"}
                  aria-pressed={flipped}
                  aria-label={flipped ? `Hide ${card.title}` : card.title}
                  onClick={() => setOpen(flipped ? null : index)}
                >
                  <span className="gallery-scene">
                    <span className="gallery-flip">
                      <span className="gallery-face gallery-front">
                        <img
                          src={card.src}
                          alt=""
                          width={card.width}
                          height={card.height}
                          loading="lazy"
                          decoding="async"
                          style={card.position ? { objectPosition: card.position } : undefined}
                        />
                      </span>
                      <span className="gallery-face gallery-back">
                        <span className="gallery-caption">
                          <strong>{card.title}</strong>
                          <span>{card.detail}</span>
                        </span>
                      </span>
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
