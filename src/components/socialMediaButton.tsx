import type {IconType} from "react-icons";
import type {SocialMediaButtonProps} from "@/types";

import Link from "next/link";
import {ImSoundcloud, ImInstagram, ImMail2, ImYoutube, ImSpotify} from "react-icons/im";

const socialMediaIcons: Record<number, IconType> = {
  1: ImSoundcloud,
  2: ImInstagram,
  3: ImSpotify,
  4: ImYoutube,
  5: ImMail2,
};

export default function SocialMediaButton({id, href, size, color}: SocialMediaButtonProps) {
  const IconComponent = socialMediaIcons[id];

  return (
    <Link passHref href={href}>
      <IconComponent
        className={`text-${color} pointer transform text-background transition-transform hover:translate-x-1`}
        size={size}
      />
    </Link>
  );
}
