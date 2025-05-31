"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DollarSign } from "lucide-react"

export type Currency = "USD" | "UZS"

interface CurrencySwitcherProps {
  currentCurrency: Currency
  onCurrencyChange: (currency: Currency) => void
}

export default function CurrencySwitcher({ currentCurrency, onCurrencyChange }: CurrencySwitcherProps) {
  const [isOpen, setIsOpen] = useState(false)

  const currencies = [
    { code: "USD" as Currency, name: "Доллар США", symbol: "$", flag: "🇺🇸" },
    { code: "UZS" as Currency, name: "Узбекский сум", symbol: "сум", flag: "🇺🇿" },
  ]

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="border-slate-600 text-slate-300 hover:bg-slate-800 gap-2"
      >
        <DollarSign className="w-4 h-4" />
        {currencies.find((curr) => curr.code === currentCurrency)?.flag}
        {currencies.find((curr) => curr.code === currentCurrency)?.symbol}
      </Button>

      {isOpen && (
        <div className="absolute top-full mt-2 right-0 bg-slate-800 border border-slate-700 rounded-lg shadow-lg z-50 min-w-[180px]">
          {currencies.map((currency) => (
            <button
              key={currency.code}
              onClick={() => {
                onCurrencyChange(currency.code)
                setIsOpen(false)
              }}
              className={`w-full px-4 py-2 text-left hover:bg-slate-700 transition-colors flex items-center gap-2 ${
                currentCurrency === currency.code ? "bg-slate-700 text-cyan-400" : "text-slate-300"
              } ${currency.code === currencies[0].code ? "rounded-t-lg" : ""} ${
                currency.code === currencies[currencies.length - 1].code ? "rounded-b-lg" : ""
              }`}
            >
              <span className="text-lg">{currency.flag}</span>
              <div>
                <div className="font-medium">{currency.symbol}</div>
                <div className="text-xs text-slate-400">{currency.name}</div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
