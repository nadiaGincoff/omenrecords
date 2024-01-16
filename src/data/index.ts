import type {MenuItem, SocialMediaButton, Song} from "@/types";

export const socialMediaButtons: SocialMediaButton[] = [
  {
    id: 1,
    href: "https://www.instagram.com/theomenrecords/",
  },
  {
    id: 2,
    href: "https://soundcloud.com/theomenrecords",
  },
  {
    id: 3,
    href: "https://www.gmail.com/",
  },
  {
    id: 4,
    href: "https://www.youtube.com/@theomenrecords",
  },
  {
    id: 5,
    href: "https://www.spotify.com/",
  },
];

export const menuItems: MenuItem[] = [
  {
    id: 1,
    value: "Music",
    href: "/",
  },
  {
    id: 2,
    value: "Artists",
    href: "/artists",
  },
];

export async function getSongs(): Promise<Song[]> {
  let songs: Song[] | [] = [];

  try {
    if (process.env.songs) {
      const csv = await fetch(process.env.songs).then((res) => res.text());

      songs = csv
        .split("\n")
        .splice(1)
        .map((row) => {
          const [id, artist, image, name, soundcloudId] = row.split(",");

          return {id: Number(id), artist, image, name, soundcloudId: Number(soundcloudId)};
        });
    } else {
      throw new Error("Failed to fetch songs, check json please :) and env");
    }

    return songs;
  } catch (error) {
    console.log(error);
    throw new Error(`Error when fetching songs`);
  }
}
