"use client";

import releases from "../../data/releases.json";

import ImageWithDescription from "./ImageWithDescription.tsx";

export default function Index() {
  return (
    <div>
      {releases.map((release) => {
        return <ImageWithDescription key={release.id} release={release} />;
      })}
    </div>
  );
}
