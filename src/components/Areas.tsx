import { areas } from "../content/site";
import { Story } from "./Story";

export function Areas() {
  return (
    <Story
      id="work"
      headingId="work-heading"
      kicker={areas.kicker}
      heading={areas.heading}
      lead={areas.lead}
      body={areas.body}
      cta={areas.cta}
      image={areas.image}
    />
  );
}
