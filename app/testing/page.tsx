import { CachedImage } from "@/components/image/CachedImage";
import getMicroCmsData from "@/lib/microcms";

export default async function TestingPage() {
  const data = await getMicroCmsData("shops");
  const shop = data[0];
  return (
    <div className="p-20">
      <CachedImage src={shop.icon_img.url} />
    </div>
  );
}
