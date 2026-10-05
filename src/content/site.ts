/**
 * All public copy and image paths live here.
 *
 * Photographs live in /public/images. To swap one, replace the file
 * and keep `src`, `width`, `height`, and `alt` in step with it.
 *
 * Email, phone, and WeChat stay blank until the real details are known.
 * Use mailto: for email and tel: for phone. WeChat can be a profile URL.
 */

export type TextRun = {
  text: string;
  emphasis?: boolean;
};

export type Photo = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** CSS object-position for cropped thumbnails. */
  position?: string;
};

export type ConnectIcon = "email" | "phone" | "wechat";

export type ConnectChannel = {
  label: string;
  href: string;
  icon: ConnectIcon;
};

export const person = {
  fullName: "Ahmad Amir",
};

export const navigation = [
  { id: "about", label: "About" },
  { id: "journey", label: "Journey" },
  { id: "ventures", label: "Ventures" },
  { id: "milestones", label: "Recognition" },
] as const;

export const hero = {
  heading: person.fullName,
  role: "Director · Founder · Business Builder",
  line: "Working across sourcing, manufacturing, technology, and consumer brands through a growing portfolio of ventures.",
  cta: "Connect",
  image: {
    src: "/images/gallery/09-vanber-front.webp",
    alt: "Ahmad Amir presenting Van‑ber at CUPP.",
    width: 1024,
    height: 768,
    position: "center 18%",
  } satisfies Photo,
  caption: "Presenting Van‑ber at CUPP.",
};

/** Figures that can be read from the businesses and programmes already listed on this page. */
export const metrics = [
  { value: "8", label: "Ventures" },
  { value: "4", label: "Industries" },
  { value: "Hong Kong", label: "Experience" },
  { value: "London", label: "Programme" },
] as const;

/** Lines already used on the page, set as a quote block. */
export const quotes = {
  label: "In his words",
  name: person.fullName,
  lines: [
    "I like exploring new opportunities and building things from the ground up.",
    "My work today spans sourcing, manufacturing, technology, and consumer brands.",
  ],
} as const;

/** Official venture marks along the bottom of the hero. Heights keep them visually even. */
/** Email, phone, and WeChat hrefs stay empty until the real details are supplied. */
export const connectChannels: ConnectChannel[] = [
  { label: "Email", href: "", icon: "email" },
  { label: "Phone", href: "", icon: "phone" },
  { label: "WeChat", href: "", icon: "wechat" },
];

export const brands = [
  { name: "The Bare Edit", href: "https://www.thebareedit.pk/" },
  { name: "Protect It", href: "https://www.protectit.pk/" },
  { name: "Pause It", href: "https://pauseit.pk/" },
  { name: "AFJA Trading", href: "https://www.afjatrading.com/" },
] as const;

export const brandMarks = [
  { name: "AFJA Trading", src: "/logos/afja.svg", href: "https://www.afjatrading.com/" },
  { name: "F&A Sourcing", src: "/logos/fa.svg" },
  { name: "Van‑ber", src: "/logos/vanber.svg", scale: 1.35 },
  { name: "Direct AJ Sourcing", src: "/logos/aj.svg", scale: 1.35 },
  { name: "The Bare Edit", src: "/logos/bare-edit.svg", href: "https://www.thebareedit.pk/", scale: 1.05 },
  { name: "Pause It", src: "/logos/pause-it.svg", href: "https://pauseit.pk/", scale: 0.62 },
] as const;

export const about = {
  heading: "About",
  lead: "Ahmad Amir works across sourcing, manufacturing, technology, and consumer brands, building practical businesses around opportunities worth pursuing.",
  areas: [
    {
      index: "01",
      label: "Sourcing",
      text: "Products from China through Direct AJ Sourcing Limited.",
    },
    {
      index: "02",
      label: "Manufacturing",
      text: "Garments through AFJA Trading Limited and F&A Sourcing Limited.",
    },
    {
      index: "03",
      label: "Technology",
      text: "Van‑ber, developed around a transportation gap in Hong Kong.",
    },
    {
      index: "04",
      label: "Consumer brands",
      text: "The Bare Edit, Protect It, and Pause It.",
    },
  ],
};

export const areas = {
  kicker: "The work",
  heading: ["From clothes", "to everyday brands"],
  lead: "Clothes to wear, products from China, a way around Hong Kong, and things for everyday life.",
  body: "AFJA Trading and F&A Sourcing make and source clothes for the people who wear them. Direct AJ Sourcing brings products from China to wherever people need them. Van‑ber is a way around Hong Kong when local transport leaves a gap. The Bare Edit, Protect It, and Pause It cover everyday jewellery, care for the car, and a pause on discomfort.",
  cta: { href: "#ventures", label: "See the businesses" },
  image: {
    src: "/images/gallery/09-vanber-front.webp",
    alt: "Ahmad Amir presenting Van‑ber at CUPP.",
    width: 1024,
    height: 768,
  } satisfies Photo,
};

export type Venture = {
  name: string;
  role: string;
  year?: string;
  group: "Manufacturing" | "Sourcing" | "Technology" | "Consumer" | "Parent";
  summary: string;
  href?: string;
  featured?: boolean;
};

