import { ShopData } from "@/lib/types";
import { cn } from "@/lib/utils";
import { WhiteTextBox } from "../WhiteTextBox";
export type ViewType = "card" | "list";
export default function ShopItem({
  shop,
  viewType,
}: {
  shop: ShopData;
  viewType: ViewType;
}) {
  return viewType === "card" ? (
    <CardView shop={shop} />
  ) : (
    <>
      <ListView className="hidden md:flex" shop={shop} />
      <CardView className="block md:hidden" shop={shop} />
    </>
  );
}

function ListView({ shop, className }: { shop: ShopData; className?: string }) {
  // 展示に移行する可能性あり
  const isFoodShop = shop.category === "food";
  return (
    <a
      href={`/shops/${shop.id}`}
      className={cn(
        "relative w-full max-w-dvw items-center justify-start gap-4 border-t-2 px-20 pt-12 pb-20",
        isFoodShop ? "border-t-food" : "border-t-goods",
        className,
      )}
    >
      <div
        className={`absolute -top-5 -left-5 flex h-10 w-40 items-center justify-center rounded-full ${isFoodShop ? "bg-food" : "bg-goods"}`}
      >
        <p> {isFoodShop ? "飲食" : "物販"}</p>
      </div>
      <div
        className={`h-80 w-80 shrink-0 overflow-hidden rounded-3xl border-4 bg-amber-300 ${isFoodShop ? "border-food" : "border-goods"}`}
      >
        <img
          width={shop.icon_img.width}
          height={shop.icon_img.height}
          className="h-full w-full object-cover"
          src={shop.icon_img.url}
          alt={shop.shop_name}
        />
      </div>
      <WhiteTextBox className="px-5 py-6">
        <p className="font-yuji text-start text-4xl font-bold">
          {shop.shop_name}
        </p>
        <p>{shop.long_description}</p>
        <p>いろは：{shop.iroha}</p>
      </WhiteTextBox>
    </a>
  );
}

function CardView({ shop, className }: { shop: ShopData; className?: string }) {
  // ボーダーの色、カテゴリーの背景色を後で変更する
  const isFoodShop = shop.category === "food";

  return (
    <a
      href={`/shops/${shop.id}`}
      className="relative col-span-1 transition-all duration-300 ease-in-out hover:scale-105"
    >
      <div
        className={`font-zen absolute -top-5 -right-5 flex h-10 w-40 items-center justify-center rounded-full font-semibold ${isFoodShop ? "bg-food" : "bg-goods"}`}
      >
        <p> {isFoodShop ? "飲食" : "物販"}</p>
      </div>
      <div
        className={cn(
          "h-full overflow-hidden rounded-xl border-8 bg-white/80",
          isFoodShop ? "border-food" : "border-goods",
          className,
        )}
      >
        <div className="text-akibi-black mb-4 flex flex-col">
          <div className="flex max-h-96 items-center justify-center overflow-hidden">
            <img
              className="h-full w-full object-cover"
              src={shop.icon_img.url}
              alt={shop.shop_name}
            />
          </div>
          <div className="mt-10 flex flex-col gap-4 px-4">
            <div className="font-yuji text-start text-3xl font-bold">
              {shop.shop_name}
            </div>
            <p className="font-zen font-semibold">{shop.long_description}</p>
          </div>
          <div className="font-zen my-3 flex items-end px-4 text-start font-semibold">
            <p>いろは：{shop.iroha}</p>
          </div>
        </div>
      </div>
    </a>
  );
}
