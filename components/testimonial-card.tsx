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
    <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 h-full hover:border-emerald-500/50 transition-all duration-300">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src={testimonial.image || "/placeholder.svg"}
            alt={testimonial.name}
            width={100}
            height={100}
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h4 className="font-bold">{testimonial.name}</h4>
            {testimonial.verified && <CheckCircle className="w-4 h-4 text-emerald-400" />}
          </div>
          <p className="text-slate-400 text-sm">{testimonial.location}</p>
        </div>
      </div>

      <div className="bg-slate-700/30 rounded-lg p-4 mb-4">
        <p className="text-slate-300 italic text-sm">{testimonial.text}</p>
      </div>

      <div className="flex items-center justify-between text-sm">
        <div>
          <div className="text-slate-400">Вложил:</div>
          <div className="font-semibold">{testimonial.invested}</div>
        </div>
        <div className="text-right">
          <div className="text-emerald-400">Получил:</div>
          <div className="font-bold text-emerald-400">{testimonial.received}</div>
        </div>
        <div className="text-right">
          <div className="text-slate-400">Срок:</div>
          <div className="font-semibold">{testimonial.days}</div>
        </div>
      </div>
    </div>
  )
}
