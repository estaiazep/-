"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface FaqItem {
  question: string
  answer: string
}

interface FaqAccordionProps {
  items: FaqItem[]
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-3 md:space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className={`faq-item bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden transition-all duration-300 ${
            openIndex === index ? "border-emerald-500/50" : ""
          }`}
        >
          <button
            className="w-full flex items-center justify-between p-4 md:p-6 text-left"
            onClick={() => toggleItem(index)}
          >
            <h3 className="font-semibold text-sm md:text-lg pr-4">{item.question}</h3>
            {openIndex === index ? (
              <ChevronUp className="w-4 h-4 md:w-5 md:h-5 text-emerald-400 flex-shrink-0" />
            ) : (
              <ChevronDown className="w-4 h-4 md:w-5 md:h-5 text-slate-400 flex-shrink-0" />
            )}
          </button>

          {openIndex === index && (
            <div className="px-4 pb-4 md:px-6 md:pb-6 border-t border-slate-700">
              <p className="text-slate-300 text-sm md:text-base leading-relaxed pt-3 md:pt-4">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
