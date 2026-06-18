import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import ImageStrip from '../components/sections/ImageStrip';
import Marquee from '../components/sections/Marquee';
import Services from '../components/sections/Services';
import Projects from '../components/sections/Projects';
import Clients from '../components/sections/Clients';
import Awards from '../components/sections/Awards';
import Stats from '../components/sections/Stats';
import About from '../components/sections/About';
import Contact from '../components/sections/Contact';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ImageStrip />
        <Marquee />
        <Services />
        <Projects />
        <Clients />
        <Awards />
        <Stats />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
