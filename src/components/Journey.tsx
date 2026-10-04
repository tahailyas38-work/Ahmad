import { useLayoutEffect, type CSSProperties } from "react";
import { journey } from "../content/site";
import { RichText } from "./RichText";

const visuals = [
  ["AFJA Trading", "F&A Sourcing"],
  null,
  ["Direct AJ Sourcing", "The Bare Edit", "Protect It", "Pause It", "IT Traders Pakistan"],
] as const;

export function Journey() {
  useLayoutEffect(() => {
    const list = document.querySelector<HTMLElement>(".chapter-list");
    if (!list) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const update = () => {
      if (motion.matches) {
        list.style.setProperty("--rise", "1");
        return;
      }
      const view = window.innerHeight;
      const top = list.getBoundingClientRect().top;
      const start = view * 0.96;
      const end = view * 0.42;
      const raw = start === end ? 1 : (start - top) / (start - end);
      const t = Math.min(1, Math.max(0, raw));
      const rise = t * t * (3 - 2 * t);
      list.style.setProperty("--rise", rise.toFixed(4));
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
    <section className="section" id="journey" aria-labelledby="journey-heading">
      <div className="wrap">
        <h2 id="journey-heading" className="section-title journey-heading">
          {journey.heading}
        </h2>
        <p className="section-line journey-line">{journey.line}</p>
        <div className="chapter-list">
          {journey.chapters.map((chapter, index) => (
            <article
              className="chapter"
              key={chapter.index}
              style={{ "--step": index } as CSSProperties}
            >
              <p className="chapter-when">{chapter.marker}</p>
              <h3>{chapter.title}</h3>
              <p className="chapter-body">
                <RichText runs={chapter.body} />
              </p>
              {index === 1 ? (
                <figure className="chapter-shot">
                  <img
                    src="/images/gallery/11-vanber-smile.webp"
                    alt="Ahmad Amir presenting Van-ber."
                    width={1024}
                    height={768}
                  />
                </figure>
              ) : (
                <ul className="chapter-names">
                  {visuals[index]?.map((name) => (
                    <li key={name}>{name}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
