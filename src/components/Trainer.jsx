import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Award, BookOpen, Users, Quote } from 'lucide-react'

const credentials = [
  {
    icon: BookOpen,
    title: 'Graduado en CC. Actividad Física y del Deporte',
    sub: 'Universidad Europea de Canarias',
  },
  {
    icon: Award,
    title: 'Técnico Superior en Animación Sociodeportiva',
    sub: 'Especialización en entrenamiento de fuerza',
  },
  {
    icon: BookOpen,
    title: 'Máster en Formación del Profesorado',
    sub: 'Metodología y didáctica del deporte',
  },
  {
    icon: Users,
    title: 'Especialista en grupos reducidos',
    sub: 'Metodología personalizada · Máx. 5 personas',
  },
]

const stats = [
  { value: '2', label: 'Años de experiencia' },
  { value: '+50', label: 'Alumnos formados' },
  { value: '5', label: 'Personas máx. por grupo' },
  { value: '100%', label: 'Atención individualizada' },
]

export default function Trainer() {
  const ref = useScrollAnimation()

  return (
    <section id="entrenador" className="section-padding bg-dark-100 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-5"
        style={{ background: 'radial-gradient(ellipse, rgba(232,101,26,1) 0%, transparent 70%)', filter: 'blur(80px)' }}
      />

      <div className="container-max relative z-10" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="section-tag">Tu entrenador</span>
          <div className="gold-divider" />
          <h2 className="section-title">
            La persona detrás de <span className="gold-gradient-text">STAMINA</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="animate-on-scroll" style={{ transitionDelay: '0.1s' }}>
            <div className="relative">
              {/* Corner decorations */}
              <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-gold/50 z-10" />
              <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-gold/50 z-10" />
              {/* Photo placeholder */}
              <div className="aspect-[3/4] bg-dark-300 border border-dark-400 flex flex-col items-center justify-center gap-4 relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-10"
                  style={{ background: 'radial-gradient(ellipse at center, rgba(232,101,26,0.4) 0%, transparent 70%)' }}
                />
                <div className="w-20 h-20 border border-gold/30 flex items-center justify-center">
                  <span className="font-display text-4xl gold-gradient-text">NF</span>
                </div>
                <p className="text-white/25 text-sm tracking-wider uppercase">Foto próximamente</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="animate-on-scroll space-y-8" style={{ transitionDelay: '0.2s' }}>
            {/* Name & title */}
            <div>
              <h3 className="font-display text-4xl sm:text-5xl tracking-wider text-white uppercase mb-2">
                Nacho <span className="gold-gradient-text">Fernández</span>
              </h3>
              <p className="text-white/40 text-sm tracking-[0.25em] uppercase">
                Fundador & Entrenador Personal · STAMINA Training Center
              </p>
            </div>

            {/* Quote */}
            <div className="border-l-2 border-gold/40 pl-5 py-1">
              <Quote size={18} className="text-gold/40 mb-2" />
              <p className="text-white/70 text-lg leading-relaxed font-light italic">
                "Creo que el entrenamiento de calidad no debería ser un privilegio. Por eso creé STAMINA: para ofrecer la atención de un entrenador personal dentro de un entorno de grupo que te empuje a dar lo mejor de ti cada sesión."
              </p>
            </div>

            {/* Bio */}
            <p className="text-white/50 text-sm leading-relaxed">
              Graduado en Ciencias de la Actividad Física y del Deporte y con formación especializada en rendimiento y didáctica deportiva, Nacho diseña cada programa con un objetivo claro: que el alumno progrese de forma segura, constante y medible. Su metodología combina rigor científico con una atención cercana que marca la diferencia.
            </p>

            {/* Credentials */}
            <div className="grid sm:grid-cols-2 gap-3">
              {credentials.map((c) => {
                const Icon = c.icon
                return (
                  <div key={c.title} className="flex items-start gap-3 bg-dark-200/60 rounded-2xl p-4 hover:border-gold/30 transition-colors duration-300">
                    <div className="w-8 h-8 border border-gold/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={14} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-white/80 text-xs font-medium leading-snug">{c.title}</p>
                      <p className="text-white/35 text-[11px] mt-0.5">{c.sub}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="animate-on-scroll mt-16 grid grid-cols-2 sm:grid-cols-4 rounded-2xl border border-white/[0.07]" style={{ transitionDelay: '0.3s' }}>
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`py-8 px-6 text-center ${i < stats.length - 1 ? 'border-b sm:border-b-0 border-r-0 sm:border-r border-dark-400' : ''} ${i === 1 ? 'border-r border-dark-400 sm:border-r' : ''}`}
            >
              <p className="font-display text-4xl gold-gradient-text tracking-wider">{s.value}</p>
              <p className="text-white/35 text-xs tracking-wider uppercase mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
