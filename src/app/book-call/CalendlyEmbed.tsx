"use client";

import { useEffect } from "react";

export default function CalendlyEmbed() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
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
