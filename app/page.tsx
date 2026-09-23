import Greeting from "@/components/Greeting/Greeting";
import { MainVisual } from "@/components/MainVisual";
// import Maps from "@/components/Maps/Maps";
import MainTheme from "@/components/Theme/MainTheme";
import getMicroCmsData from "@/lib/microcms";

export default async function Home() {
  const data = await getMicroCmsData("constants");
  return (
    <div>
      <MainVisual />
      <MainTheme theme={data.theme} />
      <Greeting message={data.head_greetings} />
      {/* <Maps /> */}
    </div>
  );
}
