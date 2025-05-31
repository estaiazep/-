"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ExpandableSectionProps {
  title: string
  preview: string
  children: React.ReactNode
  variant?: "default" | "gradient"
}

export default function ExpandableSection({ title, preview, children, variant = "default" }: ExpandableSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div
      className={`rounded-xl border transition-all duration-300 ${
        variant === "gradient"
          ? "bg-gradient-to-r from-slate-800/50 to-slate-700/50 border-slate-600 hover:border-cyan-500/50"
          : "bg-slate-800/30 border-slate-700 hover:border-cyan-500/30"
      }`}
    >
      <div className="p-4 sm:p-6 cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
            {!isExpanded && <p className="text-slate-400 text-sm">{preview}</p>}
          </div>
          <Button variant="ghost" size="sm" className="ml-4 text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10">
            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {isExpanded && (
        <div className="px-4 sm:px-6 pb-4 sm:pb-6 animate-slide-up">
          <div className="border-t border-slate-600 pt-4">{children}</div>
        </div>
      )}
    </div>
  )
}
