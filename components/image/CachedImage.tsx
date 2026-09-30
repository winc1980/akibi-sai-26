import imageRegistry from "@/public/webp/registry.json";
import { DetailedHTMLProps, ImgHTMLAttributes } from "react";
import * as v from "valibot";

const webpImageDir = "/webp";

const schema = v.array(
  v.tuple([
    v.pipe(v.string(), v.url()),
    v.pipe(v.string(), v.endsWith(".webp")),
  ]),
);

const parsedRegistry = Object.fromEntries(v.parse(schema, imageRegistry));

export function CachedImage({
  src,
  alt,
  ...rest
}: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> & {
  src: string;
}) {
  const cachedUrl = parsedRegistry[src];
  if (!cachedUrl) {
    throw new Error(`キャッシュされた画像ファイルが見つかりません：${src}`);
  }
  return <img {...rest} alt={alt} src={`${webpImageDir}/${cachedUrl}`} />;
}
