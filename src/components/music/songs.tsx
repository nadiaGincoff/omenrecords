import type {Song} from "@/types";

import {getSongs} from "@/data";

import ImageWithDescription from "./imageWithDescription";

export default async function ListOfSongs() {
  const songs = await getSongs();

  console.log(songs, "render");

  return (
    <div className="flex w-full flex-col items-center justify-center gap-10">
      {songs.length > 0 ? (
        songs.map((song) => <ImageWithDescription key={song.id} song={song} />)
      ) : (
        <p>without songs :c</p>
      )}
    </div>
  );
}
