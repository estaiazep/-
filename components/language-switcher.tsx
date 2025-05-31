"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import type { Language } from "@/lib/translations"

interface LanguageSwitcherProps {
  currentLanguage: Language
  onLanguageChange: (language: Language) => void
}

export default function LanguageSwitcher({ currentLanguage, onLanguageChange }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { code: "ru" as Language, name: "Русский", flag: "🇷🇺" },
    { code: "uz" as Language, name: "O'zbekcha", flag: "🇺🇿" },
  ]

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="border-slate-600 text-slate-300 hover:bg-slate-800 gap-2"
      >
        <Globe className="w-4 h-4" />
        {languages.find((lang) => lang.code === currentLanguage)?.flag}
        {languages.find((lang) => lang.code === currentLanguage)?.name}
      </Button>

      {isOpen && (
        <div className="absolute top-full mt-2 right-0 bg-slate-800 border border-slate-700 rounded-lg shadow-lg z-50 min-w-[150px]">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => {
                onLanguageChange(language.code)
                setIsOpen(false)
              }}
              className={`w-full px-4 py-2 text-left hover:bg-slate-700 transition-colors flex items-center gap-2 ${
                currentLanguage === language.code ? "bg-slate-700 text-cyan-400" : "text-slate-300"
              } ${language.code === languages[0].code ? "rounded-t-lg" : ""} ${
                language.code === languages[languages.length - 1].code ? "rounded-b-lg" : ""
              }`}
            >
              <span className="text-lg">{language.flag}</span>
              {language.name}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
