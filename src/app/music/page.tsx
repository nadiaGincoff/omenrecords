import {getReleases} from "@/lib/release-db";
import {SubtitleHeader} from "@/components/subtitleHeader";

import ArtworkWithName from "./_components/artworkWithName";

export const dynamic = "force-dynamic";

export default async function Home() {
  const {releases, results} = await getReleases();

  console.log(releases, results, "get releases =========v======");

  return (
    <section className="mt-20 flex min-h-screen w-full flex-col items-center justify-start md:gap-32">
      <SubtitleHeader subtitle="Music" />
      {results === 0 ? (
        <p className="text-center">No releases found</p>
      ) : (
        <div className="flex w-screen flex-row flex-wrap items-center justify-center pb-5 md:gap-5 xl:w-8/12">
          {releases?.map((release, index) => {
            return <ArtworkWithName key={release.id} index={index} release={release} />;
          })}
        </div>
      )}
    </section>
  );
}
