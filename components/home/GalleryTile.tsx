"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import type { galleryImages } from "@/lib/homeData";

type Props = {
  image: (typeof galleryImages)[number];
  sizes: string;
  className?: string;
};

export default function GalleryTile({ image, sizes, className = "" }: Props) {
  const tileRef = useRef<HTMLDivElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false });

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const rect = e.currentTarget.getBoundingClientRect();
    setCursor({ x: e.clientX - rect.left, y: e.clientY - rect.top, visible: true });
  };

  return (
    <div
      ref={tileRef}
      data-gallery-tile
      onPointerMove={handlePointerMove}
      onPointerLeave={() => setCursor((c) => ({ ...c, visible: false }))}
      className={`group relative rounded-xl overflow-hidden ambient-shadow ${className}`}
    >
      <div data-gallery-image className="absolute inset-0">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/0 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
      <p className="absolute bottom-3 left-4 text-on-primary font-semibold text-sm md:text-base drop-shadow-sm transition-transform duration-300 group-hover:-translate-y-1">
        {image.label}
      </p>

      <motion.span
        aria-hidden="true"
        className="hidden md:flex absolute top-0 left-0 items-center justify-center w-16 h-16 -ml-8 -mt-8 rounded-full bg-surface/95 text-primary-container text-xs font-semibold backdrop-blur-sm pointer-events-none"
        animate={{
          x: cursor.x,
          y: cursor.y,
          opacity: cursor.visible ? 1 : 0,
          scale: cursor.visible ? 1 : 0.6,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 28, mass: 0.5 }}
      >
        View
      </motion.span>
    </div>
  );
}
