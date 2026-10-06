import { metrics } from "../content/site";

export function Metrics() {
  return (
    <section className="metrics" aria-label="Overview">
      <div className="shell metric-row">
        {metrics.map((metric) => (
          <article key={metric.label}>
            <strong>{metric.word}</strong>
            <p>{metric.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
