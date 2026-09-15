import getMicroCmsData from "../microcms";

export default async function Page() {
  const data = await getMicroCmsData("constants");
  if (data.isErr()) {
    console.error(data.error.message);
    return <div>データの取得がうまくいっていません</div>;
  }
  return <div>{data.value.theme}</div>;
}
