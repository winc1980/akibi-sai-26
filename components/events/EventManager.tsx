"use client";
import { useState } from "react";
import EventDetail from "./eventdetail";

import Schedule from "./schedule";
import { EventData } from "@/lib/types";

export default function EventManager({
  initialData,
}: {
  initialData: EventData[];
}) {
  const [showDetailPage, setShowDetailPage] = useState(false);
  const [showDayEvents, setShowDayEvents] = useState(false);
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
    if (showDayEvents) {
      setShowDayEvents(false);
    } else {
      setShowDayEvents(true);
    }
  }

  return (
    <div>
      <div>
        {showDetailPage && selected ? (
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
        showDay={showDayEvents}
      />
    </div>
  );
}
