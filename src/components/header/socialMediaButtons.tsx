import type {IconType} from "react-icons";
import type {SocialMediaButtonProps, SocialMediaButton as ISocialMediaButton} from "@/types";

import Link from "next/link";
import {ImSoundcloud, ImInstagram, ImMail2, ImYoutube, ImSpotify} from "react-icons/im";

import {socialMediaButtons} from "@/data";

const socialMediaIcons: Record<number, IconType> = {
  1: ImInstagram,
  2: ImSoundcloud,
  3: ImMail2,
  4: ImYoutube,
  5: ImSpotify,
};

// eslint-disable-next-line react/function-component-definition
const SocialMediaButton: React.FC<SocialMediaButtonProps> = ({id, href, size}) => {
  const IconComponent = socialMediaIcons[id];

  return (
    <Link passHref href={href}>
      <IconComponent
        className="transform transition-transform hover:translate-x-1 hover:text-green-200"
        size={size}
      />
    </Link>
  );
};

export default function SocialMediaButtons({size}: {size: number}) {
  return (
    <div className="flex flex-row flex-nowrap gap-4">
      {socialMediaButtons.map(({id, href}: ISocialMediaButton) => (
        <SocialMediaButton key={id} href={href} id={id} size={size} />
      ))}
    </div>
  );
}
