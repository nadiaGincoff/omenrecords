"use client";

import releases from "../../data/releases.json";

import ImageWithDescription from "./ImageWithDescription.tsx";

export default function Index() {
  return (
    <div className="max-w-screen·flex-col px-5 md:px-20">
      {releases.map((release, index) => {
        return <ImageWithDescription key={release.id} index={index} release={release} />;
      })}
    </div>
  );
}