export const ventures = {
  heading: "Businesses & Ventures",
  line: "Companies and brands across manufacturing, sourcing, technology, and consumer markets.",
  items: [
    {
      name: "Direct AJ Sourcing Limited",
      role: "Director",
      year: "2026",
      group: "Sourcing",
      featured: true,
      summary: "Sourcing products from China to anywhere in the world.",
    },
    {
      name: "AFJA Trading Limited",
      role: "Director",
      year: "2022",
      group: "Manufacturing",
      summary: "Garments manufacturing.",
      href: "https://www.afjatrading.com/",
    },
    {
      name: "F&A Sourcing Limited",
      role: "Director",
      year: "2022",
      group: "Manufacturing",
      summary: "Garments manufacturing and apparel sourcing.",
    },
    {
      name: "Van‑ber",
      role: "Founder",
      year: "2025",
      group: "Technology",
      featured: true,
      summary: "A technology venture developed around a gap in local transportation in Hong Kong.",
    },
    {
      name: "The Bare Edit",
      role: "Director",
      year: "2026",
      group: "Consumer",
      summary: "An everyday jewellery brand.",
      href: "https://www.thebareedit.pk/",
    },
    {
      name: "Protect It",
      role: "Director",
      year: "2026",
      group: "Consumer",
      summary: "A car accessories brand.",
      href: "https://www.protectit.pk/",
    },
    {
      name: "Pause It",
      role: "Director",
      year: "2026",
      group: "Consumer",
      summary: "Products designed to help pause everyday discomfort.",
      href: "https://pauseit.pk/",
    },
    {
      name: "IT Traders Pakistan",
      role: "Director",
      year: "2026",
      group: "Parent",
      featured: true,
      summary: "The parent company behind these business activities.",
    },
  ] satisfies Venture[],
};

export const journey = {
  heading: "The Journey",
  line: "How the work moved from manufacturing into technology and new ventures.",
  chapters: [
    {
      index: "01",
      title: "Manufacturing & Sourcing",
      names: ["AFJA Trading Limited", "F&A Sourcing Limited"],
    },
    {
      index: "02",
      title: "Technology",
      note: "Developed around a transportation gap in Hong Kong.",
      names: ["Van‑ber"],
    },
    {
      index: "03",
      title: "Expanding Into New Ventures",
      names: [
        "Direct AJ Sourcing Limited",
        "The Bare Edit",
        "Protect It",
        "Pause It",
        "IT Traders Pakistan",
      ],
    },
  ],
};

export const milestones = {
  heading: "Recognition & Milestones",
  items: [
    {
      kicker: "CUPP",
      title: "Cyberport University Partnership Programme",
      meta: "Selected · Hong Kong → London",
      body: "Selected to participate in CUPP and present Van‑ber during the London programme.",
    },
    {
      kicker: "Award",
      title: "Mascot Design Competition",
      meta: "Grand Award",
      body: "Won a Mascot Design Competition at Hong Kong Baptist University.",
    },
  ],
};

export const gallery = {
  heading: "Gallery",
  line: "Photographs from CUPP, Van‑ber, and the mascot award.",
  cards: [
    {
      src: "/images/gallery/17-stage.webp",
      alt: "Ahmad Amir on stage at CUPP.",
      width: 1024,
      height: 683,
      position: "center 30%",
      title: "CUPP Presentation Day",
      detail: "On stage at CUPP 2026.",
    },
    {
      src: "/images/gallery/05-speaking.webp",
      alt: "Ahmad Amir speaking on stage at CUPP.",
      width: 1024,
      height: 683,
      position: "62% 30%",
      title: "Speaking at CUPP",
      detail: "Speaking during a CUPP session.",
    },
    {
      src: "/images/gallery/14-vanber-slide.webp",
      alt: "Ahmad Amir presenting the Van‑ber passenger screen.",
      width: 1024,
      height: 768,
      position: "18% 58%",
      title: "Presenting Van‑ber",
      detail: "Walking through Van‑ber in a CUPP session.",
    },
    {
      src: "/images/gallery/08-mascot-award.webp",
      alt: "Ahmad Amir with the Grand Award for Mascot Design.",
      width: 1024,
      height: 682,
      title: "Mascot Design",
      detail: "Grand Award at Hong Kong Baptist University.",
    },
    {
      src: "/images/gallery/07-vanber-team.webp",
      alt: "Ahmad Amir with the Van‑ber team.",
      width: 1024,
      height: 702,
      position: "28% center",
      title: "Van‑ber Preparation",
      detail: "With the Van‑ber team before presenting.",
    },
    {
      src: "/images/gallery/12-discussion.webp",
      alt: "Ahmad Amir in discussion with the team.",
      width: 1024,
      height: 683,
      position: "center 40%",
      title: "In Discussion",
      detail: "Talking with the team during CUPP.",
    },
    {
      src: "/images/gallery/13-cupp-opening.webp",
      alt: "Cyberport University Partnership Programme 2026 opening ceremony.",
      width: 1024,
      height: 683,
      title: "CUPP Opening",
      detail: "Cyberport University Partnership Programme 2026.",
    },
    {
      src: "/images/gallery/02-cupp-room.webp",
      alt: "Ahmad Amir presenting in the CUPP room.",
      width: 1024,
      height: 768,
      position: "70% 42%",
      title: "CUPP Room",
      detail: "Presenting during a CUPP session.",
    },
  ],
};

export const contact = {
  heading: "Connect",
  line: "For business, sourcing, manufacturing, or partnership conversations.",
  cta: "Connect on WeChat",
  signoff: person.fullName,
};
