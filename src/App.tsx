import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import {
  Aceleradores,
  CartaPresentacion,
  Contenido,
  Cronograma,
  DiagnosticoOportunidad,
  Portada,
  Propuestas,
  SiguientesPasos,
  Terminos,
  ValorEstrategico,
} from './content';
import { Navigation } from './Navigation';

const sections = [
  { component: Portada, id: 'portada', label: 'Inicio' },
  { component: Contenido, id: 'contenido', label: 'Contenido' },
  { component: CartaPresentacion, id: 'carta-presentacion', label: 'Introducción' },
  { component: DiagnosticoOportunidad, id: 'diagnostico-oportunidad', label: 'Diagnóstico' },
  { component: ValorEstrategico, id: 'tridente', label: 'Estrategia' },
  { component: Propuestas, id: 'propuestas', label: 'Propuestas' },
  { component: Aceleradores, id: 'aceleradores', label: 'Aceleradores' },
  { component: Cronograma, id: 'cronograma', label: 'Cronograma' },
  { component: Terminos, id: 'terminos', label: 'Términos' },
  { component: SiguientesPasos, id: 'siguientes-pasos', label: 'Siguientes Pasos' },
];

interface SectionProps {
  children: React.ReactNode;
  id: string;
  onInView: (id: string) => void;
  key?: string | number;
}

function Section({
  children,
  id,
  onInView
}: SectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      onInView(id);
    }
  }, [isInView, id, onInView]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.95, 1, 1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.4, 1], ['100px', '0px', '-100px']);

  return (
    <motion.section
      id={id}
      ref={ref}
      style={{ opacity, scale, y }}
      className="min-h-screen w-full max-w-7xl mx-auto py-24 md:py-32 px-6 md:px-12 lg:px-24 flex items-center justify-center overflow-hidden"
    >
      {children}
    </motion.section>
  );
}

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export default function App() {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  // Load YouTube API and setup player
  useEffect(() => {
    // Load script if not already loaded
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    }

    window.onYouTubeIframeAPIReady = () => {
      new window.YT.Player('youtube-player', {
        videoId: 'eMBlkjCA298',
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          loop: 1,
          playlist: 'eMBlkjCA298',
          showinfo: 0,
          modestbranding: 1,
          rel: 0,
          disablekb: 1,
          iv_load_policy: 3,
          playsinline: 1
        },
        events: {
          onReady: (event: any) => {
            event.target.playVideo();
            event.target.setPlaybackRate(0.5); // Half speed
          },
          onStateChange: (event: any) => {
            // If the video loops or resets, ensure it stays at half speed
            if (event.data === window.YT.PlayerState.PLAYING) {
              event.target.setPlaybackRate(0.5);
            }
          }
        }
      });
    };

    // If YT is already ready (e.g. strict mode re-mount), initialize manually
    if (window.YT && window.YT.Player && !document.getElementById('youtube-player')?.hasChildNodes()) {
      window.onYouTubeIframeAPIReady();
    }
  }, []);

  // Dynamic visual effects for the background video based on scroll
  const videoBlur = useTransform(scrollYProgress, [0.8, 0.95], ['blur(12px)', 'blur(0px)']);
  const overlayOpacity = useTransform(scrollYProgress, [0.8, 0.95], [0.85, 0.2]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1.3, 1.1]);

  return (
    <main ref={containerRef} className="w-full relative bg-transparent">
      <div className="fixed inset-0 -z-30 bg-primary"></div>

      {/* Video Background Fixed */}
      <motion.div
        className="fixed inset-0 -z-20 pointer-events-none overflow-hidden"
        style={{ filter: videoBlur }}
      >
        <motion.div
          id="youtube-player"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ scale: videoScale, pointerEvents: 'none', width: '100vw', height: '100vh', transform: 'scale(1.5)' }} // extra scale to hide iframe borders just in case
        ></motion.div>
        {/* Transparent shield to absolutely block any interaction */}
        <div className="absolute inset-0 z-10 w-full h-full bg-transparent" style={{ pointerEvents: 'auto' }}></div>
      </motion.div>

      {/* Dynamic Dark Overlay */}
      <motion.div
        className="fixed inset-0 -z-15 bg-primary pointer-events-none"
        style={{ opacity: overlayOpacity }}
      ></motion.div>

      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(201,169,98,0.05),rgba(0,0,0,0)_50%)] pointer-events-none"></div>

      <Navigation
        sections={sections}
        currentSection={activeSection}
        scrollProgress={scrollYProgress}
      />

      {sections.map(({ component: Component, id }) => (
        <Section key={id} id={id} onInView={setActiveSection}>
          <Component />
        </Section>
      ))}
    </main>
  );
}
