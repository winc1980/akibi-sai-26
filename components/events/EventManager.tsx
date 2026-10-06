"use client";
import { useState } from "react";
import EventDetail from "./eventdetail";

import Schedule from "./schedule";
import { EventData } from "@/lib/types";
import { Dialog } from "@base-ui/react";

export default function EventManager({
  initialData,
}: {
  initialData: EventData[];
}) {
  const [showDetailPage, setShowDetailPage] = useState(false);
  const [showFirstDayEvents, setShowDayEvents] = useState(true);
  const [selectedId, setSelectedId] = useState<string | undefined>(undefined);
  const handleSelect = (id: string) => {
    setSelectedId(id);
  };

  const selected = initialData.find((p) => p.id === selectedId);
  function toggleDetailPageVisibility() {
    if (showDetailPage) {
      setShowDetailPage(false);
    } else {
      setShowDetailPage(true);
    }
  }
  function toggleDayEvent() {
    if (showFirstDayEvents) {
      setShowDayEvents(false);
    } else {
      setShowDayEvents(true);
    }
  }

  return (
    <Dialog.Root onOpenChange={setShowDetailPage} open={showDetailPage}>
      <div>
        {selected && showDetailPage ? (
          <EventDetail
            detailToggle={toggleDetailPageVisibility}
            events={selected}
          />
        ) : undefined}
      </div>
      <Schedule
        onSelect={handleSelect}
        events={initialData}
        detailToggle={toggleDetailPageVisibility}
        dayToggle={toggleDayEvent}
        showFirstDay={showFirstDayEvents}
      />
    </Dialog.Root>
  );
}
