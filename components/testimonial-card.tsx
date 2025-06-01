"use client"

import { CheckCircle } from "lucide-react"
import Image from "next/image"

interface TestimonialProps {
  testimonial: {
    name: string
    location: string
    image: string
    text: string
    invested: string
    received: string
    days: string
    verified: boolean
  }
}

export default function TestimonialCard({ testimonial }: TestimonialProps) {
  return (
    <div className="testimonial-card bg-slate-800/50 border border-slate-700 rounded-xl p-4 md:p-6 h-full hover:border-emerald-500/50 transition-all duration-300">
      <div className="flex items-center gap-3 mb-3 md:mb-4">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src={testimonial.image || "/placeholder.svg?height=100&width=100"}
            alt={testimonial.name}
            width={100}
            height={100}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-bold text-sm md:text-base truncate">{testimonial.name}</h4>
            {testimonial.verified && <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-emerald-400 flex-shrink-0" />}
          </div>
          <p className="text-slate-400 text-xs md:text-sm">{testimonial.location}</p>
        </div>
      </div>

      <div className="bg-slate-700/30 rounded-lg p-3 md:p-4 mb-3 md:mb-4">
        <p className="text-slate-300 italic text-xs md:text-sm leading-relaxed">{testimonial.text}</p>
      </div>

      <div className="grid grid-cols-3 gap-2 text-xs md:text-sm">
        <div className="text-center">
          <div className="text-slate-400 mb-1">Вложил:</div>
          <div className="font-semibold text-white text-xs">{testimonial.invested}</div>
        </div>
        <div className="text-center">
          <div className="text-emerald-400 mb-1">Получил:</div>
          <div className="font-bold text-emerald-400 text-xs">{testimonial.received}</div>
        </div>
        <div className="text-center">
          <div className="text-slate-400 mb-1">Срок:</div>
          <div className="font-semibold text-white text-xs">{testimonial.days}</div>
        </div>
      </div>
    </div>
  )
}
