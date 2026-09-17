import getMicroCmsData from "../microcms";

export default async function Page() {
  const shops = await getMicroCmsData("shops");

  return (
    <div>
      {shops.filter((shop) => shop.category === "food").map((foodShop) => "A")}
    </div>
  );
}
