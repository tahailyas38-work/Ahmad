import { useLayoutEffect, useState } from "react";
import { gallery } from "../content/site";

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  useLayoutEffect(() => {
    const fan = document.querySelector<HTMLElement>(".gallery-fan");
    const section = document.getElementById("gallery");
    if (!fan || !section) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const update = () => {
      if (motion.matches) {
        fan.style.setProperty("--gather", "1");
        return;
      }
      const view = window.innerHeight;
      const fanTop = fan.getBoundingClientRect().top;
      const start = view * 0.92;
      const end = view * 0.36;
      const raw = start === end ? 1 : (start - fanTop) / (start - end);
      const t = Math.min(1, Math.max(0, raw));
      const gather = t * t * (3 - 2 * t);
      fan.style.setProperty("--gather", gather.toFixed(4));
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    motion.addEventListener("change", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      motion.removeEventListener("change", onScroll);
    };
  }, []);

  return (
    <section className="section" id="gallery" aria-labelledby="gallery-heading">
      <div className="wrap">
        <h2 id="gallery-heading" className="section-title gallery-heading">
          {gallery.heading}
        </h2>
        <p className="section-line gallery-line">{gallery.line}</p>
        <div className="gallery-scale">
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
      </div>
    </section>
  );
}
