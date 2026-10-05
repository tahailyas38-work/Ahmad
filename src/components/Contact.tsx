import { connectChannels, contact, navigation } from "../content/site";
import { SocialIcon } from "./SocialIcon";

function linkProps(href: string) {
  if (href.startsWith("http://") || href.startsWith("https://")) {
    return { target: "_blank", rel: "noreferrer noopener" } as const;
  }
  return {};
}

export function Contact() {
  return (
    <footer className="contact" id="connect" aria-labelledby="contact-heading">
      <div className="wrap contact-grid">
        <div className="contact-main">
          <p className="eyebrow">{contact.signoff}</p>
          <h2 id="contact-heading">{contact.heading}</h2>
          <p className="contact-line">{contact.line}</p>
        </div>
        <ul className="contact-channels">
          {connectChannels.map((link) => {
            const href = link.href || "#connect";
            return (
              <li key={link.icon}>
                <a href={href} {...linkProps(href)}>
                  <SocialIcon icon={link.icon} />
                  <span>{link.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="site-foot">
        <div className="wrap">
          <p>{contact.signoff}</p>
          <nav aria-label="On this page">
            <ul className="foot-links">
              {navigation.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
