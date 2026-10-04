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
  { id: "work", label: "Work" },
  { id: "ventures", label: "Ventures" },
  { id: "journey", label: "Journey" },
  { id: "gallery", label: "Gallery" },
] as const;

export const hero = {
  greeting: "Hi, I'm",
  name: "Ahmad",
  line: "I like exploring new opportunities and building things from the ground up. My work today spans sourcing, manufacturing, technology, and consumer brands.",
  portrait: {
    src: "/images/portrait.webp",
    alt: "Ahmad Amir",
    width: 760,
    height: 979,
  } satisfies Photo,
  cta: "Let's Connect",
};

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

export const about = {
  heading: ["Building from", "the ground up"],
  line: "I enjoy exploring opportunities and turning ideas into something real. My work spans sourcing, manufacturing, technology, and consumer brands.",
  notes: [
    { label: "Sourcing products", x: "4%", drop: "16%", tilt: "-8deg" },
    { label: "Apparel production", x: "36%", drop: "46%", tilt: "6deg" },
    { label: "Technology ventures", x: "54%", drop: "14%", tilt: "7deg" },
    { label: "Consumer brands", x: "60%", drop: "56%", tilt: "-4deg" },
    { label: "New opportunities", x: "30%", drop: "72%", tilt: "3deg" },
  ],
};

export const areas = {
  heading: "What I Do",
  line: "Sourcing, manufacturing, technology, and consumer brands.",
  items: [
    { title: "Sourcing", line: "Products, suppliers, and markets." },
    { title: "Manufacturing", line: "Apparel, production, and supply." },
    { title: "Technology", line: "Ideas turned into products." },
    { title: "Brands", line: "Consumer products and new opportunities." },
  ],
};

export type Venture = {
  name: string;
  role: string;
  year?: string;
  summary: string;
  href?: string;
};

export const ventures = {
  heading: "Businesses & Ventures",
  items: [
    {
      name: "Direct AJ Sourcing Limited",
      role: "Director",
      year: "2026",
      summary: "Sourcing products from China to anywhere in the world.",
    },
    {
      name: "AFJA Trading Limited",
      role: "Director",
      year: "2022",
      summary: "Garments manufacturing.",
      href: "https://www.afjatrading.com/",
    },
    {
      name: "F&A Sourcing Limited",
      role: "Director",
      year: "2022",
      summary: "Garments manufacturing and apparel sourcing.",
    },
    {
      name: "Vanber",
      role: "Founder",
      summary:
        "A technology venture I developed around a gap in local transportation in Hong Kong.",
    },
    {
      name: "The Bare Edit",
      role: "Director",
      year: "2026",
      summary: "An everyday jewellery brand.",
      href: "https://www.thebareedit.pk/",
    },
    {
      name: "Protect It",
      role: "Director",
      year: "2026",
      summary: "A car accessories brand.",
      href: "https://www.protectit.pk/",
    },
    {
      name: "Pause It",
      role: "Director",
      year: "2026",
      summary:
        "A consumer brand creating products designed to help pause everyday discomfort.",
      href: "https://pauseit.pk/",
    },
    {
      name: "IT Traders Pakistan",
      role: "Director",
      year: "2026",
      summary: "The parent company behind my business activities.",
    },
  ] satisfies Venture[],
};

export const journey = {
  heading: "The Journey",
  chapters: [
    {
      index: "01",
      marker: "2022",
      title: "Manufacturing & Sourcing",
      body: [
        {
          text: "My work began with garments manufacturing and apparel sourcing through ",
        },
        { text: "AFJA Trading Limited", emphasis: true },
        { text: " and " },
        { text: "F&A Sourcing Limited", emphasis: true },
        { text: "." },
      ],
    },
    {
      index: "02",
      marker: "Vanber",
      title: "Exploring Technology",
      body: [
        { text: "I later explored technology through " },
        { text: "Vanber", emphasis: true },
        {
          text: ", developing an app around a gap in local transportation in Hong Kong.",
        },
      ],
    },
    {
      index: "03",
      marker: "2026 →",
      title: "Building Across Opportunities",
      body: [
        {
          text: "My work expanded into sourcing and consumer brands, including ",
        },
        { text: "Direct AJ Sourcing Limited", emphasis: true },
        { text: ", " },
        { text: "The Bare Edit", emphasis: true },
        { text: ", " },
        { text: "Protect It", emphasis: true },
        { text: ", " },
        { text: "Pause It", emphasis: true },
        { text: ", and " },
        { text: "IT Traders Pakistan", emphasis: true },
        { text: "." },
      ],
    },
  ],
};

export const milestones = {
  heading: "Recognition & Milestones",
  cupp: {
    title: "CUPP",
    programme: "Cyberport University Partnership Programme",
    meta: "Selected · Hong Kong → London",
    body: "I was selected from companies across Hong Kong to participate in CUPP, travelling to London for the bootcamp and presenting Vanber to investors.",
    image: {
      src: "/images/gallery/09-vanber-front.webp",
      alt: "Ahmad Amir presenting Vanber at CUPP.",
      width: 1024,
      height: 768,
    } satisfies Photo,
  },
  mascot: {
    title: "Mascot Design Competition",
    meta: "Grand Award",
    body: "I won the Grand Award for Mascot Design at the Faculty of Science and Technology Logo and Mascot Design Competition, Hong Kong Baptist University.",
    image: {
      src: "/images/gallery/08-mascot-award.webp",
      alt: "Ahmad Amir with the Grand Award for Mascot Design.",
      width: 1024,
      height: 682,
    } satisfies Photo,
  },
};

export const gallery = {
  heading: "Gallery",
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
      src: "/images/gallery/14-vanber-slide.webp",
      alt: "Ahmad Amir presenting the Vanber passenger screen.",
      width: 1024,
      height: 768,
      position: "18% 58%",
      title: "Presenting Vanber",
      detail: "Walking through Vanber in a CUPP session.",
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
      alt: "Ahmad Amir with the Vanber team.",
      width: 1024,
      height: 702,
      position: "28% center",
      title: "Vanber Preparation",
      detail: "With the Vanber team before presenting.",
    },
    {
      src: "/images/gallery/13-cupp-opening.webp",
      alt: "Cyberport University Partnership Programme 2026 opening ceremony.",
      width: 1024,
      height: 683,
      title: "CUPP Opening",
      detail: "Cyberport University Partnership Programme 2026.",
    },
  ],
};

export const contact = {
  heading: "Let's Connect",
  line: "Have an idea, opportunity, or simply want to connect?",
  cta: "Connect on WeChat",
  signoff: person.fullName,
};
