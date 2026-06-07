import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Shield, Target, TrendingUp, Users } from 'lucide-react'

const values = [
  {
    icon: Users,
    title: 'Atención individual en cada sesión',
    description:
      'Con grupos de máximo 5 personas, el entrenador conoce tu nombre, tu historial y tus objetivos. Cada corrección, cada carga y cada ajuste van dirigidos a ti.',
  },
  {
    icon: Target,
    title: 'Programación pensada para ti',
    description:
      'No hay programas genéricos. Tu plan de entrenamiento evoluciona en función de tus resultados, tu nivel actual y lo que buscas conseguir.',
  },
  {
    icon: TrendingUp,
    title: 'Fuerza y funcionalidad juntas',
    description:
      'Combinamos entrenamiento de fuerza estructurado con trabajo funcional para que mejores en todos los sentidos: dentro del centro y en tu vida diaria.',
  },
  {
    icon: Shield,
    title: 'Progresión medible semana a semana',
    description:
      'Registramos cada entrenamiento. Sabes exactamente cuánto has mejorado, cuánto levantas y hacia dónde vas. Los resultados no son una promesa, son datos.',
  },
]

export default function ProblemSolution() {
  const ref = useScrollAnimation()

  return (
    <section id="problema" className="section-padding bg-dark-100 relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent" />

      <div className="container-max" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="section-tag">Lo que nos define</span>
          <div className="gold-divider" />
          <h2 className="section-title text-white">
            Cuatro principios que
            <br />
            <span className="gold-gradient-text">guían cada sesión</span>
          </h2>
          <p className="section-subtitle mt-6 max-w-xl mx-auto">
            En STAMINA cada decisión está tomada con un único objetivo:{' '}
            <span className="font-display tracking-wider text-white uppercase">QUE TÚ PROGRESES.</span>{' '}
            Así es como trabajamos.
          </p>
        </div>

        {/* Values grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {values.map((v, i) => {
            const Icon = v.icon
            return (
              <div
                key={v.title}
                className="animate-on-scroll group relative bg-dark-200/60 rounded-2xl p-7 hover:border-gold/30 transition-all duration-400 overflow-hidden"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: 'linear-gradient(135deg, rgba(232,101,26,0.05) 0%, transparent 70%)' }}
                />
                <div className="flex items-start gap-5">
                  <div className="w-11 h-11 border border-gold/25 flex items-center justify-center flex-shrink-0 group-hover:border-gold/60 transition-colors duration-300 mt-0.5">
                    <Icon size={18} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl tracking-wider text-white uppercase mb-2 group-hover:text-gold transition-colors duration-300">
                      {v.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed font-light">{v.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Stats row */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14 animate-on-scroll"
          style={{ transitionDelay: '0.4s' }}
        >
          {[
            { value: '5', label: 'Personas máx. por grupo' },
            { value: '100%', label: 'Supervisado por entrenador' },
            { value: '4', label: 'Planes disponibles' },
            { value: '∞', label: 'Progresión posible' },
          ].map((stat) => (
            <div key={stat.label} className="text-center border border-dark-400 py-6 px-4">
              <div className="font-display text-4xl gold-gradient-text">{stat.value}</div>
              <div className="text-white/40 text-xs tracking-wide mt-1 leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
