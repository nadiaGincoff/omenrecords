import type mongoose from "mongoose";

export interface SocialMediaButtonProps {
  id: number;
  href: string;
  size: number;
}

export interface Release {
  id: string | mongoose.Types.ObjectId;
  artistName: string;
  imageSrc: string;
  songName: string;
  soundcloudId: string;
  hypedditUrl: string;
}
