import { useEffect } from "react";
import { About } from "./components/About";
import { Areas } from "./components/Areas";
import { Contact } from "./components/Contact";
import { Gallery } from "./components/Gallery";
import { Hero } from "./components/Hero";
import { Journey } from "./components/Journey";
import { Milestones } from "./components/Milestones";
import { SiteHeader } from "./components/SiteHeader";
import { Ventures } from "./components/Ventures";

export default function App() {
  useEffect(() => {
    const root = document.documentElement;
    let frame = 0;

    const update = () => {
      const ventures = document.getElementById("ventures");
      const gallery = document.getElementById("gallery");
      if (!ventures || !gallery) return;
      const edge = window.innerHeight * 0.42;
      const light =
        ventures.getBoundingClientRect().top <= edge &&
        gallery.getBoundingClientRect().top > edge;
      root.classList.toggle("theme-light", light);
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <>
      <a className="skip" href="#content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="content">
        <Hero />
        <About />
        <Areas />
        <Ventures />
        <Journey />
        <Milestones />
        <Gallery />
      </main>
      <Contact />
    </>
  );
}
