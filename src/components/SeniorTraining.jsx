import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { ArrowRight, Shield, Zap, Heart, TrendingUp, Users, Star } from 'lucide-react'

const benefits = [
  {
    icon: Shield,
    title: 'Huesos y articulaciones más fuertes',
    description: 'El entrenamiento de fuerza aumenta la densidad ósea y protege las articulaciones, reduciendo el riesgo de osteoporosis y lesiones cotidianas.',
  },
  {
    icon: Zap,
    title: 'Más energía en el día a día',
    description: 'Notarás la diferencia desde las primeras semanas. Subir escaleras, cargar la compra, jugar con los nietos — todo se vuelve más fácil.',
  },
  {
    icon: Heart,
    title: 'Salud cardiovascular y metabólica',
    description: 'Mejora tu presión arterial, regula el azúcar en sangre y reduce el riesgo de enfermedades crónicas. El ejercicio es la mejor medicina preventiva.',
  },
  {
    icon: TrendingUp,
    title: 'Masa muscular y movilidad',
    description: 'A partir de los 50, perder músculo es el mayor enemigo de tu autonomía. El entrenamiento de fuerza frena ese proceso y mejora tu postura y equilibrio.',
  },
]

const testimonialPoints = [
  'Sin importar tu nivel de partida',
  'Adaptado a tus condiciones físicas',
  'Ritmo progresivo y seguro',
  'Grupos de máximo 5 personas',
  'Entrenador presente en cada repetición',
]

export default function SeniorTraining() {
  const ref = useScrollAnimation()

  return (
    <section id="mayores-50" className="section-padding bg-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div
        className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none opacity-4"
        style={{ background: 'radial-gradient(ellipse, rgba(232,101,26,0.08) 0%, transparent 70%)', filter: 'blur(80px)' }}
      />

      <div className="container-max relative z-10" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="section-tag">+50 años</span>
          <div className="gold-divider" />
          <h2 className="section-title">
            El mejor momento para
            <br />
            <span className="gold-gradient-text">empezar es ahora</span>
          </h2>
          <p className="text-white/50 mt-5 max-w-2xl mx-auto text-base leading-relaxed">
            Si tienes más de 50 años y crees que el entrenamiento de fuerza no es para ti,
            estás equivocado. Es exactamente para ti — y probablemente lo que más necesitas.
          </p>
        </div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-2 gap-10 mb-14">
          {/* Left: benefits */}
          <div className="space-y-4">
            {benefits.map((b, i) => {
              const Icon = b.icon
              return (
                <div
                  key={b.title}
                  className="animate-on-scroll group flex gap-5 bg-dark-200/60 rounded-2xl p-6 hover:border-gold/30 transition-all duration-400 overflow-hidden relative"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: 'linear-gradient(135deg, rgba(232,101,26,0.04) 0%, transparent 70%)' }}
                  />
                  <div className="w-11 h-11 border border-gold/25 flex items-center justify-center flex-shrink-0 group-hover:border-gold/60 transition-colors duration-300">
                    <Icon size={18} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg tracking-wider text-white uppercase mb-1.5 group-hover:text-gold transition-colors duration-300">
                      {b.title}
                    </h3>
                    <p className="text-white/45 text-sm leading-relaxed">{b.description}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right: message + checklist */}
          <div className="animate-on-scroll flex flex-col gap-6" style={{ transitionDelay: '0.2s' }}>
            {/* Quote block */}
            <div
              className="border border-gold/25 p-8 relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, rgba(232,101,26,0.06) 0%, transparent 60%)' }}
            >
              <div className="absolute top-4 right-4 opacity-10">
                <Star size={60} className="text-gold" />
              </div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-gold/60 mb-4">Por qué funciona</p>
              <p className="text-white/80 text-lg leading-relaxed font-light mb-6">
                "El cuerpo humano responde al entrenamiento de fuerza a cualquier edad. Las investigaciones son claras: personas mayores de 60, 70 e incluso 80 años ganan músculo, mejoran su equilibrio y recuperan su autonomía con el entrenamiento adecuado."
              </p>
              <p className="text-white/35 text-xs tracking-wider uppercase">— Basado en evidencia científica</p>
            </div>

            {/* Checklist */}
            <div className="bg-dark-200/60 rounded-2xl p-7">
              <p className="text-[10px] tracking-[0.3em] uppercase text-white/35 mb-5">Cómo lo hacemos en STAMINA</p>
              <ul className="space-y-3">
                {testimonialPoints.map((point) => (
                  <li key={point} className="flex items-center gap-3 text-sm text-white/60">
                    <span className="w-5 h-5 border border-gold/30 flex items-center justify-center flex-shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Users badge */}
            <div className="flex items-center gap-4 bg-dark-200/60 rounded-2xl p-5">
              <div className="w-12 h-12 border border-gold/25 flex items-center justify-center flex-shrink-0">
                <Users size={20} className="text-gold" />
              </div>
              <div>
                <p className="text-white/80 text-sm font-medium">Grupos mixtos y cercanos</p>
                <p className="text-white/35 text-xs mt-0.5">Hombres y mujeres +50 en un ambiente cómodo, sin presión y con resultados reales</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA bar */}
        <div
          className="animate-on-scroll border border-gold/20 p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
          style={{
            transitionDelay: '0.3s',
            background: 'linear-gradient(135deg, rgba(232,101,26,0.05) 0%, transparent 50%)',
          }}
        >
          <div>
            <p className="font-display text-2xl tracking-wider text-white uppercase mb-1">
              Da el primer paso hoy
            </p>
            <p className="text-white/40 text-sm">
              Cuéntanos tu situación y diseñamos un plan adaptado a ti
            </p>
          </div>
          <a
            href="#contacto"
            className="btn-primary whitespace-nowrap inline-flex items-center gap-2"
          >
            Quiero más información
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
