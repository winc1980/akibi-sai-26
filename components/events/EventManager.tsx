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
        {showDetailPage ? (
          <EventDetail
            detailToggle={toggleDetailPageVisibility}
            events={initialData}
          />
        ) : undefined}
      </div>
      <Schedule
        events={initialData}
        detailToggle={toggleDetailPageVisibility}
        dayToggle={toggleDayEvent}
        showDay={showDayEvents}
      />
    </div>
  );
}
