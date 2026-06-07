import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { ArrowRight } from 'lucide-react'

const profiles = [
  {
    title: 'Quieres ganar fuerza de verdad',
    description:
      'Llevas tiempo queriendo levantar más, verte más fuerte, notar la diferencia. Aquí trabajamos con una metodología de fuerza progresiva que te da exactamente eso.',
    accent: '01',
  },
  {
    title: 'Quieres mejorar tu físico y composición corporal',
    description:
      'Más músculo, menos grasa, más definición. No con dietas milagrosas, sino con entrenamiento estructurado y constancia. Eso es lo que STAMINA ofrece.',
    accent: '02',
  },
  {
    title: 'Buscas salud, energía y bienestar duradero',
    description:
      'No todo el mundo busca competir. Si quieres sentirte bien, tener energía, dormir mejor y vivir con más vitalidad, estás en el lugar correcto.',
    accent: '03',
  },
  {
    title: 'No quieres gymnasios masificados',
    description:
      'Odias esperar máquinas, no saber qué hacer y que nadie te preste atención. Quieres un espacio donde el entrenador te conozca por tu nombre y sepa cómo te sientes ese día.',
    accent: '04',
  },
]

export default function ForWho() {
  const ref = useScrollAnimation()

  return (
    <section id="para-quien" className="section-padding bg-dark-100 relative overflow-hidden">
      {/* Background decorative text */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 font-display text-[18vw] leading-none tracking-widest text-white/[0.02] select-none pointer-events-none whitespace-nowrap"
        aria-hidden="true"
      >
        STAMINA
      </div>

      <div className="container-max relative z-10" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="section-tag">¿Es para ti?</span>
          <div className="gold-divider" />
          <h2 className="section-title">
            STAMINA es para
            <br />
            <span className="gold-gradient-text">personas como tú</span>
          </h2>
          <p className="text-white/50 mt-5 max-w-lg mx-auto text-base leading-relaxed">
            No importa tu nivel de experiencia. Lo que importa es que quieras progresar.
          </p>
        </div>

        {/* Profiles */}
        <div className="grid md:grid-cols-2 gap-5">
          {profiles.map((profile, i) => (
            <div
              key={profile.title}
              className="animate-on-scroll group relative bg-dark-200/60 rounded-2xl p-7 flex gap-5 hover:border-gold/30 transition-all duration-400 overflow-hidden"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: 'linear-gradient(135deg, rgba(232,101,26,0.04) 0%, transparent 70%)' }}
              />
              {/* Number */}
              <span className="font-display text-4xl gold-gradient-text leading-none flex-shrink-0 opacity-60">
                {profile.accent}
              </span>
              {/* Content */}
              <div>
                <h3 className="font-display text-xl tracking-wider text-white uppercase mb-2 group-hover:text-gold transition-colors duration-300">
                  {profile.title}
                </h3>
                <p className="text-white/45 text-sm leading-relaxed">{profile.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="animate-on-scroll text-center mt-14"
          style={{ transitionDelay: '0.4s' }}
        >
          <p className="text-white/40 text-sm mb-5 tracking-wide">
            Si te has reconocido en alguno de estos perfiles, da el primer paso
          </p>
          <a href="#contacto" className="btn-primary inline-flex items-center gap-2">
            Reservar mi plaza
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
