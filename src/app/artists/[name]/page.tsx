import {Suspense} from "react";

import {getArtist} from "@/lib/artist-db";
import LoadingPage from "@/app/loading";

import Artist from "./artist";

export default async function ArtistPage({params: {name}}: {params: {name: string}}) {
  const {artist, error} = await getArtist(name);

  const plainDataString = JSON.stringify(artist); // Convert to JSON string
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const plainData = JSON.parse(plainDataString);

  return (
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    <Suspense fallback={<LoadingPage />}>
      {error ? <p className="text-center">No Artist Found</p> : <Artist artist={plainData} />}
    </Suspense>
  );
}
