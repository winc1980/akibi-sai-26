import getMicroCmsData from "@/lib/microcms";
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
        <div className="font-zen xs:text-2xl xs:max-w-[95dvw] w-4xl max-w-dvw rounded-2xl bg-white/60 px-3 py-3.5 text-lg font-bold">
          <p>〒010-1632 秋田県秋田市新屋大川町12-3</p>
          <div className="flex flex-col gap-2">
            <p>
              JR「秋田駅」から羽越本線「新屋駅」下車
              <br />
              新屋駅から徒歩15分
            </p>
            <p>
              JR「秋田駅」から秋田中央交通バス
              <br />
              新屋線「美術大学前」下車　徒歩1分
            </p>
          </div>
        </div>
      </SectionContainer>
      <SectionContainer label="学内マップ">
        <img
          className="xs:max-w-[95dvw] w-4xl max-w-dvw"
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
