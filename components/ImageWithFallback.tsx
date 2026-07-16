"use client";

import Image from "next/image";
import { useState } from "react";
import type { Img } from "@/lib/data";

type Props = {
  img: Img;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

/**
 * Renders a remote demo image; if it fails to load (offline, 404, blocked),
 * swaps to the on-brand local SVG placeholder so no frame ever shows broken.
 */
export default function ImageWithFallback({
  img,
  width,
  height,
  className,
  priority,
  sizes,
}: Props) {
  const [src, setSrc] = useState(img.src);
  return (
    <Image
      src={src}
      alt={img.alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      sizes={sizes}
      onError={() => setSrc(img.fallback)}
    />
  );
}
