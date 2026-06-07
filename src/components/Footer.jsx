import { Instagram, MessageCircle, MapPin, Mail, Phone } from 'lucide-react'

const navLinks = [
  { href: '#metodo', label: 'El método' },
  { href: '#entrenador', label: 'El entrenador' },
  { href: '#planes', label: 'Planes' },
  { href: '#instalaciones', label: 'Instalaciones' },
  { href: '#ubicacion', label: 'Ubicación' },
  { href: '#para-quien', label: '¿Para quién?' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Footer() {
  return (
    <footer className="bg-dark-100 border-t border-white/[0.07]">
      {/* Main footer */}
      <div className="container-max px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <img
                src="/logo.png"
                alt="STAMINA"
                className="w-20 h-20 object-contain flex-shrink-0"
                style={{ filter: 'invert(1)' }}
              />
              <div>
                <span className="font-display text-3xl tracking-[0.2em] gold-gradient-text">STAMINA</span>
                <p className="text-[9px] tracking-[0.4em] text-white/30 uppercase font-light mt-0.5">
                  Centro de Entrenamiento
                </p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs font-light">
              Entrenamiento personal en grupos reducidos. Máximo 5 personas.
              Atención personalizada. Resultados reales.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://www.instagram.com/stamina.entrenamiento"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-white/[0.07] rounded-xl flex items-center justify-center text-white/40 hover:border-gold/40 hover:text-gold transition-all duration-200"
                aria-label="Instagram de STAMINA"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://wa.me/34614694322"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-white/[0.07] rounded-xl flex items-center justify-center text-white/40 hover:border-gold/40 hover:text-gold transition-all duration-200"
                aria-label="WhatsApp de STAMINA"
              >
                <MessageCircle size={16} />
              </a>
              <a
                href="mailto:staminaentrenamiento@icloud.com"
                className="w-9 h-9 border border-white/[0.07] rounded-xl flex items-center justify-center text-white/40 hover:border-gold/40 hover:text-gold transition-all duration-200"
                aria-label="Email de STAMINA"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-white/35 mb-5">Navegación</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 hover:text-gold transition-colors duration-200 font-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact — NAP estructurado para SEO local */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-white/35 mb-5">Contacto</h4>
            <address className="not-italic space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={14} className="text-gold/60 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-white/65 text-sm font-light">Rambla de Santa Cruz, 34</p>
                  <p className="text-white/40 text-xs">38004 Santa Cruz de Tenerife, Canarias</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={14} className="text-gold/60 flex-shrink-0" aria-hidden="true" />
                <a
                  href="tel:+34614694322"
                  className="text-white/65 text-sm hover:text-gold transition-colors font-light"
                >
                  +34 614 694 322
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle size={14} className="text-gold/60 flex-shrink-0" aria-hidden="true" />
                <a
                  href="https://wa.me/34614694322"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/65 text-sm hover:text-gold transition-colors font-light"
                >
                  WhatsApp
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={14} className="text-gold/60 flex-shrink-0" aria-hidden="true" />
                <a
                  href="mailto:staminaentrenamiento@icloud.com"
                  className="text-white/65 text-sm hover:text-gold transition-colors font-light"
                >
                  staminaentrenamiento@icloud.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Instagram size={14} className="text-gold/60 flex-shrink-0" aria-hidden="true" />
                <a
                  href="https://www.instagram.com/stamina.entrenamiento"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/65 text-sm hover:text-gold transition-colors font-light"
                >
                  @stamina.entrenamiento
                </a>
              </div>
            </address>

            {/* Pre-opening badge */}
            <div className="mt-6 border border-gold/20 bg-gold/5 px-4 py-3 flex items-center gap-2 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              <span className="text-gold/80 text-xs tracking-wider">Inauguración 19 de junio · Plazas limitadas</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.07]">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/45 text-xs tracking-wide text-center sm:text-left">
            © {new Date().getFullYear()} STAMINA Centro de Entrenamiento · Santa Cruz de Tenerife
          </p>
          <div className="flex items-center gap-4">
            <a href="/aviso-legal.html" className="text-white/40 text-xs hover:text-white/70 transition-colors">
              Aviso legal
            </a>
            <span className="text-white/25">·</span>
            <a href="/privacidad.html" className="text-white/40 text-xs hover:text-white/70 transition-colors">
              Política de privacidad
            </a>
            <span className="text-white/25">·</span>
            <a href="/cookies.html" className="text-white/40 text-xs hover:text-white/70 transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
