import { connectChannels, contact } from "../content/site";

function linkProps(href: string) {
  if (href.startsWith("http://") || href.startsWith("https://")) {
    return { target: "_blank", rel: "noreferrer noopener" } as const;
  }
  return {};
}

export function Contact() {
  const email = connectChannels[0];
  const href = email?.href || "#connect";

  return (
    <footer className="contact" id="connect" aria-labelledby="contact-heading">
      <div className="contact-beam" aria-hidden="true" />
      <div className="shell contact-center">
        <h2 id="contact-heading">{contact.heading}</h2>
        <p className="contact-line">{contact.line}</p>
        <a className="contact-cta" href={href} {...linkProps(href)}>
          {contact.cta}
        </a>
      </div>
      <div className="site-foot">
        <div className="shell">
          <p>{contact.legal}</p>
          <p>{contact.signoff}</p>
        </div>
      </div>
    </footer>
  );
}
