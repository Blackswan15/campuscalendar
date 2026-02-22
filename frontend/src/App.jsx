import './App.css'
import Navbar from './components/landingpage/Navbar'
import HeroSection from './components/landingpage/HeroSection'
import WhatIsThis from './components/landingpage/WhatIsThis'
import EventHighlights from './components/landingpage/EventHighlights'
import Features from './components/landingpage/Features'
import JoinTheFun from './components/landingpage/JoinTheFun'
import RoughDivider from './components/landingpage/RoughDivider'
import ScrollReveal from './components/landingpage/ScrollReveal'

function App() {
  return (
    <div className="App">
      <div className="content lacquer-regular">
        <Navbar />

        <HeroSection />

        <RoughDivider />

        <ScrollReveal>
          <WhatIsThis />
        </ScrollReveal>

        <RoughDivider />

        <ScrollReveal>
          <EventHighlights />
        </ScrollReveal>

        <RoughDivider />

        <ScrollReveal>
          <Features />
        </ScrollReveal>

        <RoughDivider />

        <ScrollReveal>
          <JoinTheFun />
        </ScrollReveal>

      </div>
    </div>
  )
}

export default App;
