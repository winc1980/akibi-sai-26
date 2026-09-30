import getMicroCmsData from "@/lib/microcms";

import EventManager from "@/components/events/EventManager";

export default async function App() {
  const data = await getMicroCmsData("events");

  return (
    <div>
      <EventManager initialData={data} />
    </div>
  );
}
