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
      <Dialog.Popup className="z-50 flex aspect-3/2 w-full max-w-150 flex-col gap-10 rounded-4xl bg-amber-50 p-7 px-12">
        {/* イベント名と閉じるアイコンのrow */}
        <div className="flex flex-col gap-15">
          <div className="flex w-full flex-row justify-between">
            <div
              className="w-100 text-3xl leading-16"
              style={{ fontSize: events.name.length > 19 ? "21px" : "30px" }}
            >
              {events.name}
            </div>
            <Dialog.Close className="hover:bg-akibi-black/20 flex aspect-square items-center justify-center rounded-full">
              <XIcon className="h-8 w-8" />
            </Dialog.Close>
          </div>
          {/* 団体 */}
          <p
            className="w-full text-2xl leading-tight break-all"
            // style={{ fontSize: events.name.length > 19 ? "18px" : "24px" }}
          >
            {events.organization}
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {/* 場所 */}
          <div className="flex flex-row">
            <MapPinIcon />
            <div className="w-full">{events.place}</div>
          </div>
          {/* 時間 */}
          <div className="flex flex-row gap-1">
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
          <div className="text-1xl">{events.description}</div>
        </div>
      </Dialog.Popup>
    </Dialog.Portal>
  );
}
