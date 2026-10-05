"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const onLoaded = () => {
      gsap.to(video, {
        currentTime: video.duration,
        ease: "none",
        scrollTrigger: {
          trigger: video,
          start: "top top",
          end: "+=3000",
          scrub: true,
          pin: true,
        },
      });
    };

    video.addEventListener("loadedmetadata", onLoaded);

    return () => {
      video.removeEventListener("loadedmetadata", onLoaded);
    };
  }, []);

  return (
    <section className="relative w-full h-screen bg-black">
      <video
        ref={videoRef}
        src="/vulnexa-scan.mp4"
        muted
        playsInline
        preload="auto"
        className="w-full h-full object-cover"
      />
    </section>
  );
}