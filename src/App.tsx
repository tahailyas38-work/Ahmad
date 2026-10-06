import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import { Journey } from "./components/Journey";
import { Milestones } from "./components/Milestones";
import { Quotes } from "./components/Quotes";
import { SiteHeader } from "./components/SiteHeader";
import { Ventures } from "./components/Ventures";
import { Work } from "./components/Work";

gsap.registerPlugin(useGSAP);

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function isDeepLink() {
  const hash = window.location.hash;
  return Boolean(hash && hash !== "#" && hash !== "#top");
}

function blockScroll(event: Event) {
  event.preventDefault();
}

function blockScrollKeys(event: KeyboardEvent) {
  const keys = [" ", "ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End"];
  if (keys.includes(event.key)) event.preventDefault();
}

function lockScroll() {
  window.addEventListener("wheel", blockScroll, { passive: false });
  window.addEventListener("touchmove", blockScroll, { passive: false });
  window.addEventListener("keydown", blockScrollKeys);
}

function unlockScroll() {
  window.removeEventListener("wheel", blockScroll);
  window.removeEventListener("touchmove", blockScroll);
  window.removeEventListener("keydown", blockScrollKeys);
  document.documentElement.classList.remove("intro-lock");
}

export default function App() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    (_context, contextSafe) => {
      const safe = contextSafe ?? ((fn: () => void) => fn);
      if (prefersReducedMotion() || isDeepLink()) {
        document.documentElement.classList.remove("intro-lock");
        return;
      }

      document.documentElement.classList.add("intro-lock");
      lockScroll();

      const header = root.current?.querySelector(".site-header");
      const photo = root.current?.querySelector(".hero-bg");
      const title = root.current?.querySelector(".hero-title h1");
      const kicker = root.current?.querySelectorAll(".hero-focus, .hero-goal");
      const lower = root.current?.querySelectorAll(".hero-stats, .hero-aside");

      if (!header || !photo || !title || !kicker?.length || !lower?.length) {
        unlockScroll();
        return;
      }

      gsap.set(photo, { scale: 1.12, opacity: 0 });
      gsap.set(title, { y: 36, opacity: 0 });
      gsap.set(kicker, { y: 22, opacity: 0 });
      gsap.set(lower, { y: 22, opacity: 0 });
      gsap.set(header, { yPercent: -100, opacity: 0 });

      const play = safe(() => {
        gsap
          .timeline({
            defaults: { ease: "power3.out" },
            onComplete: () => {
              gsap.set(header, { clearProps: "transform" });
              unlockScroll();
            },
          })
          .to(photo, { opacity: 1, scale: 1, duration: 1.15, ease: "power2.out" })
          .to(title, { opacity: 1, y: 0, duration: 0.75 }, "-=0.4")
          .to(kicker, { opacity: 1, y: 0, duration: 0.55, stagger: 0.08 }, "-=0.28")
          .to(lower, { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 }, "-=0.18")
          .to(header, { yPercent: 0, opacity: 1, duration: 0.65, ease: "power3.out" }, "-=0.12");
      });

      if (photo instanceof HTMLImageElement && !photo.complete) {
        photo.addEventListener("load", play, { once: true });
        photo.addEventListener("error", play, { once: true });
        return () => {
          photo.removeEventListener("load", play);
          photo.removeEventListener("error", play);
        };
      }

      play();
      return undefined;
    },
    { scope: root },
  );

  return (
    <div ref={root}>
      <a className="skip" href="#content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="content">
        <Hero />
        <About />
        <Journey />
        <Work />
        <Ventures />
        <Quotes />
        <Milestones />
      </main>
      <Contact />
    </div>
  );
}
