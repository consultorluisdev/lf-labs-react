import Header from './components/Header'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Features from './components/Features'
import SocialProof from './components/SocialProof'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'


function App(){
  return(
    <div className="min-h-screen bg-bg">
    <Header />
    <main>
      <Hero />
      <Benefits />
      <Features/>
      <SocialProof />
      <FinalCta />
    </main>
    <Footer />
    </div>
  )
}

export default App
