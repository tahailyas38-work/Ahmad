import type { CSSProperties } from "react";
import { brandMarks } from "../content/site";

function markStyle(scale: number | undefined): CSSProperties {
  return { "--mark": scale ?? 1 } as CSSProperties;
}

export function BrandStrip() {
  return (
    <div className="brand-band">
      <h3 className="brand-heading">The brands</h3>
      <div className="brand-strip" aria-label="The brands">
      <ul className="brand-track">
        {brandMarks.map((mark) => (
          <li key={mark.name}>
            {mark.href ? (
              <a href={mark.href} target="_blank" rel="noreferrer noopener">
                <img src={mark.src} alt={mark.name} style={markStyle("scale" in mark ? mark.scale : undefined)} />
              </a>
            ) : (
              <img src={mark.src} alt={mark.name} style={markStyle("scale" in mark ? mark.scale : undefined)} />
            )}
          </li>
        ))}
        {brandMarks.map((mark) => (
          <li key={`${mark.name}-2`} aria-hidden="true">
            <img src={mark.src} alt="" style={markStyle("scale" in mark ? mark.scale : undefined)} />
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}
