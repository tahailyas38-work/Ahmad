import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import { Journey } from "./components/Journey";
import { Metrics } from "./components/Metrics";
import { Milestones } from "./components/Milestones";
import { SiteHeader } from "./components/SiteHeader";
import { Ventures } from "./components/Ventures";

export default function App() {
  return (
    <>
      <a className="skip" href="#content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="content">
        <Hero />
        <Metrics />
        <About />
        <Journey />
        <Ventures />
        <Milestones />
      </main>
      <Contact />
    </>
  );
}
