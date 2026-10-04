import { useEffect, useState } from "react";
import { milestones } from "../content/site";

const items = [
  { index: "01", ...milestones.cupp },
  { index: "02", ...milestones.mascot },
];

export function Milestones() {
  const [shift, setShift] = useState(0);
  const [pinned, setPinned] = useState(() => {
    if (typeof window === "undefined") return true;
    return (
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
      !window.matchMedia("(max-width: 860px)").matches
    );
  });

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const narrow = window.matchMedia("(max-width: 860px)");
    let frame = 0;

    const update = () => {
      const staticLayout = motion.matches || narrow.matches;
      setPinned(!staticLayout);
      if (staticLayout) {
        setShift(0);
        return;
      }
      const track = document.querySelector<HTMLElement>(".milestone-track");
      const sticky = document.querySelector<HTMLElement>(".milestone-sticky");
      if (!track || !sticky) return;
      const distance = track.offsetHeight - sticky.offsetHeight;
      const stickAt = Number.parseFloat(getComputedStyle(sticky).top) || 0;
      const scrolled = stickAt - track.getBoundingClientRect().top;
      const progress = distance > 0 ? Math.min(1, Math.max(0, scrolled / distance)) : 0;
      setShift(progress);
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    motion.addEventListener("change", onScroll);
    narrow.addEventListener("change", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      motion.removeEventListener("change", onScroll);
      narrow.removeEventListener("change", onScroll);
    };
  }, []);

  const steps = items.length - 1;

  return (
    <section className="section milestone-section" id="milestones" aria-labelledby="milestones-heading">
      <div className={pinned ? "milestone-track" : "milestone-track is-static"}>
        <div className="milestone-sticky">
          <header className="wrap milestone-head">
            <h2 id="milestones-heading" className="section-title">
              {milestones.heading}
            </h2>
            <p className="section-line">{milestones.line}</p>
          </header>
          <div className="wrap milestone-stage">
            <div className="milestone-window">
              <div
                className="milestone-reel"
                style={pinned ? { transform: `translateY(calc(${-shift * steps} * 100% / ${items.length}))` } : undefined}
              >
                {items.map((item) => (
                  <article className="milestone-slide" key={item.index}>
                    <p className="milestone-index">{item.index}</p>
                    <h3>{item.title}</h3>
                    {"programme" in item && item.programme ? (
                      <p className="milestone-programme">{item.programme}</p>
                    ) : null}
                    <p className="milestone-body">{item.body}</p>
                    <figure className="milestone-inline">
                      <img
                        src={item.image.src}
                        alt={item.image.alt}
                        width={item.image.width}
                        height={item.image.height}
                        loading="lazy"
                        decoding="async"
                      />
                    </figure>
                  </article>
                ))}
              </div>
            </div>
            <div className="milestone-visual" aria-hidden="true">
              {items.map((item, index) => (
                <figure key={item.index} style={{ opacity: pinned ? (index === 0 ? 1 - shift : shift) : 0 }}>
                  <img
                    src={item.image.src}
                    alt=""
                    width={item.image.width}
                    height={item.image.height}
                  />
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
