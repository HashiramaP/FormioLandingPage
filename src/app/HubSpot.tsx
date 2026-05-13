"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";

const HUBSPOT_HUB_ID = process.env.NEXT_PUBLIC_HUBSPOT_HUB_ID ?? "";

declare global {
  interface Window {
    _hsq?: unknown[][];
  }
}

function HubSpotRouteTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === "undefined") return;
    window._hsq = window._hsq || [];
    const query = searchParams.toString();
    const path = query ? `${pathname}?${query}` : pathname;
    window._hsq.push(["setPath", path]);
    window._hsq.push(["trackPageView"]);
  }, [pathname, searchParams]);

  return null;
}

export default function HubSpot() {
  if (!HUBSPOT_HUB_ID) return null;

  return (
    <>
      <Script
        id="hs-script-loader"
        strategy="afterInteractive"
        src={`https://js.hs-scripts.com/${HUBSPOT_HUB_ID}.js`}
      />
      <Suspense fallback={null}>
        <HubSpotRouteTracker />
      </Suspense>
    </>
  );
}
