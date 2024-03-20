"use client";
import Lottie from "react-lottie-player";

import lottieJson from "../../public/lottie-files/loading.json";

export default function LoadingPage() {
  return (
    <div className="flex h-screen w-full content-center justify-center ">
      <Lottie
        loop
        play
        animationData={lottieJson}
        style={{width: 250, height: 250, filter: "grayscale(100%)"}}
      />
    </div>
  );
}
