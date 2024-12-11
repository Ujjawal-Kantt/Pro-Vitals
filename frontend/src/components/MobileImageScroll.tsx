// MobileImageScroll.tsx
import React, { useEffect, useRef } from "react";

interface MobileImageScrollProps {
  images: string[];
}

export function MobileImageScroll({ images }: MobileImageScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationFrameId: number;
    let currentScroll = 0;

    const animate = () => {
      if (!container) return;

      currentScroll += 1;
      if (currentScroll >= container.scrollWidth / 2) {
        currentScroll = 0;
      }

      container.style.transform = `translateX(${-currentScroll}px)`;
      animationFrameId = requestAnimationFrame(animate);
    };

    const onImagesLoaded = () => {
      animationFrameId = requestAnimationFrame(animate);
    };

    const imgs = container.querySelectorAll("img");
    let loadedCount = 0;
    imgs.forEach((img) => {
      if (img.complete) {
        loadedCount += 1;
      } else {
        img.addEventListener("load", () => {
          loadedCount += 1;
          if (loadedCount === imgs.length) {
            onImagesLoaded();
          }
        });
      }
    });

    if (loadedCount === imgs.length) {
      onImagesLoaded();
    }

    return () => cancelAnimationFrame(animationFrameId);
  }, [images]);

  return (
    <div className="overflow-hidden">
      <div
        ref={scrollRef}
        className="flex gap-4 py-2"
        style={{ willChange: "transform" }}
      >
        {[...images, ...images].map((src, index) => (
          <div key={index} className="flex-none w-[250px]">
            <img
              src={src}
              alt={`Lifestyle ${index + 1}`}
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
