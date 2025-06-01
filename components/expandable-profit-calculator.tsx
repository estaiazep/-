"use client"

import { useState } from "react"
import { Calculator, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProfitCalculator from "./profit-calculator"
import { translations, type Language, type TranslationKey } from "@/lib/translations"
import type { Currency } from "@/lib/currency"

interface ExpandableProfitCalculatorProps {
  language: Language
  currency: Currency
}

export default function ExpandableProfitCalculator({ language, currency }: ExpandableProfitCalculatorProps) {
  const [isOpen, setIsOpen] = useState(false)
  const t = (key: TranslationKey) => translations[language][key]

  return (
    <section className="py-4 sm:py-6">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center">
          <Button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-green-500/25 transition-all duration-300 hover:scale-105 text-lg min-h-[56px] w-full sm:w-auto"
          >
            <Calculator className="w-5 h-5 mr-2" />
            {t("calculatorTitle")}
            {isOpen ? <ChevronUp className="w-4 h-4 ml-2" /> : <ChevronDown className="w-4 h-4 ml-2" />}
          </Button>

          {!isOpen && (
            <p className="text-slate-400 text-sm mt-2 animate-pulse">
              {language === "ru" ? "👆 Узнай свою прибыль за 1 клик" : "👆 1 klik bilan foydangizni bilib oling"}
            </p>
          )}
        </div>
      </div>

      {isOpen && (
        <div className="animate-slide-up">
          <ProfitCalculator language={language} currency={currency} />
        </div>
      )}
    </section>
  )
}
