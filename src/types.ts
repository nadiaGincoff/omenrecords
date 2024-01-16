export interface SocialMediaButton {
  id: number;
  href: string;
}

export interface HeaderProps {
  socialMediaButtons: SocialMediaButton[];
}

export interface MenuItem {
  id: number;
  value: string;
  href: string;
}

export interface SocialMediaButtonProps extends SocialMediaButton {
  size: number;
}

export interface MenuItemProps extends MenuItem {
  size: string;
}

export interface Song {
  id: number;
  artist: string;
  name: string;
  image: string;
  soundcloudId: number;
}

// export interface ImageWithDescription {

// }

// export interface ImageWithDescriptionProps
