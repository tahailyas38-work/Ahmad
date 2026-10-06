/**
 * All public copy and image paths live here.
 *
 * Photographs live in /public/images. To swap one, replace the file
 * and keep `src`, `width`, `height`, and `alt` in step with it.
 *
 * Email stays blank until the real address is known.
 * Use mailto: for email.
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

export type ConnectIcon = "email";

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
  { id: "work", label: "Work" },
  { id: "ventures", label: "Ventures" },
  { id: "milestones", label: "Recognition" },
] as const;

export const hero = {
  focus: "Focus",
  goal: "Goal",
  heading: "Entrepreneur",
  line: "I work across sourcing, manufacturing, technology, consumer brands, real estate investments, and stocks and commodities.",
  cta: "Connect via Email",
  image: {
    src: "/images/hero-stage.jpg",
    alt: "Ahmad Amir speaking on stage.",
    width: 1024,
    height: 654,
  } satisfies Photo,
};

/** Figures that can be read from the businesses and programmes already listed on this page. */
export const metrics = [
  {
    word: "6+",
    label: "Areas of Work",
  },
  {
    word: "9+",
    label: "Ventures",
  },
] as const;

/** Lines already used on the page, set as a quote block. */
export const quotes = {
  heading: person.fullName,
  role: "Entrepreneur",
  line: "I like exploring new opportunities and building things from the ground up.",
  image: {
    src: "/images/quote-business.jpg",
    alt: "",
    width: 1280,
    height: 720,
    position: "center",
  } satisfies Photo,
  portrait: {
    src: "/images/dummy/hero.jpg",
    alt: "",
    width: 1920,
    height: 1080,
    position: "68% 12%",
  } satisfies Photo,
};

/** Email href stays empty until the real address is supplied. */
export const connectChannels: ConnectChannel[] = [
  { label: "Email", href: "", icon: "email" },
];

export const about = {
  heading: "About Me",
  body: "I build and direct companies, and I am also active in real estate investments and stocks and commodities. I have experience in Hong Kong, and was selected to participate in CUPP and present Van‑ber during the London programme. I like exploring new opportunities and building things from the ground up.",
};

export const work = {
  heading: "My Work",
  line: "Sourcing, manufacturing, technology, consumer brands, real estate investments, and stocks and commodities.",
  items: [
    {
      icon: "plane",
      label: "Sourcing",
      text: "I source products from China to anywhere in the world through AJ Sourcing Limited.",
    },
    {
      icon: "factory",
      label: "Manufacturing",
      text: "I manufacture garments through AFJA Trading Limited and F&A Sourcing Limited.",
    },
    {
      icon: "cpu",
      label: "Technology",
      text: "I developed Van‑ber around a transportation gap in Hong Kong.",
    },
    {
      icon: "cart",
      label: "Consumer brands",
      text: "I direct The Bare Edit, Protect It, and Pause It.",
    },
    {
      icon: "building",
      label: "Real estate investments",
      text: "I am active in real estate investments.",
    },
    {
      icon: "trend",
      label: "Stocks & commodities",
      text: "I am active in stocks and commodities.",
    },
  ],
};

export const areas = {
  kicker: "The work",
  heading: ["From clothes", "to everyday brands"],
  lead: "Clothes to wear, products from China, a way around Hong Kong, and things for everyday life.",
  body: "AFJA Trading and F&A Sourcing make and source clothes for the people who wear them. AJ Sourcing brings products from China to wherever people need them. Van‑ber is a way around Hong Kong when local transport leaves a gap. The Bare Edit, Protect It, and Pause It cover everyday jewellery, care for the car, and a pause on discomfort.",
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
  group: "Manufacturing" | "Sourcing" | "Technology" | "Consumer" | "Parent" | "Investment";
  summary?: string;
  href?: string;
  featured?: boolean;
};

export const ventures = {
  heading: "My Businesses & Ventures",
  line: "Companies I direct or founded, an investment, and the parent behind the ecommerce brands.",
  items: [
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
      summary: "A technology venture developed around a gap in local transportation in Hong Kong.",
    },
    {
      name: "Phantom Imports",
      role: "Investor",
      year: "2024",
      group: "Investment",
      summary: "Imports cars from Japan and sells them in Pakistan.",
    },
    {
      name: "IT Traders Pakistan",
      role: "Director",
      year: "2026",
      group: "Parent",
      summary: "The parent company behind the ecommerce businesses.",
    },
    {
      name: "AJ Sourcing Limited",
      role: "Director",
      year: "2026",
      group: "Sourcing",
      summary: "Sourcing products from China to anywhere in the world.",
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
  ] satisfies Venture[],
};

export const journey = {
  heading: "My Journey",
  line: "From manufacturing and sourcing, through Van‑ber, into new brands.",
  image: {
    src: "/images/journey.jpg",
    alt: "",
    width: 864,
    height: 1152,
    position: "center",
  } satisfies Photo,
  chapters: [
    {
      index: "1",
      title: "Manufacturing & Sourcing",
      text: "Started in garments manufacturing and apparel sourcing.",
    },
    {
      index: "2",
      title: "Exploring Technology",
      text: "Expanded into technology with Van‑ber in Hong Kong.",
    },
    {
      index: "3",
      title: "Building Across Opportunities",
      text: "Expanded into sourcing, consumer brands, and investments.",
    },
  ],
};

export const milestones = {
  heading: "CUPP Milestone",
  line: "I was selected through the Cyberport University Partnership Programme (CUPP) to attend the London bootcamp and present Van‑ber to investors and industry professionals.",
  image: {
    src: "/images/cupp.jpg",
    alt: "Ahmad Amir at the Cyberport University Partnership Programme 2026 Graduation Ceremony.",
    width: 1024,
    height: 682,
    position: "center 42%",
  } satisfies Photo,
  highlights: [
    {
      title: "Cyberport University Partnership Programme",
      text: "I participated in one of Hong Kong's leading entrepreneurship programmes.",
    },
    {
      title: "London Bootcamp",
      text: "I travelled to London as part of the programme.",
    },
    {
      title: "Investor Presentation",
      text: "I presented the Van‑ber concept to investors and industry professionals.",
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
  heading: "Let's Connect",
  line: "For business, sourcing, manufacturing, or partnership conversations.",
  cta: "Connect via Email",
  signoff: person.fullName,
  legal: "© 2026 All rights reserved.",
};
