import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { ArrowRight, ClipboardList, Target, Dumbbell, LineChart } from 'lucide-react'

const steps = [
  {
    icon: ClipboardList,
    number: '01',
    title: 'Entrevista personal',
    description: 'Hablamos de tu historial deportivo, lesiones previas, objetivos y estilo de vida. Sin prisas. Tu entrenador te escucha.',
  },
  {
    icon: Target,
    title: 'Evaluación física',
    number: '02',
    description: 'Analizamos tu movilidad, postura, fuerza base y composición corporal. Sabemos exactamente de dónde partes.',
  },
  {
    icon: Dumbbell,
    title: 'Sesión de prueba',
    number: '03',
    description: 'Entrenas con nosotros en un grupo real. Ves cómo funciona la metodología y nosotros ajustamos el plan a tu nivel.',
  },
  {
    icon: LineChart,
    title: 'Tu plan personalizado',
    number: '04',
    description: 'Al terminar, tienes un programa diseñado específicamente para ti: cargas, objetivos semanales y puntos de mejora.',
  },
]

export default function InitialAssessment() {
  const ref = useScrollAnimation()

  return (
    <section id="valoracion" className="section-padding bg-dark-100 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(232,101,26,0.05) 0%, transparent 70%)', filter: 'blur(60px)' }}
      />

      <div className="container-max relative z-10" ref={ref}>
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="animate-on-scroll">
            <span className="section-tag">Servicio gratuito</span>
            <div className="gold-divider mx-0 mb-8" />
            <h2 className="section-title mb-6">
              Valoración
              <br />
              <span className="gold-gradient-text">inicial gratuita</span>
            </h2>
            <p className="text-white/50 text-lg font-light leading-relaxed mb-8">
              Antes de empezar, dedicamos tiempo a conocerte. No empezamos a entrenar hasta saber exactamente quién eres, cómo te mueves y qué necesitas.
            </p>
            <div className="flex items-center gap-3 bg-gold/5 border border-gold/20 rounded-2xl px-6 py-4 inline-flex">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse flex-shrink-0" />
              <span className="text-gold/90 text-sm tracking-wide">100% gratuita · Sin compromiso · Evaluación física y plan personalizado</span>
            </div>
          </div>

          <div className="animate-on-scroll" style={{ transitionDelay: '0.15s' }}>
            <div
              className="rounded-2xl p-8 border border-gold/15 relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, rgba(232,101,26,0.07) 0%, rgba(232,101,26,0.02) 100%)' }}
            >
              <div className="absolute top-0 right-0 font-display text-[10rem] leading-none text-gold/[0.04] select-none pointer-events-none">
                NF
              </div>
              <p className="text-white/70 text-xl leading-relaxed font-light italic mb-6">
                "No creo en los programas genéricos. Cada persona que entra por la puerta de STAMINA merece que me siente con ella, la escuche y entienda su punto de partida antes de diseñar cualquier plan."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-dark-300 border border-gold/30 flex items-center justify-center flex-shrink-0">
                  <span className="font-display text-sm gold-gradient-text">NF</span>
                </div>
                <div>
                  <p className="text-white/80 text-sm font-medium">Nacho Fernández</p>
                  <p className="text-white/35 text-xs">Fundador · STAMINA Training Center</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div
                key={step.title}
                className="animate-on-scroll group relative bg-dark-200 rounded-2xl p-7 hover:border hover:border-gold/20 transition-all duration-400 overflow-hidden"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{ background: 'linear-gradient(135deg, rgba(232,101,26,0.05) 0%, transparent 70%)' }}
                />
                <span className="absolute top-5 right-5 font-display text-4xl text-white/[0.04] leading-none select-none">
                  {step.number}
                </span>
                <div className="w-11 h-11 border border-gold/25 flex items-center justify-center mb-5 group-hover:border-gold/60 transition-colors duration-300">
                  <Icon size={18} className="text-gold" />
                </div>
                <h3 className="font-display text-xl tracking-wider text-white uppercase mb-3 group-hover:text-gold transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-white/45 text-sm leading-relaxed">{step.description}</p>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div
          className="animate-on-scroll rounded-2xl p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-8"
          style={{
            transitionDelay: '0.4s',
            background: 'linear-gradient(135deg, rgba(232,101,26,0.07) 0%, rgba(232,101,26,0.02) 100%)',
            border: '1px solid rgba(232,101,26,0.15)',
          }}
        >
          <div>
            <p className="font-display text-3xl tracking-wider text-white uppercase mb-2">
              Reserva tu valoración
            </p>
            <p className="text-white/40 text-sm leading-relaxed max-w-md">
              Escríbenos por WhatsApp o rellena el formulario. Acordamos día y hora y nos ponemos a trabajar.
            </p>
          </div>
          <a
            href="#contacto"
            className="btn-primary whitespace-nowrap inline-flex items-center gap-2 text-base"
          >
            Quiero mi valoración gratuita
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
