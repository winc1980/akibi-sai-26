import getMicroCmsData from "@/lib/microcms";
import { AccessInfo } from "@/components/Maps/AccessInfo";
import { WhiteTextBox } from "@/components/WhiteTextBox";
import { ReactNode } from "react";

export default async function Page() {
  const data = await getMicroCmsData("constants");
  if (data.map_img.length !== 1) {
    throw new Error(`マップの画像が${data.map_img.length}枚ある`);
  }
  return (
    <div className="flex flex-col items-center gap-10 px-6 py-20">
      <SectionContainer label="マップ">
        <iframe
          title="秋田公立美術大学へのアクセス"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3070.396112670887!2d140.08830607649836!3d39.68579689980126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f8fc39c48cfd6bb%3A0x5fe0cc54f10a8f6a!2z56eL55Sw5YWs56uL576O6KGT5aSn5a2m!5e0!3m2!1sja!2sjp!4v1759910921868!5m2!1sja!2sjp"
          loading="lazy"
          className="xs:max-w-[95dvw] block aspect-5/3 w-4xl max-w-dvw rounded-2xl border-0"
        />
      </SectionContainer>
      <SectionContainer label="アクセス">
        <WhiteTextBox className="xs:max-w-[95dvw] w-4xl max-w-dvw">
          <AccessInfo />
        </WhiteTextBox>
      </SectionContainer>
      <SectionContainer label="学内マップ">
        <img
          className="xs:max-w-[95dvw] w-4xl max-w-dvw rounded-2xl"
          src={data.map_img[0].url}
          alt="構内マップ"
        />
      </SectionContainer>
    </div>
  );
}

function SectionContainer({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="font-yuji xs:text-5xl flex w-full flex-col items-center justify-center gap-6 text-4xl sm:text-7xl xl:flex-row xl:text-8xl">
      <p className="flex w-full items-center justify-start text-start md:justify-center">
        {label}
      </p>
      <div className="flex w-full flex-1 items-center justify-center">
        {children}
      </div>
    </div>
  );
}
