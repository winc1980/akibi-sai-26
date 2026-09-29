import getMicroCmsData from "@/lib/microcms";

export default async function Page() {
  const data = await getMicroCmsData("events");
  return <div>page</div>;
}
