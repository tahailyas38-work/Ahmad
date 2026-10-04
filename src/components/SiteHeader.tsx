import { useEffect, useId, useRef, useState } from "react";
import { navigation, person } from "../content/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [current, setCurrent] = useState("");
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    let frame = 0;

    const update = () => {
      setScrolled(window.scrollY > 8);
      const line = window.scrollY + 96;
      let active = "";
      const items = [...navigation.map((item) => item.id), "connect"];
      for (const id of items) {
        const section = document.getElementById(id);
        if (!section) continue;
        const top = section.getBoundingClientRect().top + window.scrollY;
        if (top <= line) active = id;
      }
      setCurrent(active);
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

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 961px)");
    const onChange = () => {
      if (media.matches) setOpen(false);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
        return;
      }
      if (event.key !== "Tab") return;

      const links = menuRef.current
        ? [...menuRef.current.querySelectorAll<HTMLElement>("a[href]")]
        : [];
      const items = [buttonRef.current, ...links].filter(
        (item): item is HTMLElement => item !== null,
      );
      if (items.length === 0) return;

      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={scrolled ? "site-header is-scrolled" : "site-header"} id="top">
      <nav className="nav-bar" aria-label="Primary">
        <a className="brand" href="#top">
          {person.fullName}
        </a>
        <div className="nav-links">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={current === item.id ? "true" : undefined}
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          className="nav-cta"
          href="#connect"
          aria-current={current === "connect" ? "true" : undefined}
        >
          Let's Connect
        </a>
        <button
          ref={buttonRef}
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>
      <div
        ref={menuRef}
        id={menuId}
        className="menu"
        hidden={!open}
        inert={!open}
      >
        {navigation.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            aria-current={current === item.id ? "true" : undefined}
            onClick={close}
          >
            {item.label}
          </a>
        ))}
        <a href="#connect" onClick={close}>
          Let's Connect
        </a>
      </div>
    </header>
  );
}
