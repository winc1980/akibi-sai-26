import getMicroCmsData from "@/lib/microcms";

export default async function Page() {
  const data = await getMicroCmsData("constants");
  if (data.map_img.length !== 1) {
    throw new Error(`マップの画像が${data.map_img.length}枚ある`);
  }
  return (
    <div className="font-yuji flex flex-col items-center justify-center gap-6 py-15 text-4xl sm:px-6 md:text-6xl xl:flex-row xl:text-[7rem]">
      <p className="flex w-full items-center justify-start text-start md:justify-center">
        学内マップ
      </p>
      <img
        className="w-5xl max-w-dvw"
        src={data.map_img[0].url}
        alt="構内マップ"
      />
    </div>
  );
}
