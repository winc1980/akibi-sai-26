export function GoogleMap() {
  return (
    <div className="w-full max-w-150">
      <iframe
        title="秋田公立美術大学へのアクセス"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3070.396112670887!2d140.08830607649836!3d39.68579689980126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f8fc39c48cfd6bb%3A0x5fe0cc54f10a8f6a!2z56eL55Sw5YWs56uL576O6KGT5aSn5a2m!5e0!3m2!1sja!2sjp!4v1759910921868!5m2!1sja!2sjp"
        loading="lazy"
        className="block aspect-5/3 w-full rounded-2xl border-0"
      />
    </div>
  );
}

export function Access() {
  return (
    <div className="w-full max-w-150">
      <div className="font-zen text-black-soft flex max-w-150 items-center justify-center gap-16 rounded-[20px] bg-white/20 py-2 pl-16 shadow-[0_0_1px_hsl(0deg_0%_0%/0.075),0_0_2px_hsl(0deg_0%_0%/0.075),0_0_4px_hsl(0deg_0%_0%/0.075),0_0_8px_hsl(0deg_0%_0%/0.075),0_0_16px_hsl(0deg_0%_0%/0.075)]">
        <div className="flex flex-col items-start justify-center">
          <h2 className="pt-4 pb-4 text-center text-[1.5rem]">
            秋田公立美術大学
          </h2>

          <div className="text-left text-[1.125rem] font-semibold">
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

            <div className="-mx-3 flex items-center">
              <div className="bg-black-soft h-0.5 w-96" />
              <div className="bg-black-soft h-4 w-4 [clip-path:polygon(0_0,100%_50%,0_100%,30%_50%)]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
