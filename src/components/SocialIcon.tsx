import { Mail, Phone } from "lucide-react";
import type { ConnectIcon } from "../content/site";

function WeChatIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <g transform="translate(12 12) scale(1.38) translate(-11.8 -11.6)" strokeWidth="1.27">
        <path d="M9 4.8c-2.8 0-5 2.1-5 4.7 0 1.5.7 2.8 1.9 3.6l-.6 2.1 2.3-1.2c.4.1.9.2 1.4.2 2.8 0 5-2.1 5-4.7s-2.2-4.7-5-4.7z" />
        <path d="M15.3 9.4c-2.3 0-4.2 1.6-4.2 3.7 0 1.2.6 2.3 1.6 3l-.5 1.8 2-1.1c.4.1.7.2 1.1.2 2.3 0 4.2-1.6 4.2-3.7s-1.9-3.9-4.2-3.9z" />
        <path d="M7.2 9.5h.01M10.6 9.5h.01M13.8 13.1h.01M16.7 13.1h.01" />
      </g>
    </svg>
  );
}

const icons = {
  email: Mail,
  phone: Phone,
} as const;

export function SocialIcon({ icon }: { icon: ConnectIcon }) {
  if (icon === "wechat") return <WeChatIcon />;
  const Icon = icons[icon];
  return <Icon aria-hidden="true" size={18} strokeWidth={1.75} />;
}
