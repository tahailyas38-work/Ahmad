import { metrics } from "../content/site";
import { Reveal } from "./Reveal";

export function Metrics() {
  return (
    <section className="metric-band" aria-label="Overview">
      <Reveal className="wrap metric-grid">
        {metrics.map((metric) => (
          <article key={metric.label} className="metric-card">
            <p className="metric-value">{metric.value}</p>
            <p className="metric-label">{metric.label}</p>
          </article>
        ))}
      </Reveal>
    </section>
  );
}
