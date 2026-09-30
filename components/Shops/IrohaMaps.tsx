import { ShopIndexData } from "@/lib/types";
const irohaMap = {
  イ: "i",
  ロ: "ro",
  ハ: "ha",
  ニ: "ni",
  ホ: "ho",
  ヘ: "he",
  ト: "to",
  チ: "chi",
  リ: "ri",
  ヌ: "nu",
};

export default async function IrohaMaps({
  iroha,
}: {
  iroha: ShopIndexData["iroha"];
}) {
  return (
    <img
      className="mx-auto w-full max-w-2xl rounded-2xl"
      src={`/map/shop_map_${irohaMap[iroha]}.svg`}
      alt="企画場所の校内マップ"
    />
  );
}
