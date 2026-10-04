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
  metrics: [
    { value: "8", label: "Businesses" },
    { value: "4", label: "Areas of work" },
    { value: "3", label: "Consumer brands" },
    { value: "2022", label: "Where it started" },
  ],
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
  heading: "The work",
  line: "Clothes to wear, products from China, a way around Hong Kong, and things for everyday life.",
  items: [
    {
      title: "AFJA Trading and F&A Sourcing",
      line: "Clothes, made and sourced for the people who wear them.",
    },
    {
      title: "Direct AJ Sourcing",
      line: "Products from China, for wherever people need them.",
    },
    {
      title: "Van-ber",
      line: "A way around Hong Kong when local transport leaves a gap.",
    },
    {
      title: "The Bare Edit, Protect It, and Pause It",
      line: "Everyday jewellery, care for the car, and a pause on discomfort.",
    },
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
  line: "The companies and brands I work on.",
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
      name: "Van-ber",
      role: "Founder",
      year: "2025",
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
  line: "From manufacturing and sourcing, through Van-ber, into new brands.",
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
      marker: "2025",
      title: "Exploring Technology",
      body: [
        { text: "I later explored technology through " },
        { text: "Van-ber", emphasis: true },
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
  line: "Selected for CUPP, and the Grand Award for Mascot Design.",
  cupp: {
    title: "CUPP",
    programme: "Cyberport University Partnership Programme",
    meta: "Selected · Hong Kong → London",
    body: "I was selected from companies across Hong Kong to participate in CUPP, travelling to London for the bootcamp and presenting Van-ber to investors.",
    image: {
      src: "/images/gallery/09-vanber-front.webp",
      alt: "Ahmad Amir presenting Van-ber at CUPP.",
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
  line: "Photographs from CUPP, Van-ber, and the mascot award.",
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
      alt: "Ahmad Amir presenting the Van-ber passenger screen.",
      width: 1024,
      height: 768,
      position: "18% 58%",
      title: "Presenting Van-ber",
      detail: "Walking through Van-ber in a CUPP session.",
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
      alt: "Ahmad Amir with the Van-ber team.",
      width: 1024,
      height: 702,
      position: "28% center",
      title: "Van-ber Preparation",
      detail: "With the Van-ber team before presenting.",
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
  heading: "Let's Connect",
  line: "Have an idea, opportunity, or simply want to connect?",
  cta: "Connect on WeChat",
  signoff: person.fullName,
};
