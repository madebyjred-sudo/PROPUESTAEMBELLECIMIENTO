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

export default function App() {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  return (
    <main ref={containerRef} className="w-full relative bg-primary">
      <div className="fixed inset-0 -z-20 bg-primary"></div>

      {/* Video Background for Hero */}
      <div className="absolute top-0 left-0 w-full h-screen -z-15 pointer-events-none overflow-hidden">
        <iframe
          src="https://www.youtube.com/embed/H0L_6o-Wz0s?autoplay=1&mute=1&controls=0&loop=1&playlist=H0L_6o-Wz0s&showinfo=0&modestbranding=1&rel=0"
          className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale"
          style={{ transform: 'scale(1.5)', pointerEvents: 'none' }}
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
        {/* Gradients to blend the video into the background */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-transparent to-primary"></div>
      </div>

      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(201,169,98,0.05),rgba(0,0,0,0)_50%)]"></div>

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
