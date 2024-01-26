import type {IconType} from "react-icons";
import type {SocialMediaButtonProps} from "@/types";

import Link from "next/link";
import {ImSoundcloud, ImInstagram, ImMail2, ImYoutube, ImSpotify} from "react-icons/im";

const socialMediaIcons: Record<number, IconType> = {
  1: ImInstagram,
  2: ImSoundcloud,
  3: ImMail2,
  4: ImYoutube,
  5: ImSpotify,
};

export default function SocialMediaButton({id, href, size}: SocialMediaButtonProps) {
  const IconComponent = socialMediaIcons[id];

  return (
    <Link passHref href={href}>
      <IconComponent className="transform transition-transform hover:translate-x-1" size={size} />
    </Link>
  );
}
