import type {Song} from "@/types";

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
    console.log(songs);

    return songs;
  } catch (error) {
    console.log(error);
    throw new Error(`Error when fetching songs`);
  }
}
