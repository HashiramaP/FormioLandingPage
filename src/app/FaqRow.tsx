"use client";

import { useRef, useState } from "react";

export function FaqRow({
  question,
  children,
}: {
  question: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  return (
    <div className={`faq-row ${open ? "is-open" : ""}`}>
      <button
        type="button"
        className="faq-question"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span dangerouslySetInnerHTML={{ __html: question }} />
        <span className="faq-plus" aria-hidden>
          <span />
          <span />
        </span>
      </button>
      <div
        className="faq-answer-wrap"
        style={{
          height: open ? (contentRef.current?.scrollHeight ?? 0) : 0,
        }}
      >
        <div ref={contentRef} className="faq-answer">
          {children}
        </div>
      </div>
    </div>
  );
}
