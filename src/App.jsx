import { useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import ProblemSolution from './components/ProblemSolution'
import Method from './components/Method'
import Trainer from './components/Trainer'
import Plans from './components/Plans'
import Facilities from './components/Facilities'
import Location from './components/Location'
import SeniorTraining from './components/SeniorTraining'
import StaminaClub from './components/StaminaClub'
import ForWho from './components/ForWho'
import InitialAssessment from './components/InitialAssessment'
import CTA from './components/CTA'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

export default function App() {
  useEffect(() => {
    const path = window.location.pathname
    const scrollMap = {
      '/contacto': 'contacto',
      '/planes': 'planes',
      '/ubicacion': 'ubicacion',
    }
    const target = scrollMap[path]
    if (target) {
      window.history.replaceState(null, '', '/')
      setTimeout(() => {
        document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' })
      }, 300)
    }
  }, [])

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProblemSolution />
        <Method />
        <Trainer />
        <Plans />
        <Facilities />
        <ForWho />
        <InitialAssessment />
        <SeniorTraining />
        <StaminaClub />
        <Location />
        <CTA />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
