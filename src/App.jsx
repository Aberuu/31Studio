import { useEffect } from 'react';
import Home from './pages/Home';
import Cursor from './components/ui/Cursor';
import ScrollProgress from './components/ui/ScrollProgress';
import { useCursor } from './hooks/useCursor';
import { useReveal } from './hooks/useReveal';
import { useScrollProgress } from './hooks/useScrollProgress';
import { initSmoothScroll } from './utils/smoothScroll';
import './css/global.css';

function App() {
  useCursor();
  useReveal();
  useScrollProgress();

  useEffect(() => {
    const lenis = initSmoothScroll();
    
    // Marquee pause on hover
    const tracks = document.querySelectorAll('.marquee-track, .awards-track');
    tracks.forEach(track => {
      track.addEventListener('mouseenter', () => track.style.animationPlayState = 'paused');
      track.addEventListener('mouseleave', () => track.style.animationPlayState = 'running');
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <ScrollProgress />
      <Cursor />
      <Home />
    </>
  );
}

export default App;
