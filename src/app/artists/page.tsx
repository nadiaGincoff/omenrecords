import {getArtists} from "@/lib/artist-db";
import {SubtitleHeader} from "@/components/subtitleHeader";

import ArtistImageWithName from "./artistImageWithName";

export default async function Page() {
  const {artists, results} = await getArtists();

  return (
    <section className="mt-20 flex min-h-screen w-full flex-col items-center justify-start gap-10 md:gap-32">
      <SubtitleHeader subtitle="artists" />
      {results === 0 ? (
        <p className="text-center">No artist Found</p>
      ) : (
        <div className="flex w-screen flex-row flex-wrap items-center justify-center gap-10 pb-16 xl:w-8/12">
          {artists?.map((artist, index) => {
            return <ArtistImageWithName key={artist.id} artist={artist} index={index} />;
          })}
        </div>
      )}
    </section>
  );
}
