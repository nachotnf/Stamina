import { ChevronDown, MapPin } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black"
    >
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(ellipse 70% 50% at 50% 60%, rgba(232,101,26,0.18) 0%, transparent 70%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto pt-24 pb-28">
        {/* Logo mark */}
        <div className="flex justify-center mb-10 animate-fade-in">
          <img
            src="/logo-icono.png"
            alt="STAMINA"
            className="w-40 h-40 sm:w-52 sm:h-52 object-contain"
            style={{ filter: 'invert(1)' }}
          />
        </div>

        {/* Pre-tag */}
        <div className="inline-flex items-center gap-3 mb-8 animate-fade-in">
          <span className="h-px w-6 bg-gold/50" />
          <span className="section-tag">Santa Cruz de Tenerife · Inauguración 19 de junio</span>
          <span className="h-px w-6 bg-gold/50" />
        </div>

        {/* Main headline */}
        <div className="animate-fade-in mb-3" style={{ animationDelay: '0.1s' }}>
          <h1 className="font-display text-7xl sm:text-9xl lg:text-[11rem] tracking-[0.12em] leading-none gold-shimmer-text">
            STAMINA
          </h1>
          <p className="text-white/25 tracking-[0.55em] uppercase text-xs sm:text-sm font-light mt-2">
            Centro de Entrenamiento
          </p>
        </div>

        {/* Subheadline */}
        <div className="animate-fade-up mt-10 mb-4" style={{ animationDelay: '0.2s', opacity: 0 }}>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl tracking-wider uppercase leading-tight text-white">
            Entrenamiento personal
            <br />
            <span className="gold-gradient-text">en grupos reducidos</span>
          </h2>
        </div>

        {/* Subtitle */}
        <p
          className="text-white/40 text-base sm:text-lg font-light leading-relaxed mb-8 animate-fade-up"
          style={{ animationDelay: '0.3s', opacity: 0 }}
        >
          Máximo 5 personas. Atención personalizada. Resultados reales.
        </p>

        {/* Location badge */}
        <div className="animate-fade-up mb-10" style={{ animationDelay: '0.38s', opacity: 0 }}>
          <a
            href="#ubicacion"
            className="inline-flex items-center gap-2.5 bg-gold/10 border border-gold/30 rounded-full px-6 py-3 hover:bg-gold/15 hover:border-gold/50 transition-all duration-300 group"
          >
            <MapPin size={14} className="text-gold flex-shrink-0" />
            <span className="font-display text-base tracking-[0.15em] text-white/90 uppercase">
              Rambla de Santa Cruz, 34
            </span>
            <span className="text-white/25 text-xs">·</span>
            <span className="text-white/45 text-sm tracking-wide">Santa Cruz de Tenerife</span>
          </a>
        </div>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: '0.4s', opacity: 0 }}
        >
          <a href="#contacto" className="btn-primary text-base w-full sm:w-auto">
            Quiero información
          </a>
          <a href="#planes" className="btn-secondary text-base w-full sm:w-auto">
            Ver planes
          </a>
        </div>

        {/* Tags */}
        <div
          className="flex flex-wrap justify-center gap-2 mt-12 animate-fade-up"
          style={{ animationDelay: '0.5s', opacity: 0 }}
        >
          {['Fuerza', 'Funcional', 'Progresión', 'Resultados'].map((tag) => (
            <span
              key={tag}
              className="text-white/25 text-xs tracking-[0.25em] uppercase px-4 py-1.5 rounded-full border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#problema"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20 hover:text-gold transition-colors group"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Descubre más</span>
        <ChevronDown size={16} className="animate-bounce" />
      </a>
    </section>
  )
}
