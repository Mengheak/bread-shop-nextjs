"use client";

import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";

interface SlideImagesProps {
  images: (string | StaticImageData)[];
  interval?: number;
}

export default function SlideImages({ images, interval = 3000 }: SlideImagesProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(id);
  }, [images.length, interval]);

  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-lg">
      {images.map((src, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-700 ${
            idx === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={`Slide ${idx + 1}`}
            fill
            style={{ objectFit: "cover" }}
            priority={idx === 0}
          />
        </div>
      ))}

    </div>
  );
}
