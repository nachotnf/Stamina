import { useScrollAnimation } from '../hooks/useScrollAnimation'

const spaces = [
  {
    emoji: '🏋️',
    title: 'Zona de fuerza',
    description:
      'Rack de potencia completo, barras olímpicas y discos de precisión. Todo lo necesario para una programación de fuerza seria y progresiva.',
  },
  {
    emoji: '⚡',
    title: 'Zona funcional',
    description:
      'Kettlebells, TRX, cajas pliométricas, battle ropes y material de movilidad. Un espacio diseñado para el movimiento funcional y la variedad.',
  },
  {
    emoji: '🌿',
    title: 'Carril de césped',
    description:
      'Superficie de césped artificial para arrastres, sprints, ejercicios de suelo y dinámicas de grupo. La zona más versátil del centro.',
  },
  {
    emoji: '🔧',
    title: 'Material profesional',
    description:
      'Equipamiento de primera calidad seleccionado específicamente para el tipo de entrenamiento que ofrecemos. Nada de máquinas de gimnasio convencional.',
  },
  {
    emoji: '🔒',
    title: 'Ambiente privado y cuidado',
    description:
      'Con máximo 5 personas por sesión, el espacio es tuyo. Sin colas, sin esperas, sin ruido. Un entorno donde puedes centrarte en entrenar.',
  },
  {
    emoji: '📍',
    title: 'Ubicación',
    description:
      'Rambla de Santa Cruz, 34 — Santa Cruz de Tenerife. Acceso fácil, aparcamiento cercano y en el corazón de la ciudad.',
  },
]

export default function Facilities() {
  const ref = useScrollAnimation()

  return (
    <section id="instalaciones" className="section-padding bg-dark relative overflow-hidden">
      {/* Side accent */}
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent" />

      <div className="container-max" ref={ref}>
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-10 items-end mb-16">
          <div className="animate-on-scroll">
            <span className="section-tag">El espacio</span>
            <div className="w-16 h-0.5 bg-gold my-6" />
            <h2 className="section-title text-left">
              Instalaciones
              <br />
              <span className="gold-gradient-text">a tu nivel</span>
            </h2>
          </div>
          <div className="animate-on-scroll" style={{ transitionDelay: '0.15s' }}>
            <p className="text-white/50 text-base leading-relaxed">
              Cada rincón del centro está pensado para que tu entrenamiento sea efectivo,
              seguro y disfrutable. Un espacio boutique donde el detalle importa y el ambiente
              lo marca la diferencia.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="h-px flex-1 bg-dark-400" />
              <span className="text-white/20 text-xs tracking-widest uppercase">Rambla de Santa Cruz, 34</span>
              <div className="h-px flex-1 bg-dark-400" />
            </div>
          </div>
        </div>

        {/* Spaces grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {spaces.map((space, i) => (
            <div
              key={space.title}
              className="animate-on-scroll group relative bg-dark-200/60 rounded-2xl p-6 hover:border-gold/25 transition-all duration-400 overflow-hidden"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: 'linear-gradient(135deg, rgba(232,101,26,0.04) 0%, transparent 60%)' }}
              />
              <div className="text-3xl mb-4">{space.emoji}</div>
              <h3 className="font-display text-lg tracking-wider text-white uppercase mb-2 group-hover:text-gold transition-colors duration-300">
                {space.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">{space.description}</p>
            </div>
          ))}
        </div>

        {/* Visual accent */}
        <div
          className="animate-on-scroll mt-14 bg-dark-200/60 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6 text-center md:text-left"
          style={{ transitionDelay: '0.5s' }}
        >
          <div className="flex-1">
            <h3 className="font-display text-2xl tracking-wider text-white uppercase mb-2">
              ¿Quieres ver el espacio?
            </h3>
            <p className="text-white/40 text-sm">
              Antes de la apertura podemos enseñarte el centro en persona o por videollamada.
              Escríbenos sin compromiso.
            </p>
          </div>
          <a
            href="https://wa.me/34614694322"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary flex-shrink-0"
          >
            Ver instalaciones
          </a>
        </div>
      </div>
    </section>
  )
}
