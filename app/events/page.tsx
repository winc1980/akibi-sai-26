// import { useState } from "react";
import getMicroCmsData from "@/lib/microcms";
import { EventData } from "@/lib/types";

// const Place = [A, B, C, D, E];

export default async function App() {
  const events = await getMicroCmsData("events");
  const TIME_START = 10;
  const TIME_END = 17;
  const CELL_HEIGHT = 36;

  const allDayEvents = events.filter(
    (event) => event.timing_end - event.timing_start === TIME_END - TIME_START,
  );
  const scheduledEvents = events.filter(
    (event) => event.timing_end - event.timing_start !== TIME_END - TIME_START,
  );
  const scheduledEventPlaces = [
    ...new Set(scheduledEvents.map((event) => event.place)),
  ];

  const byPlaces=Object.groupBy((scheduledEventPlaces,({place})=>))
  return (
    <div className="font-zen-kaku h-full w-full flex-row p-20">
      {/* 場所です */}
      <div className="flex h-full w-full gap-2 pb-2">
        {/* 時間ラベル分の空白 */}
        <div className="w-10" />

        <div className="grid flex-1 grid-cols-5 gap-2">
          {scheduledEventPlaces.map((place, i) => (
            <div
              key={i}
              className="text-amber-50h-10 flex h-10 items-center justify-center rounded-md bg-blue-500 p-2 text-xs"
            >
              {place}
            </div>
          ))}

          {/* {Place.map((placeName)=>
    <div>PlaceName</div>)} */}
        </div>
      </div>

      {/* 場所と並列する下の段 */}
      <div className="flex">
        {/* time label です*/}

        <div className="relative h-full w-12 flex-col justify-start text-[15px] leading-3.5">
          {Array.from({ length: (TIME_END - TIME_START) * 2 + 1 }).map(
            (_, i) => (
              <div
                className="absolute font-semibold"
                style={{
                  top: i * CELL_HEIGHT,
                }}
                key={i}
              >
                {i % 2 === 0
                  ? `${TIME_START + i / 2}:00`
                  : `${TIME_START + (i - 1) / 2}:30`}
              </div>
            ),
          )}
        </div>

        {/* line です*/}

        <div className="relative flex flex-1 flex-col">
          {Array.from({ length: (TIME_END - TIME_START + 1) * 2 - 1 }).map(
            (_, i) => (
              <div
                key={i}
                className={`absolute w-full border-t ${i % 2 === 0 ? "border-solid" : "border-dashed"}`}
                style={{ top: i * CELL_HEIGHT + 14 / 2 }}
              ></div>
            ),
          )}
          <div className="absolute grid h-full w-full grid-cols-5 gap-2 pt-1.75">
            {scheduledEvents.map((event, i) => {
              return (
                <div
                  key={i}
                  className="flex items-center justify-center rounded-md bg-amber-700 p-2 text-xs text-amber-50"
                  style={{
                    top: event.timing_start * i + 1,
                    height:
                      CELL_HEIGHT * (event.timing_end - event.timing_start + 1),
                  }}
                >
                  {event.name}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
