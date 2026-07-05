"use client";

import { useState } from "react";
import { faqs } from "@/data/faq";
import SectionTitle from "@/components/ui/SectionTitle";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
        aria-expanded={open}
      >
        <span className="text-sm font-medium text-gray-900 pr-4">
          {question}
        </span>
        <span
          className={`text-gray-400 transition-transform duration-200 flex-shrink-0 ${
            open ? "rotate-180" : ""
          }`}
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="px-5 pb-4">
          <p className="text-sm text-gray-500 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQSection() {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Sık Sorulan Sorular"
          subtitle="Merak ettiğiniz soruların cevapları"
        />

        <div className="space-y-3">
          {faqs.map((faq) => (
            <FAQItem
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
