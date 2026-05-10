"use client";

import { useEffect } from "react";
import { track } from "@/lib/meta-pixel";

type CalendlyMessage = {
  event?: string;
  payload?: Record<string, unknown>;
};

function isCalendlyEvent(data: unknown): data is CalendlyMessage {
  return (
    typeof data === "object" &&
    data !== null &&
    "event" in data &&
    typeof (data as { event: unknown }).event === "string" &&
    (data as { event: string }).event.startsWith("calendly.")
  );
}

export default function CalendlyEmbed() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    const onMessage = (e: MessageEvent) => {
      if (e.origin !== "https://calendly.com") return;
      if (!isCalendlyEvent(e.data)) return;
      if (e.data.event === "calendly.event_scheduled") {
        track("Lead", {
          content_name: "Book a call",
          content_category: "demo_call",
        });
        track("Schedule");
      }
    };
    window.addEventListener("message", onMessage);

    return () => {
      window.removeEventListener("message", onMessage);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/parsa-formio/30min?hide_gdpr_banner=1&background_color=ffffeb&text_color=0a1322&primary_color=0088ff"
      style={{ minWidth: "320px", width: "100%", height: "700px" }}
    />
  );
}
