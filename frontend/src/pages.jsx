import Navbar from './components/landingpage/Navbar';
import HeroSection from './components/landingpage/HeroSection';
import RoughDivider from './components/landingpage/RoughDivider';
import ScrollReveal from './components/landingpage/ScrollReveal';
import WhatIsThis from './components/landingpage/WhatIsThis';
import EventHighlights from './components/landingpage/EventHighlights';
import Features from './components/landingpage/Features';
import JoinTheFun from './components/landingpage/JoinTheFun';
    
function Home() {
  return (
    <div className="content lacquer-regular">
      <Navbar />
      <HeroSection />
      <RoughDivider />
      <ScrollReveal><WhatIsThis /></ScrollReveal>
      <RoughDivider />
      <ScrollReveal><EventHighlights /></ScrollReveal>
      <RoughDivider />
      <ScrollReveal><Features /></ScrollReveal>
      <RoughDivider />
      <ScrollReveal><JoinTheFun /></ScrollReveal>
    </div>
  );
}

export default Home;