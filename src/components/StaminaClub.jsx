import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Calendar, Route, Users, UserPlus, ArrowRight } from 'lucide-react'

const perks = [
  {
    icon: Calendar,
    title: '1 evento al mes',
    description: 'Cada mes una salida grupal. Un plan fijo en tu calendario que te da un motivo más para mantenerte activo fuera del centro.',
  },
  {
    icon: Route,
    title: 'Running o ciclismo',
    description: 'Los meses alternamos formato. Un mes salimos a correr, el siguiente en bici. Rutas siempre pensadas para disfrutar, no para sufrir.',
  },
  {
    icon: Users,
    title: '2 rutas por nivel',
    description: 'Cada evento ofrece dos opciones de ruta: nivel básico y nivel medio. Nadie se queda sin ir por miedo a no llegar.',
  },
  {
    icon: UserPlus,
    title: 'Trae a un invitado',
    description: 'Cada socio puede traer a una persona ajena al centro. Una forma natural de que tu gente conozca STAMINA sin presión.',
  },
]

export default function StaminaClub() {
  const ref = useScrollAnimation()

  return (
    <section id="stamina-club" className="section-padding bg-dark relative overflow-hidden">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(232,101,26,0.06) 0%, transparent 70%)', filter: 'blur(60px)' }}
      />

      <div className="container-max relative z-10" ref={ref}>
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-end mb-16">
          <div className="animate-on-scroll">
            <span className="section-tag">Exclusivo para socios</span>
            <div className="gold-divider mx-0 mb-8" />
            <h2 className="section-title mb-6">
              STAMINA
              <br />
              <span className="gold-gradient-text">CLUB</span>
            </h2>
            <p className="text-white/50 text-lg font-light leading-relaxed">
              Una vez al mes, salimos del centro. Una ruta en grupo —corriendo o en bici—
              para reforzar el hábito, conocernos mejor y demostrar que el entrenamiento
              va más allá de cuatro paredes.
            </p>
          </div>

          {/* Featured badge block */}
          <div className="animate-on-scroll" style={{ transitionDelay: '0.15s' }}>
            <div
              className="rounded-2xl p-8 border border-gold/15 relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, rgba(232,101,26,0.07) 0%, rgba(232,101,26,0.02) 100%)' }}
            >
              {/* Decorative text */}
              <div className="absolute top-0 right-0 font-display text-[8rem] leading-none text-gold/[0.04] select-none pointer-events-none">
                SC
              </div>
              <div className="space-y-5 relative">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-gold animate-pulse flex-shrink-0" />
                  <span className="text-gold/90 text-sm tracking-wide">Incluido en todos los planes</span>
                </div>
                <div className="h-px bg-gold/10" />
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Frecuencia', value: '1 vez / mes' },
                    { label: 'Formato', value: 'Run · Ride' },
                    { label: 'Rutas', value: '2 por nivel' },
                    { label: 'Invitados', value: '1 por socio' },
                  ].map(item => (
                    <div key={item.label}>
                      <p className="text-white/30 text-[10px] tracking-[0.2em] uppercase mb-1">{item.label}</p>
                      <p className="text-white font-display text-lg tracking-wider">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Perks grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {perks.map((perk, i) => {
            const Icon = perk.icon
            return (
              <div
                key={perk.title}
                className="animate-on-scroll group relative bg-dark-200/60 rounded-2xl p-7 hover:border-gold/30 transition-all duration-400 overflow-hidden"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{ background: 'linear-gradient(135deg, rgba(232,101,26,0.05) 0%, transparent 70%)' }}
                />
                <div className="w-11 h-11 border border-gold/25 flex items-center justify-center mb-5 group-hover:border-gold/60 transition-colors duration-300">
                  <Icon size={18} className="text-gold" />
                </div>
                <h3 className="font-display text-xl tracking-wider text-white uppercase mb-3 group-hover:text-gold transition-colors duration-300">
                  {perk.title}
                </h3>
                <p className="text-white/45 text-sm leading-relaxed">{perk.description}</p>
              </div>
            )
          })}
        </div>

        {/* CTA bar */}
        <div
          className="animate-on-scroll rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6"
          style={{
            transitionDelay: '0.4s',
            background: 'linear-gradient(135deg, rgba(232,101,26,0.07) 0%, rgba(232,101,26,0.02) 100%)',
            border: '1px solid rgba(232,101,26,0.15)',
          }}
        >
          <div>
            <p className="font-display text-2xl tracking-wider text-white uppercase mb-1">
              Hazte socio y únete al club
            </p>
            <p className="text-white/40 text-sm max-w-md">
              El STAMINA CLUB es un beneficio incluido en todos los planes. No pagas más, simplemente lo tienes.
            </p>
          </div>
          <a
            href="#contacto"
            className="btn-primary whitespace-nowrap inline-flex items-center gap-2 text-sm"
          >
            Quiero ser socio
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  )
}
