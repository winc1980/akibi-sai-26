"use client";

import { useCachedImageRegistry } from "@/app/client-layout";
import { DetailedHTMLProps, ImgHTMLAttributes } from "react";

export function CachedImage({
  src,
  alt,
  ...rest
}: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> & {
  src: string;
}) {
  const registry = useCachedImageRegistry();
  const cachedUrl = registry[src];
  if (!cachedUrl) {
    throw new Error(`キャッシュされた画像ファイルが見つかりません：${src}`);
  }
  return <img {...rest} alt={alt} src={`/webp/${cachedUrl}`} />;
}
