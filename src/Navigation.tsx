import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

interface NavigationProps {
  sections: { id: string; label: string }[];
  currentSection: string;
  scrollProgress: any;
}

export const Navigation = ({ sections, currentSection, scrollProgress }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Top Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-secondary origin-left z-50"
        style={{ scaleX: scrollProgress }}
      />

      {/* Desktop Sidebar Milestones removed */}

      {/* Mobile Hamburger */}
      <div className="fixed top-6 right-6 lg:hidden z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-white"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-[#050505] z-40 flex flex-col p-8 md:p-12 pt-24 overflow-y-auto"
          >
            <div className="space-y-8 pb-12">
              {sections.map((section, i) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="block text-left group"
                >
                  <span className="text-xs font-mono text-white/20 block mb-1">0{i + 1}</span>
                  <span
                    className={`text-3xl font-light tracking-tight transition-colors ${
                      currentSection === section.id ? 'text-secondary' : 'text-white/80'
                    }`}
                  >
                    {section.label}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
