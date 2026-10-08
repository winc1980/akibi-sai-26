import { MapPinIcon, ClockIcon, XIcon } from "lucide-react";
import { EventData } from "@/lib/types";
import { Dialog } from "@base-ui/react";

type Toggle = () => void;

export default function EventDetail({
  detailToggle,
  events,
}: {
  detailToggle: Toggle;
  events: EventData;
}) {
  function formatTime(time: number) {
    if ((time * 2) % 2 == 0) {
      return `${time}:00`;
    } else {
      return `${time - 0.5}:30`;
    }
  }

  return (
    <Dialog.Portal className="text-akibi-black fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center">
      <Dialog.Backdrop className="absolute h-full w-full bg-gray-500/60"></Dialog.Backdrop>
      <Dialog.Popup className="text-4 relative z-50 flex max-h-120 max-w-90 flex-col rounded-4xl bg-amber-50 p-5">
        <div className="flex flex-col gap-6">
          {/* イベント名 */}
          <div
            style={{
              fontSize: events.name.length > 19 ? "21px" : "27px",
            }}
          >
            <div className="whitespace-pre-line">
              {events.name
                .replace("inあきび祭", "\ninあきび祭")
                .replace("SHOWCASE", "\nSHOWCASE")}
            </div>
          </div>
          {/* 閉じるボタン */}
          <Dialog.Close className="hover:bg-akibi-black/20 absolute top-6 right-6 aspect-square rounded-full">
            <XIcon className="h-8 w-8" />
          </Dialog.Close>

          {/* 団体 */}
          <div
            className="w-full text-[16px] leading-tight break-all"
            // style={{ fontSize: events.name.length > 19 ? "18px" : "24px" }}
          >
            {events.organization}
          </div>

          <div className="flex w-full flex-col gap-6">
            {/* 場所 */}
            <div className="flex flex-row">
              <MapPinIcon />
              <div className="w-full">{events.place}</div>
            </div>
            {/* 時間 */}
            <div className="flex w-full flex-row gap-1">
              <ClockIcon />
              <div className="w-full">
                {events.days.includes(1) && events.days.includes(2) ? (
                  <div>
                    一日目：{formatTime(events.timing_start)}～
                    {formatTime(events.timing_end)}/ 二日目：
                    {formatTime(events.timing_start)}～
                    {formatTime(events.timing_end)}
                  </div>
                ) : events.days.includes(1) ? (
                  <div>
                    一日目：
                    {formatTime(events.timing_start)}～
                    {formatTime(events.timing_end)}
                  </div>
                ) : (
                  <div>
                    二日目：
                    {formatTime(events.timing_start)}～
                    {formatTime(events.timing_end)}
                  </div>
                )}
              </div>
            </div>

            {/*詳細 */}
            <div className="text-1xl w-full overflow-y-auto">
              {events.description}
            </div>
          </div>
        </div>
      </Dialog.Popup>
    </Dialog.Portal>
  );
}
