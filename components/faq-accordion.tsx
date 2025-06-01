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
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className={`bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden transition-all duration-300 ${
            openIndex === index ? "border-emerald-500/50" : ""
          }`}
        >
          <button className="w-full flex items-center justify-between p-6 text-left" onClick={() => toggleItem(index)}>
            <h3 className="font-semibold text-lg">{item.question}</h3>
            {openIndex === index ? (
              <ChevronUp className="w-5 h-5 text-emerald-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-slate-400" />
            )}
          </button>

          {openIndex === index && (
            <div className="p-6 pt-0 border-t border-slate-700">
              <p className="text-slate-300">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
