import { ReactNode, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    }
  }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const popIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

// --- Components ---

export const Portada = () => (
  <div className="flex flex-col justify-center min-h-[80vh] space-y-16 md:space-y-24 w-full max-w-5xl relative z-10">
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="space-y-6 md:space-y-8"
    >
      <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter text-white uppercase leading-none">
        PROPUESTA<br />
        <span className="text-white/40 bg-clip-text text-transparent bg-gradient-to-r from-white/80 to-white/20">COMERCIAL</span>
      </motion.h1>
      <motion.h2 variants={fadeInUp} className="text-xs md:text-sm font-medium tracking-[0.3em] text-secondary uppercase">
        ECOSISTEMA DIGITAL INTEGRAL · EMBELLECIMIENTO AUTOMOTRIZ · 2026
      </motion.h2>
    </motion.div>

    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pt-16 md:pt-24 border-t border-white/10 relative overflow-hidden"
    >
      <motion.div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-secondary/50 to-transparent opacity-50" />
      {[
        { label: "Preparada exclusivamente para", value: "Alpha Cars" },
        { label: "Ubicación", value: "Bogotá, D.C." },
        { label: "Fecha de emisión", value: new Date().toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' }) },
        { label: "Validez", value: "15 días" },
      ].map((item, i) => (
        <motion.div key={i} variants={fadeInUp} className="space-y-3 group">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/40 font-bold group-hover:text-secondary transition-colors duration-500">{item.label}</p>
          <p className="text-sm md:text-base text-white/80 font-light leading-relaxed group-hover:text-white transition-colors duration-500">{item.value}</p>
        </motion.div>
      ))}
    </motion.div>
  </div>
);

export const Contenido = () => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={staggerContainer}
    className="space-y-12 md:space-y-16 w-full max-w-3xl"
  >
    <motion.h2 variants={fadeInUp} className="text-[10px] md:text-xs font-bold text-white/40 uppercase tracking-[0.2em] flex items-center gap-4">
      <span className="w-8 h-[1px] bg-secondary/50 inline-block"></span> Contenido
    </motion.h2>
    <ul className="space-y-6 md:space-y-8 text-2xl md:text-4xl text-white/80 font-light tracking-tight">
      {[
        "Carta de Presentación",
        "Diagnóstico y Oportunidad",
        "El Tridente Especializado",
        "Propuestas de Ecosistema Digital",
        "Aceleradores de Conversión",
        "Cronograma General",
        "Términos y Condiciones",
        "Siguientes Pasos"
      ].map((item, i) => (
        <motion.li
          key={i}
          variants={fadeInLeft}
          whileHover={{ x: 10 }}
          className="flex items-center gap-6 md:gap-8 group cursor-default transition-all duration-300"
        >
          <span className="text-sm md:text-base font-mono text-white/20 group-hover:text-secondary transition-colors duration-300">
            {String(i + 1).padStart(2, '0')}
          </span>
          <span className="group-hover:text-white transition-colors duration-300 relative">
            {item}
            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-secondary transition-all duration-500 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
          </span>
        </motion.li>
      ))}
    </ul>
  </motion.div>
);

export const CartaPresentacion = () => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={staggerContainer}
    className="space-y-12 md:space-y-16 max-w-3xl w-full"
  >
    <motion.h2 variants={fadeInUp} className="text-[10px] md:text-xs font-bold text-white/40 uppercase tracking-[0.2em] flex items-center gap-4">
      <span className="w-8 h-[1px] bg-secondary/50 inline-block"></span> Introducción
    </motion.h2>

    <motion.h3 variants={fadeInUp} className="text-4xl md:text-5xl font-light tracking-tight text-white leading-tight">
      Su máquina de captación para clientes premium.
    </motion.h3>

    <div className="space-y-8 md:space-y-10 text-lg md:text-xl text-white/70 font-light leading-relaxed">
      <motion.p variants={fadeInUp}>
        El mercado de vehículos de alta gama en Bogotá funciona con clientes que investigan antes de tomar una decisión. Los dueños de Porsche, BMW, Mercedes y camionetas premium suelen pasar varias semanas buscando opciones online antes de elegir dónde realizar servicios como PPF, wrapping o corrección de pintura.
      </motion.p>

      <motion.p variants={fadeInUp}>
        Esta propuesta no se enfoca en hacer publicaciones estéticas, sino en construir un sistema digital que permita atraer a esos clientes y dirigirlos hacia Alpha Cars.
      </motion.p>

      <motion.p variants={fadeInUp}>
        Alpha Cars tiene la capacidad técnica para atender vehículos de alto valor. Nuestra función es desarrollar la estrategia digital para captar a ese tipo de cliente y convertir su interés en visitas y servicios.
      </motion.p>

      <motion.div
        variants={popIn}
        whileHover={{ scale: 1.02 }}
        className="glass-panel p-8 md:p-12 my-12 md:my-16 border-l-2 border-l-secondary relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 to-transparent pointer-events-none" />
        <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-secondary font-bold mb-4 md:mb-6 relative z-10">El objetivo es claro</p>
        <p className="text-2xl md:text-3xl font-light tracking-tight text-white/90 leading-snug relative z-10">
          Posicionar a Alpha Cars como el laboratorio de pintura más técnico y confiable del mercado, captando clientes que ya tienen el presupuesto.
        </p>
      </motion.div>
    </div>
  </motion.div>
);

