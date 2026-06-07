import { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

const links = [
  { href: '#metodo', label: 'Método' },
  { href: '#entrenador', label: 'Entrenador' },
  { href: '#valoracion', label: 'Valoración' },
  { href: '#planes', label: 'Planes' },
  { href: '#stamina-club', label: 'Club' },
  { href: '#instalaciones', label: 'Instalaciones' },
  { href: '#ubicacion', label: 'Ubicación' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { theme, toggle } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? `backdrop-blur-2xl border-b py-3 ${
              theme === 'light'
                ? 'bg-white/85 border-black/[0.08]'
                : 'bg-black/80 border-white/[0.06]'
            }`
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-max flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <img
            src="/logo-icono.png"
            alt="STAMINA"
            className="w-14 h-14 object-contain"
            style={{ filter: 'invert(1)' }}
          />
          <div className="flex flex-col leading-none">
            <span className="font-display text-2xl tracking-[0.2em] gold-gradient-text transition-all duration-300 group-hover:tracking-[0.25em]">
              STAMINA
            </span>
            <span className="text-[8px] tracking-[0.35em] text-white/30 uppercase font-light">
              Centro de Entrenamiento
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/50 hover:text-white tracking-wide transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={toggle}
            className="w-8 h-8 flex items-center justify-center text-white/40 hover:text-white transition-colors duration-200 rounded-full"
            aria-label={theme === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro'}
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a
            href="https://wa.me/34614694322?text=Hola,%20quiero%20información%20sobre%20STAMINA%20Training%20Center"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm py-2.5 px-6"
          >
            Reservar plaza
          </a>
        </nav>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-1">
          <button
            onClick={toggle}
            className="w-9 h-9 flex items-center justify-center text-white/50 hover:text-white transition-colors"
            aria-label={theme === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro'}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className="w-9 h-9 flex items-center justify-center text-white/60 hover:text-white transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Menú"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } backdrop-blur-2xl border-b ${
          theme === 'light'
            ? 'bg-white/95 border-black/[0.08]'
            : 'bg-black/90 border-white/[0.06]'
        }`}
      >
        <nav className="flex flex-col px-6 py-5 gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-white/60 hover:text-white tracking-wide text-sm font-medium py-3 border-b border-white/[0.06] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/34614694322?text=Hola,%20quiero%20información%20sobre%20STAMINA%20Training%20Center"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm mt-4"
            onClick={() => setOpen(false)}
          >
            Reservar plaza
          </a>
        </nav>
      </div>
    </header>
  )
}
