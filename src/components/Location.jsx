import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { MapPin, Navigation, Clock } from 'lucide-react'

const details = [
  {
    icon: MapPin,
    label: 'Dirección',
    value: 'Rambla de Santa Cruz, 34',
    sub: 'Santa Cruz de Tenerife',
  },
  {
    icon: Clock,
    label: 'Horario',
    value: 'Lun – Jue: 06:30 – 21:00',
    sub: 'Vie: 06:30 – 20:00',
  },
  {
    icon: Navigation,
    label: 'Zona',
    value: 'A 1 minuto de la Plaza de Toros',
    sub: 'Centro de Santa Cruz de Tenerife',
  },
]

export default function Location() {
  const ref = useScrollAnimation()

  return (
    <section id="ubicacion" className="section-padding bg-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="container-max relative z-10" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="section-tag">Dónde estamos</span>
          <div className="gold-divider" />
          <h2 className="section-title">
            En el corazón de <span className="gold-gradient-text">Santa Cruz</span>
          </h2>
          <p className="text-white/50 mt-5 max-w-lg mx-auto text-base leading-relaxed">
            Ubicados en la Rambla de Santa Cruz, el punto más céntrico y accesible de la ciudad.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          {/* Map */}
          <div className="animate-on-scroll relative" style={{ transitionDelay: '0.1s' }}>
            <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-gold/40 z-10" />
            <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-gold/40 z-10" />
            <div className="overflow-hidden border border-dark-400 h-full min-h-[380px]">
              <iframe
                title="Ubicación STAMINA Centro de Entrenamiento"
                src="https://maps.google.com/maps?q=Rambla+de+Santa+Cruz+34+Santa+Cruz+de+Tenerife+Spain&output=embed&z=16"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '380px', filter: 'grayscale(30%) contrast(1.1)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Details */}
          <div className="animate-on-scroll flex flex-col gap-5" style={{ transitionDelay: '0.2s' }}>
            {/* Address highlight */}
            <div
              className="border border-gold/30 p-7 relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, rgba(232,101,26,0.06) 0%, transparent 60%)' }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 opacity-5"
                style={{ background: 'radial-gradient(circle, rgba(232,101,26,1) 0%, transparent 70%)' }} />
              <p className="text-[10px] tracking-[0.3em] uppercase text-gold/60 mb-2">Nuestra dirección</p>
              <p className="font-display text-3xl sm:text-4xl tracking-wider text-white uppercase leading-tight">
                Rambla de<br />Santa Cruz, 34
              </p>
              <p className="text-white/40 text-sm mt-2 tracking-wide">Santa Cruz de Tenerife · 38004</p>
              <a
                href="https://maps.google.com/?q=Rambla+de+Santa+Cruz+34+Santa+Cruz+de+Tenerife"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-5 text-gold text-sm tracking-wider hover:gap-3 transition-all duration-200"
              >
                <Navigation size={14} />
                Cómo llegar
              </a>
            </div>

            {/* Detail cards */}
            <div className="grid grid-cols-2 gap-4">
              {details.map((d) => {
                const Icon = d.icon
                return (
                  <div
                    key={d.label}
                    className="bg-dark-200/60 rounded-2xl p-5 hover:border-gold/30 transition-colors duration-300"
                  >
                    <div className="w-8 h-8 border border-gold/25 flex items-center justify-center mb-3">
                      <Icon size={14} className="text-gold" />
                    </div>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-white/30 mb-1">{d.label}</p>
                    <p className="text-white/80 text-sm font-medium leading-snug">{d.value}</p>
                    <p className="text-white/35 text-xs mt-0.5">{d.sub}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
