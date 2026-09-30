import { EventData } from "@/lib/types";
import { useEffect } from "react";

type Toggle = () => void;
export default function Schedule({
  events,
  detailToggle,
  dayToggle,
  showDay,
}: {
  events: EventData[];
  detailToggle: Toggle;
  dayToggle: Toggle;
  showDay: boolean;
}) {
  const TIME_START = 9.5;
  const TIME_END = 20.5;
  const CELL_HEIGHT = 36;

  //   useEffect(() => {
  //     const data = events.map((event) => {
  //       return {
  //         name: event.name,
  //         number: (event.timing_start - TIME_START) * 2,
  //       };
  //     });
  //     console.log(data);
  //   }, [events]);

  function placeRowsNumber(scheduledEvents: EventData): number {
    return placeLabel.findIndex((items) => items == scheduledEvents.place);
  }

  // function formatTime(number:number){if(Number.isInteger(number)){return{number};}else{return{}}}
  const allDayEvents = events.filter(
    (event) => event.timing_start == TIME_START && event.timing_end == TIME_END,
  );
  const scheduledEvents = events.filter(
    (event) => event.name != "スタンプラリー",
  );
  const firstDayEvents = scheduledEvents.filter((event) =>
    event.days.includes(1),
  );
  const secondDayEvents = scheduledEvents.filter((event) =>
    event.days.includes(2),
  );

  const scheduledEventPlaces = [
    ...new Set(scheduledEvents.map((event) => event.place)),
  ];

  const placeLabel = scheduledEventPlaces.filter(
    (event) => event != "開催場所は配布しているカードを参考にしてね！",
  );

  return (
    <div className="font-zen-kaku h-full w-full flex-row p-20 font-semibold">
      {/* １日目、２日目ラベル */}
      <div className="center h-10 w-full rounded-md bg-amber-300 p-1">
        <div className="flex flex-row items-center justify-center">
          <button
            type="button"
            onClick={dayToggle}
            className="h-8 grow rounded-md text-center"
            style={{ backgroundColor: showDay ? "white" : undefined }}
          >
            一日目
          </button>
          <button
            type="button"
            onClick={dayToggle}
            className="h-8 grow rounded-md text-center"
            style={{ backgroundColor: showDay ? undefined : "white" }}
          >
            二日目
          </button>
        </div>
      </div>
      {/* 場所です */}
      <div className="flex h-full w-full gap-2 pt-4 pb-2">
        {/* 時間ラベル分の空白 */}
        <div className="w-10" />

        <div className="grid flex-1 grid-cols-6 gap-2">
          {placeLabel.map((place, i) => (
            <div
              key={i}
              className="text-amber-50h-10 flex h-10 items-center justify-center rounded-md bg-blue-500 p-2 text-xs"
            >
              {place}
            </div>
          ))}
        </div>
      </div>

      {/* 場所と並列する下の段 */}
      <div className="flex">
        {/* time label です*/}

        <div className="relative h-full w-12 flex-col justify-start text-[15px] leading-3.5">
          {Array.from({ length: (TIME_END - TIME_START + 1) * 2 - 1 }).map(
            (_, i) => (
              <div
                className="absolute font-semibold"
                style={{
                  top: i * CELL_HEIGHT,
                }}
                key={i}
              >
                {i % 2 === 0
                  ? `${TIME_START - 1 / 2 + i / 2}:30`
                  : `${TIME_START + 1 / 2 + (i - 1) / 2}:00`}
              </div>
            ),
          )}
        </div>

        {/* line です*/}

        <div className="relative flex flex-1 flex-col">
          {Array.from({ length: (TIME_END - TIME_START) * 2 + 1 }).map(
            (_, i) => (
              <div
                key={i}
                className={`absolute w-full border-t ${i % 2 === 0 ? "border-dashed" : "border-solid"}`}
                style={{ top: i * CELL_HEIGHT + 14 / 2 }}
              ></div>
            ),
          )}
          {/* eventです */}
          <div
            className="h-full w-full flex-1 gap-x-2 pt-1.75"
            style={{
              display: "grid",
              gridTemplate: "repeat(22,36px)/repeat(6,minmax(0,1fr))",
            }}
          >
            {(showDay ? firstDayEvents : secondDayEvents).map((event, i) => {
              return (
                <button
                  type="button"
                  onClick={detailToggle}
                  key={i}
                  className="z-10 my-0.5 flex items-center justify-center rounded-md bg-amber-700 p-2 text-xs text-wrap text-amber-50"
                  style={{
                    gridRow: `${(event.timing_start - TIME_START) * 2 + 1} / span ${(event.timing_end - event.timing_start) * 2}`,

                    gridColumnStart: placeRowsNumber(event) + 1,
                  }}
                >
                  <div className="min-w-0 wrap-break-word">{event.name}</div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex h-40 w-full flex-col gap-5 pt-10 text-2xl">
        <div className="font-bold"> 終日イベント</div>

        {allDayEvents.map((event, i) => {
          return (
            <div
              key={i}
              className="flex h-30 w-full items-center justify-center rounded-2xl bg-amber-400"
            >
              {event.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}
