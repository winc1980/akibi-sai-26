import getMicroCmsData from "../../lib/microcms";
import CardContainer from "@/components/Shops/CardContainer";

export default async function Page() {
  const shops = await getMicroCmsData("shops");

  return <CardContainer shops={shops} />;
}
