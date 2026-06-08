import { useState, useEffect } from 'react'
import { MessageCircle, X } from 'lucide-react'

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false)
  const [tooltip, setTooltip] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2500)
    const tooltipTimer = setTimeout(() => setTooltip(false), 7000)
    return () => { clearTimeout(timer); clearTimeout(tooltipTimer) }
  }, [])

  if (!visible) return null

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-2">
      {/* Tooltip */}
      {tooltip && (
        <div className="bg-dark-200 border border-dark-400 text-white text-xs px-4 py-2.5 max-w-[180px] text-center leading-snug shadow-xl">
          <button
            onClick={() => setTooltip(false)}
            className="absolute -top-2 -right-2 bg-dark-400 text-white/50 rounded-full w-4 h-4 flex items-center justify-center text-[10px] hover:text-white"
          >
            <X size={8} />
          </button>
          ¿Tienes dudas? Escríbenos ahora 👋
        </div>
      )}
      {/* Button */}
      <a
        href="https://wa.me/34614694322"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_4px_28px_rgba(37,211,102,0.6)] hover:scale-110 transition-all duration-300 rounded-full"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle size={26} className="text-white" />
      </a>
    </div>
  )
}
