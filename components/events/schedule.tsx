import { EventData } from "@/lib/types";
import { Dialog } from "@base-ui/react";

type Toggle = () => void;
type OnSelect = (id: string) => void;
export default function Schedule({
  events,
  detailToggle,
  dayToggle,
  showFirstDay,
  onSelect,
}: {
  events: EventData[];
  detailToggle: Toggle;
  dayToggle: Toggle;
  showFirstDay: boolean;
  onSelect: OnSelect;
}) {
  const TIME_START = 9.5;
  const TIME_END = 20;
  const CELL_HEIGHT = 36;

  function placeRowsNumber(scheduledEvents: EventData): number {
    return placeLabel.findIndex((items) => items == scheduledEvents.place);
  }

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

  const forOnClick = (event: EventData) => {
    detailToggle();
    onSelect(event.id);
  };

  const dayEvents = showFirstDay ? firstDayEvents : secondDayEvents;

  return (
    <div className="font-zen-kaku h-full w-full flex-row p-10 pt-24 font-semibold md:p-20">
      {/* １日目、２日目ラベル */}
      <div className="center h-10 w-full rounded-md bg-amber-50 p-1">
        <div className="flex flex-row items-center justify-center">
          <button
            type="button"
            onClick={() => {
              if (showFirstDay) {
                return;
              } else {
                dayToggle();
              }
            }}
            className="h-8 grow rounded-md text-center"

            style={{
              backgroundColor: showFirstDay
                ? "var(--color-focused)"
                : undefined,
            }}
          >
            一日目
          </button>
          <button
            type="button"
            onClick={() => {
              if (showFirstDay) {
                dayToggle();
              } else {
                return;
              }
            }}
            className="h-8 grow rounded-md text-center"
            style={{
              backgroundColor: showFirstDay
                ? undefined
                : "var(--color-focused)",
            }}
          >
            二日目
          </button>
        </div>
      </div>

      {/* time labelと場所＋スケジュール部分をflexで横並び */}
      <div className="h-full min-w-0">
        <div className="flex flex-row">
          {/* time label です*/}

          <div className="relative h-full w-10 shrink-0 flex-col justify-start text-[15px] leading-3.5">
            {Array.from({ length: (TIME_END - TIME_START + 1) * 2 - 1 }).map(
              (_, i) => (
                <div
                  className="absolute font-semibold"
                  style={{
                    top: (i - 1) * CELL_HEIGHT + 100,
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

          <div className="flex-1 overflow-x-auto pl-3">
            <div className="min-w-180">
              {/* 場所です */}
              <div className="flex h-full gap-2 pt-4 pb-2">
                <div className="grid flex-1 grid-cols-6 gap-2">
                  {placeLabel.map((place, i) => (
                    <div
                      key={i}
                      className="bg-time-table-label line-clamp-2 flex h-10 min-w-0 items-center justify-center rounded-md p-2 text-xs text-amber-50"
                    >
                      {place}
                    </div>
                  ))}
                </div>
              </div>

              {/* line です*/}

              <div className="relative flex flex-1 flex-col">
                {Array.from({ length: (TIME_END - TIME_START) * 2 + 1 }).map(
                  (_, i) => (
                    <div
                      key={i}
                      className={`absolute h-px w-full border-t ${i % 2 === 0 ? "border-dashed" : "border-solid"}`}
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
                  {dayEvents.map((event, i) => {
                    const overlapEvent = dayEvents.filter(
                      (anotherEvent) =>
                        anotherEvent.id != event.id &&
                        placeRowsNumber(anotherEvent) ==
                          placeRowsNumber(event) &&
                        anotherEvent.timing_start < event.timing_end &&
                        event.timing_start < anotherEvent.timing_end,
                    );
                    const isRight = overlapEvent.some(
                      (anotherEvent) =>
                        anotherEvent.timing_start < event.timing_start,
                    );

                    return (
                      <Dialog.Trigger
                        onClick={() => forOnClick(event)}
                        key={i}
                        className="bg-primary z-10 my-0.5 flex items-center justify-center rounded-md p-2 text-wrap text-amber-50 hover:bg-amber-700"
                        style={{
                          gridRow: `${(event.timing_start - TIME_START) * 2 + 1} / span ${(event.timing_end - event.timing_start) * 2}`,
                          gridColumnStart: placeRowsNumber(event) + 1,
                          width: overlapEvent.length > 0 ? "45%" : "100%",
                          fontSize: isRight ? "7px" : "12px",

                          marginLeft: isRight ? "50%" : "0",
                        }}
                      >
                        <div className="line-clamp-2 min-w-0 wrap-break-word">
                          {event.name}
                        </div>
                      </Dialog.Trigger>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-40 w-full flex-col gap-6 text-2xl">
        <div className="font-bold"> 終日開催イベント</div>

        {allDayEvents.map((event, i) => {
          return (
            <button
              key={i}
              onClick={() => forOnClick(event)}
              className="bg-focused flex h-17 w-full items-center justify-center rounded-2xl"
            >
              {event.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