export const DiagnosticoOportunidad = () => (
  <div className="space-y-20 md:space-y-32 w-full max-w-4xl">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="space-y-4 md:space-y-6"
    >
      <motion.h2 variants={fadeInUp} className="text-[10px] md:text-xs font-bold text-white/40 uppercase tracking-[0.2em] flex items-center gap-4">
        <span className="w-8 h-[1px] bg-secondary/50 inline-block"></span> Diagnóstico y Oportunidad
      </motion.h2>
      <motion.h3 variants={fadeInUp} className="text-4xl md:text-5xl font-light tracking-tight text-white leading-tight">Situación actual</motion.h3>
    </motion.div>

    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="space-y-8 md:space-y-12"
    >
      <div className="overflow-x-auto rounded-3xl border border-white/10 bg-white/[0.02] shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-md">
        <table className="w-full text-left border-collapse min-w-[600px]">
          <thead>
            <tr className="border-b border-white/10 text-white/40 text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold bg-white/[0.01]">
              <th className="py-6 px-6 md:px-8">Dimensión</th>
              <th className="py-6 px-6 md:px-8">Estado</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-sm md:text-base font-light">
            {[
              { dim: "Especialización técnica", estado: "Expertos en PPF/Wrapping/Detailing de alta gama", alert: false },
              { dim: "Portafolio de servicios", estado: "3-5 líneas premium (protección, color, restauración)", alert: false },
              { dim: "Clientela actual", estado: "Referidos y tráfico orgánico local", alert: false },
              { dim: "Presencia digital unificada", estado: "Fragmentada o en construcción", alert: true },
              { dim: "Sistema de captación online", estado: "Sin automatización ni funnel definido", alert: true },
              { dim: "Posicionamiento Google Maps", estado: "Por optimizar para 'detailing premium Bogotá'", alert: true },
              { dim: "Contenido técnico-visual", estado: "Escaso o amateur (fotos con celular)", alert: true }
            ].map((row, i) => (
              <motion.tr
                key={i}
                whileHover={{ backgroundColor: "rgba(255,255,255,0.06)", x: 4 }}
                transition={{ duration: 0.2 }}
                className="transition-colors group"
              >
                <td className="py-5 px-6 md:px-8 text-white/90 group-hover:text-white transition-colors">{row.dim}</td>
                <td className={`py-5 px-6 md:px-8 transition-colors ${row.alert ? "text-white/40 group-hover:text-white/60" : "text-white/70 group-hover:text-white/90"}`}>
                  {row.estado}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>

    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="space-y-8 md:space-y-12 max-w-3xl pt-8 md:pt-12 border-t border-white/10 relative"
    >
      <div className="absolute top-0 left-0 w-32 h-[1px] bg-gradient-to-r from-secondary to-transparent" />
      <motion.h3 variants={fadeInUp} className="text-3xl md:text-4xl font-light tracking-tight text-white">La oportunidad</motion.h3>
      <div className="space-y-6 md:space-y-8 text-lg md:text-xl text-white/70 font-light leading-relaxed">
        <motion.p variants={fadeInUp}>El cliente promedio de PPF invierte entre $3.000.000 y $8.000.000 COP por vehículo. No busca el más barato, busca el que genere más confianza técnica.</motion.p>
        <motion.p variants={fadeInUp} className="text-white/90 font-medium">Hoy, el 78% de estos clientes descarta un taller antes de escribirle, solo por su Instagram. El 85% investiga 'wrapping Bogotá' o 'PPF cerca de mí' y decide en las primeras 3 opciones que aparezcan.</motion.p>
        <motion.ul variants={staggerContainer} className="space-y-4 md:space-y-6 pt-4 md:pt-6">
          {[
            "Posicionar a Alpha Cars como el laboratorio de pintura más técnico y confiable del mercado",
            "Captar clientes que ya tienen el presupuesto, solo necesitan ver que ustedes son los profesionales",
            "Dominar las búsquedas locales para servicios de alto ticket",
            "Construir una vitrina digital que refleje la calidad real de su trabajo",
            "Automatizar la recepción de leads calificados 24/7"
          ].map((item, i) => (
            <motion.li key={i} variants={fadeInLeft} className="flex items-start gap-4 md:gap-6 group">
              <span className="text-secondary font-mono text-sm md:text-base mt-1 bg-secondary/10 w-8 h-8 rounded-full flex items-center justify-center shrink-0 group-hover:bg-secondary group-hover:text-primary transition-all duration-300">0{i + 1}</span>
              <span className="text-base md:text-lg group-hover:text-white transition-colors duration-300">{item}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.div>
  </div>
);

export const ValorEstrategico = () => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={staggerContainer}
    className="space-y-16 md:space-y-24 max-w-5xl w-full"
  >
    <div className="space-y-6 md:space-y-8 max-w-3xl">
      <motion.h2 variants={fadeInUp} className="text-[10px] md:text-xs font-bold text-white/40 uppercase tracking-[0.2em] flex items-center gap-4">
        <span className="w-8 h-[1px] bg-secondary/50 inline-block"></span> El Tridente Especializado
      </motion.h2>
      <motion.h3 variants={fadeInUp} className="text-4xl md:text-5xl font-light tracking-tight text-white leading-tight">Tres maestrías, un objetivo común</motion.h3>
      <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-white/60 font-light">El valor de tener especialistas dedicados vs. un generalista</motion.p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
      {[
        {
          title: "Estratega de Performance",
          subtitle: "Inversión publicitaria",
          icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
          items: [
            "Enfocado exclusivamente en métricas de negocio: costo por lead, tasa de conversión, ROI.",
            "Gestiona cada peso invertido en Meta/Google como si fuera suyo.",
            "Conoce la diferencia entre un lead de 'wrapping' vs 'lavado básico'."
          ]
        },
        {
          title: "Diseñador Gráfico",
          subtitle: "Diseño gráfico digital y edición de video",
          icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
          items: [
            "No solo 'hace diseños', construye activos de venta persuasivos.",
            "Diseñador gráfico digital enfocado en construir piezas visuales de alto impacto.",
            "Especialista en edición de video de alta retención para redes sociales y pauta publicitaria."
          ]
        },
        {
          title: "Guardián de Comunidad",
          subtitle: "Relaciones comerciales",
          icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>,
          items: [
            "Convierte seguidores pasivos en agendamientos reales en el taller.",
            "Gestiona la reputación: cada comentario es una oportunidad de venta.",
            "Construye confianza técnica antes de que el cliente llegue al taller."
          ]
        }
      ].map((col, i) => (
        <motion.div
          key={i}
          variants={popIn}
          whileHover={{ y: -10, scale: 1.02 }}
          className="glass-panel p-8 space-y-8 flex flex-col h-full border-t-2 border-t-white/10 hover:border-t-secondary transition-all duration-300 group shadow-lg hover:shadow-secondary/10"
        >
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mb-6 group-hover:scale-110 group-hover:bg-secondary group-hover:text-primary transition-all duration-300">
              {col.icon}
            </div>
            <h4 className="text-2xl font-light text-white">{col.title}</h4>
            <p className="text-[10px] uppercase tracking-[0.2em] text-secondary font-bold">{col.subtitle}</p>
          </div>
          <ul className="space-y-4 flex-grow">
            {col.items.map((item, j) => (
              <li key={j} className="text-sm text-white/60 font-light leading-relaxed flex items-start gap-3 group-hover:text-white/80 transition-colors duration-300">
                <span className="w-1 h-1 rounded-full bg-secondary mt-2 shrink-0 group-hover:shadow-[0_0_8px_rgba(201,169,98,0.8)] transition-all duration-300"></span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>

    <motion.div variants={fadeInUp} className="glass-panel p-8 md:p-12 border-l-2 border-l-secondary relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed relative z-10">
        "La sinergia de estas tres mentes trabajando sincronizadas crea un ecosistema donde la publicidad atrae al cliente correcto, el diseño lo convence visualmente, y la comunidad lo retiene y refiere."
      </p>
    </motion.div>
  </motion.div>
);

export const Propuestas = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="space-y-20 md:space-y-32 w-full max-w-7xl"
    >
      <div className="space-y-6 md:space-y-8 max-w-3xl">
        <motion.h2 variants={fadeInUp} className="text-[10px] md:text-xs font-bold text-white/40 uppercase tracking-[0.2em] flex items-center gap-4">
          <span className="w-8 h-[1px] bg-secondary/50 inline-block"></span> Propuestas de Ecosistema Digital
        </motion.h2>
        <motion.p variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl text-white font-light leading-tight tracking-tight">
          Tres niveles de integración para Alpha Cars
        </motion.p>
      </div>

      <motion.div variants={fadeInUp} className="glass-panel p-8 md:p-10 border-l-2 border-l-secondary relative overflow-hidden group mb-12">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-transparent opacity-100" />
        <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center justify-between">
          <div className="space-y-3 flex-grow">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-secondary font-bold">Fase 1: Implementación</p>
            <h3 className="text-2xl md:text-3xl font-light tracking-tight text-white mb-2">Setup Inicial Estratégico</h3>
            <p className="text-white/70 font-light text-sm md:text-base leading-relaxed max-w-2xl">
              Estudio de Mercado, Estrategia Publicitaria a 3 meses, Auditoría de Competencia y Configuración Técnica Completa de los ecosistemas operativos (Meta/Google).
            </p>
          </div>
          <div className="shrink-0 text-left md:text-right">
            <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1 flex items-center md:justify-end gap-2"><span className="w-2 h-2 rounded-full bg-secondary inline-block animate-pulse"></span> INVERSIÓN ÚNICA (MES 1)</p>
            <p className="text-3xl md:text-4xl font-light text-secondary mb-1">$1.000.000 <span className="text-base text-white/50">COP</span></p>
          </div>
        </div>
      </motion.div>

      <div className="space-y-4 mb-12">
        <motion.h3 variants={fadeInUp} className="text-xl md:text-2xl text-white font-light tracking-tight flex items-center gap-4 pt-8 border-t border-white/10">
          Fase 2: Mensualidades Operativas (Seleccionar un plan)
        </motion.h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {/* PLAN BÁSICO */}
        <motion.div
          variants={popIn}
          whileHover={{ y: -10, scale: 1.02 }}
          className="glass-panel p-8 space-y-10 border-t-2 border-t-white/10 flex flex-col group hover:bg-white/[0.04] hover:shadow-2xl hover:shadow-white/5 transition-all duration-300"
        >
          <div className="space-y-4">
            <h3 className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/40 font-bold group-hover:text-white/60 transition-colors">OPCIÓN A · PLAN BÁSICO</h3>
            <h4 className="text-3xl font-light tracking-tight text-white group-hover:text-secondary transition-colors">Validación Inteligente</h4>
            <div className="space-y-1">
              <p className="text-2xl font-light text-white/90 group-hover:text-white transition-colors">$1.800.000 <span className="text-sm text-white/40">COP/mes</span></p>
              <p className="text-[10px] text-white/40 uppercase tracking-widest">+ Inversión pauta (Monto según estrategia)</p>
            </div>
          </div>

          <div className="space-y-6 flex-grow">
            <div className="space-y-4">
              <h5 className="text-[10px] uppercase tracking-[0.2em] text-secondary font-bold">Incluye:</h5>
              <ul className="space-y-4 text-sm text-white/60 font-light">
                <li className="flex items-start gap-3"><span className="text-secondary">✓</span> 16 piezas de diseño/mes</li>
                <li className="flex items-start gap-3"><span className="text-secondary">✓</span> Gestión de redes sociales (plataformas según estrategia)</li>
                <li className="flex items-start gap-3"><span className="text-secondary">✓</span> Gestión de campañas (según estrategia)</li>
                <li className="flex items-start gap-3"><span className="text-secondary">✓</span> Reporte mensual de resultados</li>
              </ul>
            </div>

            <div className="pt-6 border-t border-white/5 space-y-3">
              <h5 className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">Add-on Disponible:</h5>
              <div className="flex justify-between items-center bg-white/[0.03] p-3 rounded-lg border border-white/5 group-hover:border-white/10 transition-colors">
                <span className="text-xs text-white/80">Landing Page (Web)</span>
                <span className="text-xs font-mono text-secondary group-hover:text-white transition-colors">$699.000</span>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-white/5 mt-auto">
            <p className="text-xs text-white/40 font-light italic">Ideal para: Talleres iniciando su inversión digital.</p>
          </div>
        </motion.div>

        {/* PLAN INTERMEDIO */}
        <motion.div
          variants={popIn}
          whileHover={{ scale: 1.05 }}
          className="glass-panel p-8 space-y-10 border-t-2 border-t-secondary bg-secondary/[0.03] relative overflow-hidden flex flex-col scale-105 z-10 shadow-[0_0_50px_rgba(201,169,98,0.15)] group hover:bg-secondary/[0.06] hover:shadow-[0_0_80px_rgba(201,169,98,0.25)] transition-all duration-300"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <motion.div
            animate={{ boxShadow: ["0px 0px 0px rgba(201,169,98,0)", "0px 0px 15px rgba(201,169,98,0.5)", "0px 0px 0px rgba(201,169,98,0)"] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute top-4 right-4 bg-secondary text-primary text-[8px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg"
          >
            MÁS POPULAR
          </motion.div>

          <div className="space-y-4 relative z-10">
            <h3 className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-secondary font-bold">OPCIÓN B · PLAN INTERMEDIO</h3>
            <h4 className="text-3xl font-light tracking-tight text-white group-hover:text-secondary transition-colors">Funnel de Crecimiento</h4>
            <div className="space-y-1">
              <p className="text-2xl font-light text-secondary group-hover:text-white transition-colors">$3.200.000 <span className="text-sm text-white/40">COP/mes</span></p>
              <p className="text-[10px] text-white/40 uppercase tracking-widest">+ Inversión pauta (Monto según estrategia)</p>
            </div>
          </div>

          <div className="space-y-6 flex-grow relative z-10">
            <div className="space-y-4">
              <h5 className="text-[10px] uppercase tracking-[0.2em] text-secondary font-bold">Incluye todo lo anterior más:</h5>
              <ul className="space-y-4 text-sm text-white/60 font-light group-hover:text-white/80 transition-colors duration-300">
                <li className="flex items-start gap-3"><span className="text-secondary drop-shadow-[0_0_8px_rgba(201,169,98,0.5)]">✓</span> 30 piezas de diseño/mes</li>
                <li className="flex items-start gap-3"><span className="text-secondary drop-shadow-[0_0_8px_rgba(201,169,98,0.5)]">✓</span> Gestión de redes sociales (plataformas según estrategia)</li>
                <li className="flex items-start gap-3"><span className="text-secondary drop-shadow-[0_0_8px_rgba(201,169,98,0.5)]">✓</span> Community Management completo</li>
                <li className="flex items-start gap-3"><span className="text-secondary drop-shadow-[0_0_8px_rgba(201,169,98,0.5)]">✓</span> Gestión de campañas (según estrategia) + Remarketing</li>
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-secondary/20 mt-auto relative z-10">
            <p className="text-xs text-white/50 font-light italic">Ideal para: Talleres con flujo estable que buscan escalar.</p>
          </div>
        </motion.div>

        {/* PLAN AVANZADO */}
        <motion.div
          variants={popIn}
          whileHover={{ y: -10, scale: 1.02 }}
          className="glass-panel p-8 space-y-10 border-t-2 border-t-white/10 flex flex-col group hover:bg-white/[0.04] hover:shadow-2xl hover:shadow-white/5 transition-all duration-300"
        >
          <div className="space-y-4">
            <h3 className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/40 font-bold group-hover:text-white/60 transition-colors">OPCIÓN C · PLAN AVANZADO</h3>
            <h4 className="text-3xl font-light tracking-tight text-white group-hover:text-secondary transition-colors">Ecosistema Premium</h4>
            <div className="space-y-1">
              <p className="text-2xl font-light text-white/90 group-hover:text-white transition-colors">$4.800.000 <span className="text-sm text-white/40">COP/mes</span></p>
              <p className="text-[10px] text-white/40 uppercase tracking-widest">+ Inversión pauta (Monto según estrategia)</p>
            </div>
          </div>

          <div className="space-y-6 flex-grow">
            <div className="space-y-4">
              <h5 className="text-[10px] uppercase tracking-[0.2em] text-secondary font-bold">Incluye todo lo anterior más:</h5>
              <ul className="space-y-4 text-sm text-white/60 font-light">
                <li className="flex items-start gap-3"><span className="text-secondary">✓</span> 44 piezas de diseño/mes</li>
                <li className="flex items-start gap-3"><span className="text-secondary">✓</span> Gestión multicanal (plataformas según estrategia)</li>
                <li className="flex items-start gap-3"><span className="text-secondary">✓</span> Crisis management y reputación</li>
                <li className="flex items-start gap-3"><span className="text-secondary">✓</span> Ecosistema de pauta completo</li>
                <li className="flex items-start gap-3 font-medium text-white/90 bg-white/5 px-2 py-1 rounded"><span className="text-secondary">✓</span> Landing Page (Web) INCLUIDA</li>
                <li className="flex items-start gap-3 font-medium text-white/90 bg-white/5 px-2 py-1 rounded mt-1"><span className="text-secondary">✓</span> Chatbot IA INCLUIDO</li>
                <li className="flex items-start gap-3 mt-2"><span className="text-secondary">✓</span> Consultoría estratégica semanal</li>
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-white/5 mt-auto">
            <p className="text-xs text-white/40 font-light italic">Ideal para: Talleres líderes que buscan dominar el mercado.</p>
          </div>
        </motion.div>
      </div>

      {/* Comparativa */}
      <motion.div variants={fadeInUp} className="space-y-8 md:space-y-12 pt-16 md:pt-24 border-t border-white/10 relative">
        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-64 h-32 bg-secondary/10 blur-[80px] pointer-events-none rounded-full"></div>
        <h3 className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/40 font-bold text-center">Tabla Comparativa Final</h3>
        <div className="overflow-x-auto rounded-3xl border border-white/10 bg-white/[0.02] shadow-2xl backdrop-blur-xl relative z-10">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b border-white/10 text-white/40 text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold bg-white/[0.02]">
                <th className="py-6 px-6 md:px-8">Característica</th>
                <th className="py-6 px-6 md:px-8 text-center">Plan Básico</th>
                <th className="py-6 px-6 md:px-8 text-center text-secondary border-b-2 border-secondary/50">Plan Intermedio</th>
                <th className="py-6 px-6 md:px-8 text-center">Plan Avanzado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-white/80 font-light text-sm md:text-base">
              {[
                { name: "Fee Mensual", b: "$1.800.000", i: "$3.200.000", a: "$4.800.000" },
                { name: "Piezas de diseño/mes", b: "16", i: "30", a: "44" },
                { name: "Redes gestionadas", b: "Según estrategia", i: "Según estrategia", a: "Según estrategia" },
                { name: "Community Management", b: "Básico", i: "Completo", a: "Avanzado" },
                { name: "Gestión de Campañas", b: "Según estrategia", i: "Según estrategia", a: "Ecosistema completo" },
                { name: "Inversión pauta sugerida", b: "A definir", i: "A definir", a: "A definir" },
                { name: "Landing Page (Web)", b: "Addon $699k", i: "Opcional", a: "Incluida" },
                { name: "Chatbot IA", b: "—", i: "Opcional", a: "Incluido" },
                { name: "Reportes", b: "Mensual de resultados", i: "Quincenal de resultados", a: "Semanal de resultados" },
              ].map((row, index) => (
                <motion.tr
                  key={index}
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.06)", scale: 1.005 }}
                  className="transition-colors cursor-default"
                >
                  <td className="py-5 px-6 md:px-8">{row.name}</td>
                  <td className="py-5 px-6 md:px-8 text-center text-white/60">{row.b}</td>
                  <td className="py-5 px-6 md:px-8 text-center text-secondary font-medium bg-secondary/[0.02]">{row.i}</td>
                  <td className="py-5 px-6 md:px-8 text-center text-white/60">{row.a}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-center text-white/40 font-light max-w-2xl mx-auto text-xs md:text-sm leading-relaxed italic">
          * Los valores de pauta son pagos directos a Meta/Google o administrados por nosotros con total transparencia. No incluidos en el fee de agencia.
        </p>
      </motion.div>
    </motion.div>
  );
};

export const Aceleradores = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      ref={ref}
      className="space-y-16 md:space-y-24 w-full max-w-5xl relative"
    >
      <div className="space-y-6 md:space-y-8 max-w-3xl">
        <motion.h2 variants={fadeInUp} className="text-[10px] md:text-xs font-bold text-white/40 uppercase tracking-[0.2em] flex items-center gap-4">
          <span className="w-8 h-[1px] bg-secondary/50 inline-block"></span> Potenciadores de resultado (Opcionales)
        </motion.h2>
        <motion.p variants={fadeInUp} className="text-3xl md:text-4xl text-white font-light leading-tight tracking-tight">
          Aceleradores diseñados para elevar la percepción de valor y automatizar la conversión de clientes premium.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative">
        <motion.div
          style={{ y: y1 }}
          variants={popIn}
          whileHover={{ scale: 1.02 }}
          className="glass-panel p-8 md:p-12 space-y-8 md:space-y-10 flex flex-col h-full group hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] transition-all duration-300"
        >
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 mb-6 md:mb-8 group-hover:border-secondary group-hover:text-secondary transition-colors duration-300">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
            </div>
            <h3 className="text-3xl md:text-4xl font-light tracking-tight text-white group-hover:text-white/90 transition-colors">Sitio Web Landing Page</h3>
            <div className="space-y-1">
              <p className="text-xl md:text-2xl font-light text-secondary">$699.000 COP <span className="text-sm line-through text-white/30 ml-2">$1.200.000</span></p>
              <p className="text-[10px] md:text-xs text-secondary/80 uppercase tracking-widest font-bold bg-secondary/10 inline-block px-2 py-1 rounded">42% DESCUENTO CON PLANES ACTIVOS</p>
            </div>
          </div>
          <p className="text-white/60 font-light text-sm md:text-base flex-grow">Tu vitrina digital profesional operando 24/7:</p>
          <ul className="space-y-4 md:space-y-6 text-sm md:text-base text-white/80 font-light">
            <li className="border-l border-white/20 pl-4 md:pl-6 group-hover:border-secondary/50 transition-colors duration-300">
              <strong className="block text-white/90 font-medium mb-1">Arquitectura de Alta Conversión</strong>
              <span className="text-white/60">Diseño responsive, optimización SEO básica y catálogos de servicios técnicos.</span>
            </li>
            <li className="border-l border-white/20 pl-4 md:pl-6 group-hover:border-secondary/50 transition-colors duration-300">
              <strong className="block text-white/90 font-medium mb-1">Ecosistema Integrado</strong>
              <span className="text-white/60">Integración fluida con WhatsApp, formularios de agendamiento y hosting profesional por 1 año.</span>
            </li>
          </ul>
          <div className="pt-6 md:pt-8 mt-6 md:mt-8 border-t border-secondary/30 bg-secondary/5 p-4 rounded-lg group-hover:bg-secondary/10 transition-colors duration-300">
            <p className="text-white/90 font-medium text-sm mb-2 flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
              </span>
              Sinergia Perfecta + Chatbot IA
            </p>
            <p className="text-white/70 font-light text-xs md:text-sm leading-relaxed">
              Mientras la Landing Page proyecta el estatus premium de tu taller, el <strong>Asistente IA califica y atiende visitantes en tiempo real</strong>. Esta combinación captura leads a cualquier hora, logrando que el cliente tenga una respuesta técnica inmediata sin que muevas un dedo.
            </p>
          </div>
        </motion.div>

        <motion.div
          style={{ y: y2 }}
          variants={popIn}
          whileHover={{ scale: 1.02 }}
          className="glass-panel p-8 md:p-12 space-y-8 md:space-y-10 flex flex-col h-full md:mt-12 group hover:shadow-[0_0_40px_rgba(201,169,98,0.1)] hover:border-secondary/30 transition-all duration-300 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <div className="space-y-4 relative z-10">
            <div className="w-12 h-12 rounded-full border border-secondary/30 flex items-center justify-center text-secondary mb-6 md:mb-8 group-hover:bg-secondary group-hover:text-primary transition-all duration-300">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>
            <h3 className="text-3xl md:text-4xl font-light tracking-tight text-white group-hover:text-secondary transition-colors duration-300">Asistente IA (Chatbot)</h3>
            <div className="space-y-1">
              <p className="text-xl md:text-2xl font-light text-secondary">$800.000 COP <span className="text-[10px] md:text-xs text-white/40 ml-2 uppercase tracking-widest bg-white/5 px-2 py-1 rounded">Implementación</span></p>
            </div>
          </div>
          <p className="text-white/60 font-light text-sm md:text-base flex-grow relative z-10">Entrenado con el catálogo específico de servicios de Alpha Cars:</p>
          <ul className="space-y-4 md:space-y-6 text-sm md:text-base text-white/80 font-light relative z-10">
            {[
              "Responde consultas técnicas 24/7 (precios, durabilidad, procesos)",
              "Califica leads antes de que lleguen a WhatsApp",
              "Integración nativa con Meta Business",
              "Captura clientes mientras duermes"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4 group/li">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0 group-hover/li:shadow-[0_0_8px_rgba(201,169,98,0.8)] transition-all duration-300"></span>
                <span className="text-white/60 group-hover/li:text-white/90 transition-colors duration-300">{item}</span>
              </li>
            ))}
          </ul>
          <div className="pt-6 md:pt-8 mt-6 md:mt-8 border-t border-white/10 relative z-10">
            <p className="text-white/40 font-light text-xs md:text-sm leading-relaxed group-hover:text-white/60 transition-colors">
              * Impacto: Un lead respondido en 5 minutos vs 5 horas tiene 80% más probabilidad de conversión.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export const Cronograma = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scaleY = useTransform(scrollYProgress, [0.1, 0.8], [0, 1]);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      ref={ref}
      className="space-y-16 md:space-y-24 max-w-4xl w-full relative"
    >
      <motion.h2 variants={fadeInUp} className="text-[10px] md:text-xs font-bold text-white/40 uppercase tracking-[0.2em] flex items-center gap-4">
        <span className="w-8 h-[1px] bg-secondary/50 inline-block"></span> Cronograma de Implementación
      </motion.h2>

      <div className="relative">
        {/* Vertical Timeline Line */}
        <motion.div
          style={{ scaleY, originY: 0 }}
          className="absolute left-[15px] md:left-[39px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-secondary via-secondary/50 to-transparent z-0"
        />

        <div className="space-y-12 md:space-y-16 relative z-10">
          {[
            { phase: "01", title: "Fundación Técnica", desc: "Setup de cuentas publicitarias, tracking y auditoría inicial", time: "Semanas 1 – 2" },
            { phase: "02", title: "Producción Inicial", desc: "Sesión fotográfica y diseño de primera tanda de piezas", time: "Semanas 3 – 4" },
            { phase: "03", title: "Lanzamiento Controlado", desc: "Primeras campañas y activación de redes sociales", time: "Semanas 5 – 6" },
            { phase: "04", title: "Optimización y Escala", desc: "Análisis de métricas y escalamiento de presupuesto", time: "Semanas 7 – 8" }
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInLeft}
              whileHover={{ x: 10 }}
              className="flex gap-6 md:gap-12 group"
            >
              <div className="relative flex flex-col items-center shrink-0">
                <div className="w-8 h-8 md:w-20 md:h-20 rounded-full glass-panel flex items-center justify-center text-xs md:text-sm font-mono text-white/50 group-hover:text-primary group-hover:bg-secondary group-hover:border-secondary transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(201,169,98,0.4)]">
                  {item.phase}
                </div>
              </div>
              <div className="flex-grow pt-1 md:pt-4 border-b border-white/5 pb-8 md:pb-12 group-last:border-0 group-hover:border-white/20 transition-colors duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-8">
                  <div>
                    <h4 className="text-xl md:text-2xl font-light text-white/90 group-hover:text-white transition-colors">{item.title}</h4>
                    <p className="text-sm md:text-base text-white/50 font-light mt-2 group-hover:text-white/70 transition-colors">{item.desc}</p>
                  </div>
                  <div className="text-[10px] md:text-xs font-light text-secondary/80 md:text-right shrink-0 bg-secondary/5 px-4 py-2 rounded-full border border-secondary/20 self-start md:self-center uppercase tracking-widest group-hover:bg-secondary/10 group-hover:border-secondary/40 transition-colors duration-300">
                    {item.time}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div variants={fadeInUp} className="mt-12 md:mt-16 pt-8 md:pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-8 glass-panel p-6 md:p-8">
        <div>
          <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/40 font-bold mb-2">Tiempo total estimado</p>
          <p className="text-3xl md:text-4xl font-light tracking-tight text-secondary">6 – 8 semanas</p>
        </div>
        <p className="text-xs md:text-sm text-white/60 font-light max-w-sm md:text-right leading-relaxed italic">
          Ecosistema operativo al 100% en menos de dos meses.
        </p>
      </motion.div>
    </motion.div>
  );
};

export const Terminos = () => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={staggerContainer}
    className="space-y-12 md:space-y-16 max-w-4xl w-full"
  >
    <motion.h2 variants={fadeInUp} className="text-[10px] md:text-xs font-bold text-white/40 uppercase tracking-[0.2em] flex items-center gap-4">
      <span className="w-8 h-[1px] bg-secondary/50 inline-block"></span> Términos y Condiciones
    </motion.h2>

    <motion.div variants={popIn} className="glass-panel p-8 md:p-12">
      <dl className="space-y-8 md:space-y-10">
        {[
          { term: "Forma de pago", def: "50% anticipo para iniciar · 50% contra entrega/día 20 del mes" },
          { term: "Duración mínima", def: "Plan Básico: 3 meses (validación) · Intermedio/Avanzado: 6 meses (crecimiento)" },
          { term: "Inversión en pauta", def: "Pagadera directamente a plataformas. Monto sugerido a definir tras el Setup Inicial." },
          { term: "Entregas del cliente", def: "Acceso a taller para fotos, información técnica de servicios, protocolo de atención" },
          { term: "Propiedad intelectual", def: "Todo el material desarrollado pasa a propiedad del cliente tras el pago completo" },
          { term: "Confidencialidad", def: "Ambas partes se comprometen a tratar la información con total reserva" },
          { term: "Validez de la propuesta", def: "15 días calendario a partir de la fecha de emisión" }
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ x: 5 }}
            className="flex flex-col md:flex-row gap-2 md:gap-8 border-b border-white/5 pb-8 md:pb-10 last:border-0 last:pb-0 group"
          >
            <dt className="text-sm md:text-base font-medium text-white/90 md:w-1/3 shrink-0 group-hover:text-secondary transition-colors duration-300">{item.term}</dt>
            <dd className="text-sm md:text-base text-white/60 font-light md:w-2/3 leading-relaxed group-hover:text-white/80 transition-colors duration-300">{item.def}</dd>
          </motion.div>
        ))}
      </dl>
    </motion.div>
  </motion.div>
);

export const SiguientesPasos = () => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={staggerContainer}
    className="space-y-16 md:space-y-24 max-w-3xl w-full"
  >
    <motion.h2 variants={fadeInUp} className="text-[10px] md:text-xs font-bold text-white/40 uppercase tracking-[0.2em] flex items-center gap-4">
      <span className="w-8 h-[1px] bg-secondary/50 inline-block"></span> Siguientes Pasos
    </motion.h2>

    <div className="space-y-8 md:space-y-12 text-lg md:text-xl text-white/70 font-light leading-relaxed">
      <motion.p variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl text-white font-light leading-tight tracking-tight">
        Para poner en marcha su ecosistema digital premium:
      </motion.p>

      <motion.div variants={popIn} className="glass-panel p-8 md:p-12 my-12 md:my-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-[60px] pointer-events-none" />
        <ol className="space-y-8 md:space-y-10 relative z-10">
          {[
            "Selección de Plan (Básico, Intermedio o Avanzado) para Alpha Cars",
            "Reunión de descubrimiento (45 min): Analizamos sus servicios de mayor margen",
            "Firma de acuerdo y pago de anticipo",
            "Kick-off técnico inmediato en Bogotá",
            "Inicio de fase de producción"
          ].map((step, i) => (
            <motion.li
              key={i}
              whileHover={{ x: 10 }}
              className="flex items-center gap-6 md:gap-8 group"
            >
              <span className="text-xs md:text-sm font-mono text-secondary/60 border border-secondary/20 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shrink-0 group-hover:bg-secondary group-hover:text-primary group-hover:border-secondary transition-all duration-300 shadow-[0_0_15px_rgba(201,169,98,0)] group-hover:shadow-[0_0_15px_rgba(201,169,98,0.3)]">0{i + 1}</span>
              <span className="text-white/90 font-medium text-base md:text-lg group-hover:text-white transition-colors duration-300">{step}</span>
            </motion.li>
          ))}
        </ol>
      </motion.div>

      <motion.div variants={fadeInUp} className="border-l-2 border-secondary pl-6 md:pl-8 py-2 my-12 md:my-16 bg-gradient-to-r from-secondary/5 to-transparent p-6 rounded-r-2xl">
        <p className="text-white/90 font-medium mb-2 md:mb-4 text-xl md:text-2xl tracking-tight">El mercado premium no espera.</p>
        <p className="text-base md:text-lg text-white/60">Los talleres que dominen la captación online en los próximos 12 meses serán los que capturen el 80% de los clientes de alta gama en su ciudad.</p>
      </motion.div>

      <motion.p variants={fadeInUp} className="text-base md:text-lg text-white/60 text-center md:text-left">Construyamos juntos la presencia digital que su trabajo merece.</motion.p>

      <motion.div variants={fadeInUp} className="pt-16 md:pt-24 mt-16 md:mt-24 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-16">
          <div className="space-y-2">
            <p className="text-2xl text-white font-light tracking-tight">Director de Estrategia Digital</p>
            <p className="text-sm text-secondary uppercase tracking-widest font-bold">Propuesta Comercial 2026</p>
          </div>
          <div className="w-32 h-[1px] bg-secondary/50"></div>
        </div>

        <p className="text-[10px] md:text-xs text-white/30 uppercase tracking-[0.2em] text-center leading-relaxed">
          Documento preparado con carácter confidencial. Precios en pesos colombianos (COP).<br className="md:hidden" /> Prohibida su reproducción o distribución sin autorización expresa.
        </p>
      </motion.div>
    </div>
  </motion.div>
);
