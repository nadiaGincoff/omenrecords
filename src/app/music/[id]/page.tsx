import {Suspense} from "react";

import {getRelease} from "@/lib/release-db";
import Loading from "@/app/loading";

import ImageWithDescription from "../_components/ImageWithDescription";

export default async function ReleasePage({params: {id}}: {params: {id: string}}) {
  const {release, error} = await getRelease(id);

  const plainDataString = JSON.stringify(release); // Convert to JSON string
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const plainData = JSON.parse(plainDataString);

  return (
    <div className="max-w-screen·flex-col px-5 md:px-20">
      <Suspense fallback={<Loading />}>
        {error || !release ? (
          <p className="text-center">No Artist Found</p>
        ) : (
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          <ImageWithDescription release={plainData} />
        )}
      </Suspense>
    </div>
  );
}
