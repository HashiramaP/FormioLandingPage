"use client";

import { useEffect } from "react";
import { track } from "@/lib/meta-pixel";

type StandardEvent =
  | "PageView"
  | "Lead"
  | "ViewContent"
  | "InitiateCheckout"
  | "CompleteRegistration"
  | "Contact"
  | "Schedule";

type Props = {
  event: StandardEvent;
  params?: Record<string, unknown>;
};

export default function TrackEvent({ event, params }: Props) {
  useEffect(() => {
    track(event, params);
    // params is intentionally serialized via JSON to avoid object-identity churn
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [event, JSON.stringify(params)]);

  return null;
}
