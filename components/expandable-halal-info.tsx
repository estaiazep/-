"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import HalalInfo from "./halal-info"
import type { Language } from "@/lib/translations"

interface ExpandableHalalInfoProps {
  language: Language
}

export default function ExpandableHalalInfo({ language }: ExpandableHalalInfoProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="py-4 sm:py-6 bg-gradient-to-r from-green-900/5 to-blue-900/5">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center">
          <Button
            onClick={() => setIsOpen(!isOpen)}
            variant="outline"
            className="border-green-500/30 text-green-300 hover:bg-green-500/10 hover:border-green-500/50 px-6 py-3 rounded-xl text-base min-h-[48px] w-full sm:w-auto"
          >
            <span className="text-lg mr-2">☪️</span>
            {language === "ru" ? "Это халяль заработок?" : "Bu halol daromadmi?"}
            {isOpen ? <ChevronUp className="w-4 h-4 ml-2" /> : <ChevronDown className="w-4 h-4 ml-2" />}
          </Button>

          {!isOpen && (
            <p className="text-slate-400 text-sm mt-2">
              {language === "ru"
                ? "👆 Узнай почему это разрешено исламом"
                : "👆 Nima uchun islom tomonidan ruxsat berilganligini bilib oling"}
            </p>
          )}
        </div>
      </div>

      {isOpen && (
        <div className="animate-slide-up">
          <HalalInfo language={language} />
        </div>
      )}
    </section>
  )
}
