"use client";

import { useCachedImageRegistry } from "@/app/client-layout";
import { DetailedHTMLProps, ImgHTMLAttributes } from "react";

export function CachedImage<T extends string>({
  src,
  alt,
  ...rest
}: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> & {
  src: string;
  alt: T extends "" ? never : T;
}) {
  const registry = useCachedImageRegistry();
  const cachedUrl = registry[src];
  if (!cachedUrl) {
    return <img {...rest} alt={alt} src={src} />;
    // throw new Error(`キャッシュされた画像ファイルが見つかりません：${src}`);
  }
  return <img {...rest} alt={alt} src={`/webp/${cachedUrl}`} />;
}
