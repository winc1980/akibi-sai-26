import { MapPinIcon, ClockIcon, XIcon } from "lucide-react";
import { EventData } from "@/lib/types";

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
    <div className="font-zen-kaku flex h-dvh w-full items-center justify-center bg-gray-500/50 p-20">
      <div className="flex h-100 w-100 flex-col gap-6 rounded-4xl bg-amber-50 p-7 pl-12">
        <div>
          {/* イベント名と閉じるアイコンｍのrow */}
          <div className="flex h-10 w-full flex-row justify-between">
            <div className="w-100 text-3xl leading-16">{events.name}</div>
            <button type="button" onClick={detailToggle}>
              <XIcon className="h-8 w-8" />
            </button>
          </div>
          {/* 団体 */}
          <div className="w-full text-2xl">{events.organization}</div>
          <div className="flex flex-col gap-6">
            {/* 場所 */}
            <div className="flex flex-row">
              <MapPinIcon />
              <div className="w-full">{events.place}</div>
            </div>
            {/* 時間 */}
            <div className="flex flex-row">
              <ClockIcon />
              <div className="w-full">
                {events.days.includes(1) ? (
                  <div>
                    一日目：
                    {formatTime(events.timing_start)}～
                    {formatTime(events.timing_end)}
                  </div>
                ) : events.days.includes(2) ? (
                  <div>
                    二日目：
                    {formatTime(events.timing_start)}～
                    {formatTime(events.timing_end)}
                  </div>
                ) : (
                  <div>
                    一日目：{formatTime(events.timing_start)}
                    {formatTime(events.timing_end)}/ 二日目：
                    {formatTime(events.timing_start)}～
                    {formatTime(events.timing_end)}
                  </div>
                )}
              </div>
            </div>
            {/* 時間終わり */}
          </div>
        </div>
      </div>
    </div>
  );
}
