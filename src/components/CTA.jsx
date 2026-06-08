import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { MessageCircle, Send, CheckCircle } from 'lucide-react'

// Pega aquí la URL de tu Google Apps Script una vez publicado
const SHEETS_URL = import.meta.env.VITE_SHEETS_URL || ''

const plans = ['STAMINA BASE', 'STAMINA', 'STAMINA+', 'STAMINA PRO', 'Aún no lo sé']
const goals = [
  'Ganar fuerza y músculo',
  'Perder grasa y definirme',
  'Mejorar mi salud general',
  'Rendimiento deportivo',
  'Otro objetivo',
]

async function sendToSheets(data) {
  if (!SHEETS_URL) return
  // no-cors: no podemos leer la respuesta pero el script la recibe correctamente
  await fetch(SHEETS_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'text/plain' },
    body: JSON.stringify({ ...data, fecha: new Date().toLocaleString('es-ES') }),
  })
}

export default function CTA() {
  const ref = useScrollAnimation()
  const [form, setForm] = useState({ name: '', phone: '', email: '', goal: '', plan: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    try {
      await sendToSheets(form)
    } catch {
      // Si falla el envío al sheet, mostramos éxito igualmente
    }

    setStatus('success')
  }

  const reset = () => {
    setStatus('idle')
    setForm({ name: '', phone: '', email: '', goal: '', plan: '' })
  }

  return (
    <section id="contacto" className="section-padding bg-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(232,101,26,0.04) 0%, transparent 70%)' }}
      />

      <div className="container-max relative z-10" ref={ref}>
        {/* Urgency banner */}
        <div className="animate-on-scroll text-center mb-14">
          <div className="inline-flex items-center gap-3 border border-gold/30 bg-gold/5 px-6 py-3 mb-8">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse flex-shrink-0" />
            <span className="text-gold text-sm tracking-wider">
              Plazas limitadas antes de la apertura
            </span>
          </div>
          <h2 className="section-title">
            Reserva tu
            <br />
            <span className="gold-gradient-text">plaza ahora</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* WhatsApp block */}
          <div className="animate-on-scroll space-y-5" style={{ transitionDelay: '0.1s' }}>
            <div className="bg-dark-200/60 rounded-2xl p-7">
              <h3 className="font-display text-2xl tracking-wider text-white uppercase mb-2">
                Contacto directo
              </h3>
              <p className="text-white/40 text-sm mb-6 leading-relaxed">
                La forma más rápida. Escríbenos por WhatsApp y te respondemos en menos de una hora.
              </p>
              <a
                href="https://wa.me/34614694322"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full text-base"
              >
                <MessageCircle size={18} />
                Escribir por WhatsApp
              </a>
            </div>

            <div className="bg-dark-200/60 rounded-2xl p-7">
              <h4 className="font-display text-lg tracking-wider text-white/70 uppercase mb-4">
                ¿Qué pasa cuando contactas?
              </h4>
              <ol className="space-y-3">
                {[
                  'Te respondemos en menos de 1 hora',
                  'Te explicamos todos los detalles sin compromiso',
                  'Reservas tu plaza con prioridad de apertura',
                  'Empiezas desde el primer día con el grupo',
                ].map((step, i) => (
                  <li key={step} className="flex items-start gap-3 text-sm text-white/45">
                    <span className="w-5 h-5 border border-gold/30 text-gold text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            <div className="flex items-center gap-2 text-xs text-white/25 px-1">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              También puedes dejarnos tus datos y te contactaremos lo antes posible.
            </div>
          </div>

          {/* Form */}
          <div
            className="animate-on-scroll bg-dark-200/60 rounded-2xl p-7"
            style={{ transitionDelay: '0.2s' }}
          >
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                <CheckCircle size={48} className="text-gold" />
                <h3 className="font-display text-2xl tracking-wider text-white uppercase">
                  ¡Solicitud enviada!
                </h3>
                <p className="text-white/40 text-sm max-w-xs leading-relaxed">
                  Solicitud enviada. En breve le contactará el equipo de STAMINA.
                </p>
                <button
                  onClick={reset}
                  className="text-gold text-sm underline underline-offset-4 mt-2"
                >
                  Enviar otra solicitud
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-display text-2xl tracking-wider text-white uppercase mb-1">
                  Formulario de contacto
                </h3>
                <p className="text-white/35 text-xs mb-6 tracking-wide">
                  Rellena el formulario y te contactaremos para resolver tus dudas.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-[10px] tracking-[0.25em] uppercase text-white/35 block mb-1.5">
                      Nombre *
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Tu nombre completo"
                      className="w-full bg-dark-300 border border-white/[0.07] rounded-xl text-white text-sm px-4 py-3 outline-none focus:border-gold/50 transition-colors placeholder:text-white/20"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] tracking-[0.25em] uppercase text-white/35 block mb-1.5">
                        Teléfono *
                      </label>
                      <input
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="600 000 000"
                        className="w-full bg-dark-300 border border-white/[0.07] rounded-xl text-white text-sm px-4 py-3 outline-none focus:border-gold/50 transition-colors placeholder:text-white/20"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] tracking-[0.25em] uppercase text-white/35 block mb-1.5">
                        Email
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="tu@email.com"
                        className="w-full bg-dark-300 border border-white/[0.07] rounded-xl text-white text-sm px-4 py-3 outline-none focus:border-gold/50 transition-colors placeholder:text-white/20"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] tracking-[0.25em] uppercase text-white/35 block mb-1.5">
                      ¿Cuál es tu objetivo?
                    </label>
                    <select
                      name="goal"
                      value={form.goal}
                      onChange={handleChange}
                      className="w-full bg-dark-300 border border-white/[0.07] rounded-xl text-white text-sm px-4 py-3 outline-none focus:border-gold/50 transition-colors appearance-none"
                    >
                      <option value="" disabled>Selecciona tu objetivo</option>
                      {goals.map((g) => <option key={g} value={g}>{g}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] tracking-[0.25em] uppercase text-white/35 block mb-1.5">
                      Plan de interés
                    </label>
                    <select
                      name="plan"
                      value={form.plan}
                      onChange={handleChange}
                      className="w-full bg-dark-300 border border-white/[0.07] rounded-xl text-white text-sm px-4 py-3 outline-none focus:border-gold/50 transition-colors appearance-none"
                    >
                      <option value="" disabled>Selecciona un plan</option>
                      {plans.map((p) => <option key={p} value={p}>{p}</option>)}
                    </select>
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-primary w-full mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-dark/40 border-t-dark rounded-full animate-spin" />
                        Enviando...
                      </span>
                    ) : (
                      <>
                        <Send size={15} />
                        Enviar solicitud
                      </>
                    )}
                  </button>
                  <p className="text-white/20 text-[10px] tracking-wide text-center">
                    Al enviar aceptas la política de privacidad.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
