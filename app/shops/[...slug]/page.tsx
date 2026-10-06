import IrohaMaps from "@/components/Shops/IrohaMaps";
import { WhiteTextBox } from "@/components/WhiteTextBox";
import getMicroCmsData from "@/lib/microcms";
import { ShopData, ShopIndexData } from "@/lib/types";
import { cn } from "cn";
import { notFound } from "next/navigation";
import { ArrowLeft, Handbag, MapPin } from "lucide-react";
import * as motion from "motion/react-client";
import Link from "next/link";
import type { ReactNode } from "react";
import { CachedImage } from "@/components/image/CachedImage";

// [slug]になりうるすべてのページの値を返すと、すべてに対してhtmlをあらかじめ生成してくれる
export async function generateStaticParams() {
  const posts = await getMicroCmsData("shops");

  return posts.map((post) => ({
    slug: [post.id],
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  if (slug.length !== 1) throw new Error("slugがおかしいです");
  const shop = (await getMicroCmsData("shops")).find(
    (shops) => shops.id === slug[0],
  );
  if (!shop) {
    notFound();
  }
  const shopIndex = (await getMicroCmsData("shop_indexes")).find(
    (index) => index.iroha === shop.iroha,
  );
  if (!shopIndex) {
    notFound();
  }
  return <ShopPage shop={shop} shopIndex={shopIndex} />;
}

async function ShopPage({
  shop,
  shopIndex,
}: {
  shop: ShopData;
  shopIndex: ShopIndexData;
}) {
  const isFoodShop = shop.category === "food";
  return (
    <div className="font-zen text-akibi-black flex w-full flex-col items-center overflow-x-clip px-5 pt-28 pb-24 sm:px-10">
      <motion.div
        className="w-full max-w-5xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Link
          href="/shops"
          className="text-akibi-black/70 hover:text-akibi-black inline-flex items-center gap-2 text-lg font-bold transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          模擬店一覧へ
        </Link>
      </motion.div>

      <motion.section
        className="mt-10 flex w-full max-w-5xl flex-col items-center gap-10 md:flex-row md:items-center md:gap-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="relative w-full max-w-sm shrink-0">
          <div
            className={cn(
              "absolute -top-4 -right-2 z-10 flex h-11 w-28 items-center justify-center rounded-full text-lg font-bold text-white shadow-md",
              isFoodShop ? "bg-food" : "bg-goods",
            )}
          >
            {isFoodShop ? "飲食" : "物販"}
          </div>
          <div
            className={cn(
              "overflow-hidden rounded-[2.5rem] border-8 bg-white shadow-xl",
              isFoodShop ? "border-food" : "border-goods",
            )}
          >
            <CachedImage
              className="max-h-104 w-full object-contain p-4"
              src={shop.icon_img.url}
              alt={shop.shop_name}
            />
          </div>
        </div>

        <div className="flex w-full flex-col items-center gap-6 text-center md:items-start md:text-left">
          <h1 className="font-yuji text-5xl leading-tight font-bold sm:text-6xl">
            {shop.shop_name}
          </h1>

          {shop.short_description && (
            <p className="flex items-center gap-3 rounded-full bg-white/60 px-6 py-3 text-lg font-bold">
              <Handbag
                className={cn(
                  "h-6 w-6 shrink-0",
                  isFoodShop ? "text-food" : "text-goods",
                )}
              />
              {shop.short_description}
            </p>
          )}

          <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <span
              className={cn(
                "flex items-center gap-2 rounded-full px-5 py-2.5 font-bold text-white shadow-sm",
                isFoodShop ? "bg-food" : "bg-goods",
              )}
            >
              <MapPin className="h-5 w-5" />
              いろは「{shop.iroha}」
            </span>
            <span className="rounded-full bg-white/60 px-5 py-2.5 font-bold">
              {shopIndex.place}
            </span>
          </div>
        </div>
      </motion.section>

      {shop.menu && (
        <ShopSection title="メニュー" image="/shop/carrot.webp">
          <div
            className="text-[1.2rem] leading-10 font-bold whitespace-pre-wrap [&_a]:underline [&_li]:ml-6 [&_ol]:list-decimal [&_p]:mb-3 [&_ul]:list-disc"
            dangerouslySetInnerHTML={{ __html: shop.menu }}
          />
        </ShopSection>
      )}

      <ShopSection title="お店について" image="/shop/hakusai.webp">
        <p className="text-[1.2rem] leading-10 font-bold whitespace-pre-wrap">
          {shop.long_description}
        </p>
      </ShopSection>

      <ShopSection title="企画場所" image="/shop/tofu.webp">
        <IrohaMaps iroha={shopIndex.iroha} />
      </ShopSection>
    </div>
  );
}

function ShopSection({
  title,
  image,
  children,
}: {
  title: string;
  image: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-24 flex w-full max-w-4xl flex-col items-center">
      <div className="font-yuji flex items-center justify-center gap-3">
        <CachedImage className="w-16 -rotate-6 sm:w-20" src={image} alt="a" />
        <h2 className="text-5xl font-bold sm:text-6xl">{title}</h2>
      </div>
      <WhiteTextBox className="mt-8 w-full px-6 py-8 sm:px-12 sm:py-10">
        {children}
      </WhiteTextBox>
    </section>
  );
}
