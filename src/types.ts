import type mongoose from "mongoose";

export interface SocialMediaButtonProps {
  id: number;
  href: string;
  size: number;
  color: string;
}

export interface Release {
  id: string | mongoose.Types.ObjectId;
  artistName: string;
  imageSrc: string;
  songName: string;
  soundcloudId: string;
  hypedditUrl: string;
}

export interface Artist {
  name: string | undefined;
  imageSrc: string | undefined;
  isActive: boolean | undefined;
  soundcloudUrl: string | undefined;
  instagramUrl: string | undefined;
  spotifyUrl: string | undefined;
  id: string | mongoose.Types.ObjectId;
  biography: string;
}
