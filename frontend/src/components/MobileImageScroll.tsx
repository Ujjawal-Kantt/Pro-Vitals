import React, { useEffect, useRef } from 'react';

interface MobileImageScrollProps {
  images: string[];
}

export function MobileImageScroll({ images }: MobileImageScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollWidth = container.scrollWidth;
    let currentScroll = 0;
    let animationFrameId: number;

    const animate = () => {
      if (!container) return;
      
      currentScroll += 0.5;
      if (currentScroll >= scrollWidth / 2) {
        currentScroll = 0;
      }
      
      container.style.transform = `translateX(${-currentScroll}px)`;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="overflow-hidden">
      <div 
        ref={scrollRef} 
        className="flex gap-3 py-2"
        style={{ willChange: 'transform' }}
      >
        {[...images, ...images].map((src, index) => (
          <div key={index} className="flex-none w-[180px]">
            <img
              src={src}
              alt={`Lifestyle ${index + 1}`}
              className="w-full aspect-[4/3] object-cover rounded-lg shadow-md"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}