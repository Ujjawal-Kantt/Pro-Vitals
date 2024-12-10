import React from 'react';
import { useEffect, useRef } from 'react';

interface ImageColumnProps {
  images: string[];
  direction: 'up' | 'down';
}

export function ImageColumn({ images, direction }: ImageColumnProps) {
  const columnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const column = columnRef.current;
    if (!column) return;

    const scrollHeight = column.scrollHeight;
    let currentScroll = direction === 'down' ? 0 : scrollHeight / 2;

    const animate = () => {
      if (!column) return;
      
      if (direction === 'down') {
        currentScroll += 1;
        if (currentScroll >= scrollHeight / 2) {
          currentScroll = 0;
        }
      } else {
        currentScroll -= 1;
        if (currentScroll <= 0) {
          currentScroll = scrollHeight / 2;
        }
      }
      
      column.style.transform = `translateY(${-currentScroll}px)`;
      requestAnimationFrame(animate);
    };

    const animation = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animation);
  }, [direction]);

  return (
    <div className="h-full overflow-hidden relative">
      <div ref={columnRef} className="transform transition-transform duration-100">
        {[...images, ...images].map((src, index) => (
          <div key={index} className="w-full aspect-[3/4] p-2">
            <img
              src={src}
              alt={`Lifestyle ${index + 1}`}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}