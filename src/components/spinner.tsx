"use client";
import Lottie from "react-lottie-player";

import lottieJson from "../../public/lottie-files/loading.json";

export default function Spinner() {
  return (
    <Lottie
      loop
      play
      animationData={lottieJson}
      style={{width: 200, height: 200, filter: "grayscale(100%)"}}
    />
  );
}
