import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Check, Star } from 'lucide-react'

const plans = [
  {
    name: 'STAMINA BASE',
    tag: 'Para empezar',
    price: '65',
    originalPrice: '90',
    days: '1 día / semana',
    featured: false,
    features: [
      'Introducción a la fuerza',
      'Mejora de movilidad y técnica',
      'Grupos de máximo 5 personas',
      'Supervisión completa del entrenador',
      'Ideal para principiantes',
    ],
  },
  {
    name: 'STAMINA',
    tag: 'Más recomendado',
    price: '119',
    originalPrice: '144',
    days: '2 días / semana',
    featured: true,
    features: [
      'Fuerza estructurada',
      'Progresión semana a semana',
      'Grupos de máximo 5 personas',
      'Programa personalizado',
      'Seguimiento de cargas y técnica',
    ],
  },
  {
    name: 'STAMINA+',
    tag: 'Más intensidad',
    price: '159',
    originalPrice: '184',
    days: '2 fuerza + 1 funcional',
    featured: false,
    features: [
      '2 días de fuerza estructurada',
      '1 sesión funcional los viernes',
      'Mayor gasto calórico',
      'Mejora de resistencia',
      'Grupos de máximo 5 personas',
    ],
  },
  {
    name: 'STAMINA PRO',
    tag: 'Máximo rendimiento',
    price: '239',
    originalPrice: '264',
    days: '4 fuerza + 1 funcional',
    featured: false,
    features: [
      '4 días de fuerza de alta intensidad',
      '1 sesión funcional los viernes',
      'Seguimiento continuo y diario',
      'Máximo rendimiento',
      'Plazas muy limitadas',
    ],
  },
]

export default function Plans() {
  const ref = useScrollAnimation()

  return (
    <section id="planes" className="section-padding bg-dark-100 relative overflow-hidden">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="container-max" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="section-tag">Tarifas</span>
          <div className="gold-divider" />
          <h2 className="section-title">
            Elige tu <span className="gold-gradient-text">plan</span>
          </h2>
          <p className="text-white/50 mt-5 max-w-lg mx-auto text-base leading-relaxed">
            Planes flexibles diseñados para adaptarse a tu ritmo de vida y tus objetivos.
            Sin permanencia. Sin letra pequeña.
          </p>
          <div className="inline-flex items-center gap-2 mt-6 border border-gold/30 bg-gold/5 px-5 py-2.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse flex-shrink-0" />
            <span className="text-gold text-sm tracking-wider">Precios especiales de apertura · Hasta el 19 de junio</span>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`animate-on-scroll relative flex flex-col transition-all duration-400 group rounded-2xl ${
                plan.featured ? 'pt-5' : ''
              }`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Featured badge */}
              {plan.featured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex items-center gap-1.5 bg-gold text-white text-[10px] font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full whitespace-nowrap shadow-lg">
                  <Star size={9} fill="currentColor" />
                  Más popular
                </div>
              )}
              <div className={`flex flex-col flex-1 rounded-2xl overflow-hidden ${
                plan.featured
                  ? 'border border-gold/50 bg-gradient-to-b from-dark-300 to-dark-200 scale-[1.02] shadow-[0_0_60px_rgba(232,101,26,0.10)]'
                  : 'bg-dark-200 border border-white/[0.07] hover:border-gold/30'
              }`}>

              {/* Plan header */}
              <div
                className={`p-6 border-b ${plan.featured ? 'border-gold/20' : 'border-white/[0.07]'}`}
              >
                <span
                  className={`text-[10px] tracking-[0.25em] uppercase font-medium ${
                    plan.featured ? 'text-gold' : 'text-white/35'
                  }`}
                >
                  {plan.tag}
                </span>
                <h3
                  className={`font-display text-2xl tracking-wider mt-1 ${
                    plan.featured ? 'gold-gradient-text' : 'text-white'
                  }`}
                >
                  {plan.name}
                </h3>
                <p className="text-white/35 text-xs tracking-wide mt-1">{plan.days}</p>
                <div className="mt-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-white/35 text-sm line-through">{plan.originalPrice}€</span>
                    <span className="text-[10px] tracking-wider uppercase bg-gold/15 text-gold border border-gold/30 px-2 py-0.5 rounded-full">
                      Precio apertura
                    </span>
                  </div>
                  <div className="flex items-end gap-1">
                    <span
                      className={`font-display text-5xl leading-none ${
                        plan.featured ? 'gold-gradient-text' : 'text-white'
                      }`}
                    >
                      {plan.price}€
                    </span>
                    <span className="text-white/35 text-xs mb-1.5">/mes</span>
                  </div>
                </div>
              </div>

              {/* Features */}
              <ul className="p-6 space-y-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-white/60">
                    <Check
                      size={13}
                      className={`mt-0.5 flex-shrink-0 ${plan.featured ? 'text-gold' : 'text-gold/60'}`}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="p-6 pt-0">
                <a
                  href={`https://wa.me/34614694322?text=Hola,%20me%20interesa%20el%20plan%20${encodeURIComponent(plan.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center text-sm font-semibold py-3.5 rounded-xl tracking-wider uppercase transition-all duration-300 ${
                    plan.featured
                      ? 'bg-gold text-white hover:bg-gold-light'
                      : 'border border-gold/30 text-gold/70 hover:border-gold hover:text-gold'
                  }`}
                >
                  Quiero este plan
                </a>
              </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-white/25 text-xs mt-8 tracking-wide">
          * Precios especiales de pretemporada sujetos a disponibilidad. Plazas limitadas por grupo.
        </p>
      </div>
    </section>
  )
}
