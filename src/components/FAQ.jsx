import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: '¿Es STAMINA para principiantes?',
    a: 'Sí, totalmente. El plan STAMINA BASE está diseñado específicamente para personas que empiezan desde cero o que llevan tiempo sin entrenar. Trabajamos la técnica desde el principio, con cargas adaptadas a tu nivel actual. No se requiere experiencia previa.',
  },
  {
    q: '¿Cuántas personas hay por grupo?',
    a: 'Máximo 5 personas por sesión. Este límite es estricto y no varía. Es la clave de nuestro modelo: con grupos tan reducidos podemos ofrecer una atención casi personalizada y garantizar que cada persona recibe la supervisión que necesita.',
  },
  {
    q: '¿Puedo entrenar si tengo poca experiencia o alguna lesión?',
    a: 'Sí. Antes de empezar realizamos una valoración inicial donde te preguntamos sobre tu historial físico, lesiones previas y objetivos. A partir de ahí, adaptamos los ejercicios y cargas a tu situación específica. No hay dos personas que entrenen exactamente igual.',
  },
  {
    q: '¿Dónde está el centro?',
    a: 'STAMINA Centro de Entrenamiento está en la Rambla de Santa Cruz, 34 — Santa Cruz de Tenerife. Acceso fácil y aparcamiento cercano.',
  },
  {
    q: '¿Cuándo abre STAMINA?',
    a: 'STAMINA abre el 19 de junio de 2026. Las personas que reserven plaza antes de esa fecha tendrán prioridad en la elección de horario y condiciones especiales de pretemporada. ¡Plazas limitadas!',
  },
  {
    q: '¿Cómo reservo mi plaza?',
    a: 'Es muy sencillo. Puedes escribirnos directamente por WhatsApp pulsando cualquier botón de "Reservar plaza" en esta página, o rellenar el formulario de contacto y te llamamos nosotros. Las plazas son limitadas por grupo, así que cuanto antes te apuntes, mejor horario podrás elegir.',
  },
  {
    q: '¿Hay permanencia o compromiso de tiempo?',
    a: 'No hay permanencia obligatoria. Queremos que te quedes porque ves resultados y disfrutas entrenando, no porque un contrato te obligue. Puedes cambiar de plan o cancelar con un preaviso razonable.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)
  const ref = useScrollAnimation()

  return (
    <section id="faq" className="section-padding bg-dark-100 relative overflow-hidden">
      <div className="container-max" ref={ref}>
        {/* Header */}
        <div className="text-center mb-14 animate-on-scroll">
          <span className="section-tag">Preguntas frecuentes</span>
          <div className="gold-divider" />
          <h2 className="section-title">
            Resuelve tus <span className="gold-gradient-text">dudas</span>
          </h2>
        </div>

        {/* FAQ list — outer div carries animate-on-scroll, inner div carries conditional styles */}
        <div className="max-w-3xl mx-auto space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={faq.q}
              className="animate-on-scroll"
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <div
                className={`border transition-colors duration-300 ${
                  open === i
                    ? 'border-gold/40 bg-dark-200'
                    : 'border-dark-400 bg-dark-200 hover:border-dark-500'
                }`}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  <span
                    className={`font-medium text-sm sm:text-base leading-snug transition-colors duration-200 ${
                      open === i ? 'text-gold' : 'text-white/70'
                    }`}
                  >
                    {faq.q}
                  </span>
                  <span className="flex-shrink-0 text-gold">
                    {open === i ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>
                <div
                  style={{
                    maxHeight: open === i ? '400px' : '0px',
                    opacity: open === i ? 1 : 0,
                    overflow: 'hidden',
                    transition: 'max-height 0.4s ease, opacity 0.3s ease',
                  }}
                >
                  <p className="px-6 pb-5 text-white/55 text-sm leading-relaxed font-light">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="animate-on-scroll text-center mt-12"
          style={{ transitionDelay: '0.45s' }}
        >
          <p className="text-white/45 text-sm mb-4">
            ¿Tienes alguna pregunta que no aparece aquí?
          </p>
          <a
            href="https://wa.me/34614694322?text=Hola,%20tengo%20una%20pregunta%20sobre%20STAMINA"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-sm"
          >
            Pregúntanos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
