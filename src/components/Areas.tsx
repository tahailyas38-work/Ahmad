import { areas, hero } from "../content/site";

const traces = [
  [20, 36],
  [48, 18],
  [78, 28],
  [108, 48],
  [150, 70],
  [188, 40],
  [214, 22],
  [250, 46],
  [286, 78],
  [320, 58],
  [348, 30],
  [12, 150],
  [370, 160],
  [30, 250],
  [360, 270],
  [70, 340],
  [200, 360],
  [320, 330],
];

export function Areas() {
  return (
    <section className="section" id="work" aria-labelledby="work-heading">
      <div className="wrap">
        <header className="work-intro">
          <h2 id="work-heading">{areas.heading}</h2>
          <p>{areas.line}</p>
        </header>
        <div className="work-board">
          <div className="work-grid">
            {areas.items.map((item) => (
              <article className="area" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.line}</p>
              </article>
            ))}
          </div>
          <svg className="work-wires" viewBox="0 0 220 420" aria-hidden="true">
            <path d="M0 108H92c28 0 46 16 46 42v48" />
            <path d="M0 312H92c28 0 46-16 46-42v-48" />
            <path d="M138 210H220" />
          </svg>
          <div className="work-hub">
            <svg className="work-traces" viewBox="0 0 400 400" aria-hidden="true">
              {traces.map(([x, y]) => (
                <g key={`${x}-${y}`}>
                  <line x1="200" y1="200" x2={x} y2={y} />
                  <circle cx={x} cy={y} r="2.4" />
                </g>
              ))}
            </svg>
            <div className="work-core">
              {hero.portrait ? (
                <img
                  src={hero.portrait.src}
                  alt=""
                  width={hero.portrait.width}
                  height={hero.portrait.height}
                />
              ) : (
                <span>Ahmad</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
