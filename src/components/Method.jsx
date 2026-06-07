import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Dumbbell, Zap, TrendingUp, Users, ClipboardCheck } from 'lucide-react'

const pillars = [
  {
    icon: Dumbbell,
    title: 'Entrenamiento de fuerza',
    description:
      'La base de todo. Trabajamos con cargas progresivas para construir masa muscular, mejorar la densidad ósea y elevar tu metabolismo basal.',
  },
  {
    icon: Zap,
    title: 'Entrenamiento funcional',
    description:
      'Movimientos que se traducen en tu vida diaria. Agilidad, coordinación y resistencia cardiovascular integrados en sesiones dinámicas.',
  },
  {
    icon: TrendingUp,
    title: 'Progresión individual',
    description:
      'No hay dos personas iguales. Tu programa evoluciona semana a semana según tu rendimiento, tus objetivos y tu recuperación.',
  },
  {
    icon: Users,
    title: 'Grupos reducidos',
    description:
      'Máximo 5 personas por sesión. El ambiente de grupo te motiva y el ratio entrenador-alumno garantiza que nadie se quede atrás.',
  },
  {
    icon: ClipboardCheck,
    title: 'Seguimiento cercano',
    description:
      'Registro de tus cargas, análisis de tu técnica y ajustes en tiempo real. Siempre sabes cuánto has mejorado y hacia dónde vas.',
  },
]

export default function Method() {
  const ref = useScrollAnimation()

  return (
    <section id="metodo" className="section-padding bg-dark relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-5 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(232,101,26,1) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="container-max relative z-10" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="section-tag">Nuestro método</span>
          <div className="gold-divider" />
          <h2 className="section-title">
            El método <span className="gold-gradient-text">STAMINA</span>
          </h2>
          <p className="section-subtitle mt-5 max-w-lg mx-auto">
            Cinco pilares que forman un sistema de entrenamiento completo, coherente y
            orientado a resultados duraderos.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon
            return (
              <div
                key={pillar.title}
                className="animate-on-scroll group relative bg-dark-200/60 rounded-2xl p-7 transition-all duration-400 hover:border-gold/40 overflow-hidden"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: 'radial-gradient(ellipse at top left, rgba(232,101,26,0.06) 0%, transparent 60%)' }}
                />
                {/* Number */}
                <span className="absolute top-5 right-5 font-display text-5xl text-dark-400 leading-none select-none group-hover:text-dark-500 transition-colors">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {/* Icon */}
                <div className="w-11 h-11 border border-gold/25 flex items-center justify-center mb-5 group-hover:border-gold/60 transition-colors duration-300">
                  <Icon size={20} className="text-gold" />
                </div>
                {/* Content */}
                <h3 className="font-display text-xl tracking-wider text-white uppercase mb-3 group-hover:text-gold transition-colors duration-300">
                  {pillar.title}
                </h3>
                <p className="text-white/45 text-sm leading-relaxed">{pillar.description}</p>
              </div>
            )
          })}

          {/* CTA card */}
          <div
            className="animate-on-scroll sm:col-span-2 lg:col-span-1 flex flex-col items-center justify-center border border-gold/20 p-8 text-center"
            style={{
              transitionDelay: '0.5s',
              background: 'linear-gradient(135deg, #0f0f0a 0%, #161610 100%)',
            }}
          >
            <p className="font-display text-2xl tracking-wider leading-tight gold-shimmer-text mb-6 uppercase">
              Pilares integrados en cada sesión para maximizar tu progreso
            </p>
            <a href="#contacto" className="btn-primary text-sm">
              Empieza ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
