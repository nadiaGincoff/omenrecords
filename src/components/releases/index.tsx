"use client";

import releases from "../../data/releases.json";
import ImageWithDescription from "./ImageWithDescription.tsx";

export default function Index() {
  return (
    <div className="max-w-screen·flex-col px-5 md:px-20">
      {releases.map((release) => {
        return <ImageWithDescription key={release.id} release={release} />;
      })}
    </div>
  );
}
