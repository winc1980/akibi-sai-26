import getMicroCmsData from "@/lib/microcms";

const timeLabels = [
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
];

const data = await getMicroCmsData("events");

export default async function Page() {
  return <div>page</div>;
}

function isallDayEvents(x: number, y: number) {
  const TIME_RANGE_START = 0;
  const TIME_RANGE_END = 14;
  return x === TIME_RANGE_START && y === TIME_RANGE_END;
}

const scheduledEvents = data.filter((data) => !isallDayEvents);
const allDayEvents = data.filter((data) => isallDayEvents);
const scheduledEventPlaces = Array.from(
  new Set(scheduledEvents.map((event) => event.place)),
);