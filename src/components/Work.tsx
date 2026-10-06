import { Bitcoin, Cpu, Plane, Shirt, ShoppingBag, TrendingUp } from "lucide-react";
import { work } from "../content/site";
import { Reveal } from "./Reveal";

const icons = {
  plane: Plane,
  factory: Shirt,
  cpu: Cpu,
  cart: ShoppingBag,
  building: Bitcoin,
  trend: TrendingUp,
} as const;

export function Work() {
  return (
    <section className="work" id="work" aria-labelledby="work-heading">
      <Reveal className="shell">
        <header className="section-intro">
          <h2 id="work-heading">{work.heading}</h2>
          <p>{work.line}</p>
        </header>
        <ul className="work-grid">
          {work.items.map((item) => {
            const Icon = icons[item.icon as keyof typeof icons];
            return (
              <li key={item.label}>
                <Icon aria-hidden="true" strokeWidth={1.4} />
                <h3>{item.label}</h3>
                <p>{item.text}</p>
              </li>
            );
          })}
        </ul>
      </Reveal>
    </section>
  );
}
