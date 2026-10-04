import { brands, connectChannels, contact, navigation } from "../content/site";

function linkProps(href: string) {
  if (href.startsWith("http://") || href.startsWith("https://")) {
    return { target: "_blank", rel: "noreferrer noopener" } as const;
  }
  return {};
}

export function Contact() {
  const wechat = connectChannels.find((link) => link.icon === "wechat");
  const href = wechat?.href || "#connect";

  return (
    <footer className="contact" id="connect" aria-labelledby="contact-heading">
      <div className="contact-beam" aria-hidden="true" />
      <div className="wrap contact-center">
        <p className="contact-brand">{contact.signoff}</p>
        <h2 id="contact-heading">{contact.heading}</h2>
        <p className="contact-line">{contact.line}</p>
        <a className="contact-cta" href={href} {...linkProps(href)}>
          {contact.cta}
        </a>
      </div>
      <div className="site-foot">
        <div className="wrap">
          <nav aria-label="Brands">
            <ul className="foot-links">
              {brands.map((brand) => (
                <li key={brand.href}>
                  <a href={brand.href} {...linkProps(brand.href)}>
                    {brand.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
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
