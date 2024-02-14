import {getReleases} from "@/lib/release-db";

import ImageWithDescription from "./ImageWithDescription";

export default async function Index() {
  const {releases, results} = await getReleases();

  return (
    <div className="max-w-screen·flex-col px-5 md:px-20">
      {results === 0 ? (
        <p className="text-center">No releases Found</p>
      ) : (
        releases?.map((release, index) => {
          return <ImageWithDescription key={release.id} index={index} release={release} />;
        })
      )}
    </div>
  );
}
