import { ReactNode, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Portada = () => (
  <div className="flex flex-col justify-center min-h-[80vh] space-y-16 md:space-y-24 w-full max-w-5xl relative z-10">
    <div className="space-y-6 md:space-y-8">
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter text-white uppercase leading-none">
        PROPUESTA<br />
        <span className="text-white/40">COMERCIAL</span>
      </h1>
      <h2 className="text-xs md:text-sm font-medium tracking-[0.3em] text-secondary uppercase">
        ECOSISTEMA DIGITAL INTEGRAL · EMBELLECIMIENTO AUTOMOTRIZ · 2026
      </h2>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pt-16 md:pt-24 border-t border-white/10">
      <div className="space-y-3">
        <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/40 font-bold">Preparada exclusivamente para</p>
        <p className="text-sm md:text-base text-white/80 font-light leading-relaxed">Alpha Cars</p>
      </div>
      <div className="space-y-3">
        <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/40 font-bold">Ubicación</p>
        <p className="text-sm md:text-base text-white/80 font-light leading-relaxed">Bogotá, D.C.</p>
      </div>
      <div className="space-y-3">
        <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/40 font-bold">Fecha de emisión</p>
        <p className="text-sm md:text-base text-white/80 font-light leading-relaxed">{new Date().toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' })}</p>
      </div>
      <div className="space-y-3">
        <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/40 font-bold">Validez</p>
        <p className="text-sm md:text-base text-white/80 font-light leading-relaxed">15 días</p>
      </div>
    </div>
  </div>
);

export const Contenido = () => (
  <div className="space-y-12 md:space-y-16 w-full max-w-3xl">
    <h2 className="text-[10px] md:text-xs font-bold text-white/40 uppercase tracking-[0.2em]">Contenido</h2>
    <ul className="space-y-6 md:space-y-8 text-2xl md:text-4xl text-white/80 font-light tracking-tight">
      <li className="flex items-center gap-6 md:gap-8 group cursor-default">
        <span className="text-sm md:text-base font-mono text-white/20 group-hover:text-secondary transition-colors">01</span>
        <span className="group-hover:text-white transition-colors">Carta de Presentación</span>
      </li>
      <li className="flex items-center gap-6 md:gap-8 group cursor-default">
        <span className="text-sm md:text-base font-mono text-white/20 group-hover:text-secondary transition-colors">02</span>
        <span className="group-hover:text-white transition-colors">Diagnóstico y Oportunidad</span>
      </li>
      <li className="flex items-center gap-6 md:gap-8 group cursor-default">
        <span className="text-sm md:text-base font-mono text-white/20 group-hover:text-secondary transition-colors">03</span>
        <span className="group-hover:text-white transition-colors">El Tridente Especializado</span>
      </li>
      <li className="flex items-center gap-6 md:gap-8 group cursor-default">
        <span className="text-sm md:text-base font-mono text-white/20 group-hover:text-secondary transition-colors">04</span>
        <span className="group-hover:text-white transition-colors">Propuestas de Ecosistema Digital</span>
      </li>
      <li className="flex items-center gap-6 md:gap-8 group cursor-default">
        <span className="text-sm md:text-base font-mono text-white/20 group-hover:text-secondary transition-colors">05</span>
        <span className="group-hover:text-white transition-colors">Aceleradores de Conversión</span>
      </li>
      <li className="flex items-center gap-6 md:gap-8 group cursor-default">
        <span className="text-sm md:text-base font-mono text-white/20 group-hover:text-secondary transition-colors">06</span>
        <span className="group-hover:text-white transition-colors">Cronograma General</span>
      </li>
      <li className="flex items-center gap-6 md:gap-8 group cursor-default">
        <span className="text-sm md:text-base font-mono text-white/20 group-hover:text-secondary transition-colors">07</span>
        <span className="group-hover:text-white transition-colors">Términos y Condiciones</span>
      </li>
      <li className="flex items-center gap-6 md:gap-8 group cursor-default">
        <span className="text-sm md:text-base font-mono text-white/20 group-hover:text-secondary transition-colors">08</span>
        <span className="group-hover:text-white transition-colors">Siguientes Pasos</span>
      </li>
    </ul>
  </div>
);

export const CartaPresentacion = () => (
  <div className="space-y-12 md:space-y-16 max-w-3xl w-full">
    <h2 className="text-[10px] md:text-xs font-bold text-white/40 uppercase tracking-[0.2em]">Introducción</h2>

    <h3 className="text-4xl md:text-5xl font-light tracking-tight text-white leading-tight">
      Su máquina de captación para clientes premium.
    </h3>

    <div className="space-y-8 md:space-y-10 text-lg md:text-xl text-white/70 font-light leading-relaxed">
      <p>
        El mercado de vehículos de gama alta en Bogotá no se mueve por casualidad. Los dueños de Porsche, BMW, Mercedes y camionetas de lujo buscan protección y personalización, pero antes de llegar a Alpha Cars, pasan 3 semanas investigando online.
      </p>

      <p>
        Esta propuesta no es sobre 'hacer posts bonitos'. Es sobre construir un sistema técnico de captación donde cada pieza tiene un propósito: traer vehículos de alto valor a su centro de embellecimiento.
      </p>

      <p>
        Ustedes dominan el PPF, el wrapping perfecto y la corrección de pintura. Nosotros dominamos la captación digital de clientes que pagan premium por esos servicios.
      </p>

      <div className="glass-panel p-8 md:p-12 my-12 md:my-16 border-l-2 border-l-secondary">
        <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-secondary font-bold mb-4 md:mb-6">El objetivo es claro</p>
        <p className="text-2xl md:text-3xl font-light tracking-tight text-white/90 leading-snug">
          Posicionar a Alpha Cars como el laboratorio de pintura más técnico y confiable del mercado, captando clientes que ya tienen el presupuesto.
        </p>
      </div>
    </div>
  </div>
);

export const DiagnosticoOportunidad = () => (
  <div className="space-y-20 md:space-y-32 w-full max-w-4xl">
    <div className="space-y-4 md:space-y-6">
      <h2 className="text-[10px] md:text-xs font-bold text-white/40 uppercase tracking-[0.2em]">Diagnóstico y Oportunidad</h2>
      <h3 className="text-4xl md:text-5xl font-light tracking-tight text-white leading-tight">Situación actual</h3>
    </div>

    <div className="space-y-8 md:space-y-12">
      <div className="overflow-x-auto rounded-3xl border border-white/10 bg-white/[0.02]">
        <table className="w-full text-left border-collapse min-w-[600px]">
          <thead>
            <tr className="border-b border-white/10 text-white/40 text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold">
              <th className="py-6 px-6 md:px-8">Dimensión</th>
              <th className="py-6 px-6 md:px-8">Estado</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-sm md:text-base font-light">
            <tr className="hover:bg-white/[0.04] transition-colors">
              <td className="py-5 px-6 md:px-8 text-white/90">Especialización técnica</td>
              <td className="py-5 px-6 md:px-8 text-white/60">Expertos en PPF/Wrapping/Detailing de alta gama</td>
            </tr>
            <tr className="hover:bg-white/[0.04] transition-colors">
              <td className="py-5 px-6 md:px-8 text-white/90">Portafolio de servicios</td>
              <td className="py-5 px-6 md:px-8 text-white/60">3-5 líneas premium (protección, color, restauración)</td>
            </tr>
            <tr className="hover:bg-white/[0.04] transition-colors">
              <td className="py-5 px-6 md:px-8 text-white/90">Clientela actual</td>
              <td className="py-5 px-6 md:px-8 text-white/60">Referidos y tráfico orgánico local</td>
            </tr>
            <tr className="hover:bg-white/[0.04] transition-colors">
              <td className="py-5 px-6 md:px-8 text-white/90">Presencia digital unificada</td>
              <td className="py-5 px-6 md:px-8 text-white/30">Fragmentada o en construcción</td>
            </tr>
            <tr className="hover:bg-white/[0.04] transition-colors">
              <td className="py-5 px-6 md:px-8 text-white/90">Sistema de captación online</td>
              <td className="py-5 px-6 md:px-8 text-white/30">Sin automatización ni funnel definido</td>
            </tr>
            <tr className="hover:bg-white/[0.04] transition-colors">
              <td className="py-5 px-6 md:px-8 text-white/90">Posicionamiento Google Maps</td>
              <td className="py-5 px-6 md:px-8 text-white/30">Por optimizar para "detailing premium Bogotá"</td>
            </tr>
            <tr className="hover:bg-white/[0.04] transition-colors">
              <td className="py-5 px-6 md:px-8 text-white/90">Contenido técnico-visual</td>
              <td className="py-5 px-6 md:px-8 text-white/30">Escaso o amateur (fotos con celular)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div className="space-y-8 md:space-y-12 max-w-3xl pt-8 md:pt-12 border-t border-white/10">
      <h3 className="text-3xl md:text-4xl font-light tracking-tight text-white">La oportunidad</h3>
      <div className="space-y-6 md:space-y-8 text-lg md:text-xl text-white/70 font-light leading-relaxed">
        <p>El cliente promedio de PPF invierte entre $3.000.000 y $8.000.000 COP por vehículo. No busca el más barato, busca el que genere más confianza técnica.</p>
        <p className="text-white/90">Hoy, el 78% de estos clientes descarta un taller antes de escribirle, solo por su Instagram. El 85% investiga 'wrapping Bogotá' o 'PPF cerca de mí' y decide en las primeras 3 opciones que aparezcan.</p>
        <ul className="space-y-4 md:space-y-6 pt-4 md:pt-6">
          {[
            "Posicionar a Alpha Cars como el laboratorio de pintura más técnico y confiable del mercado",
            "Captar clientes que ya tienen el presupuesto, solo necesitan ver que ustedes son los profesionales",
            "Dominar las búsquedas locales para servicios de alto ticket",
            "Construir una vitrina digital que refleje la calidad real de su trabajo",
            "Automatizar la recepción de leads calificados 24/7"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-4 md:gap-6">
              <span className="text-secondary font-mono text-sm md:text-base mt-1">0{i + 1}</span>
              <span className="text-base md:text-lg">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export const ValorEstrategico = () => (
  <div className="space-y-16 md:space-y-24 max-w-5xl w-full">
    <div className="space-y-6 md:space-y-8 max-w-3xl">
      <h2 className="text-[10px] md:text-xs font-bold text-white/40 uppercase tracking-[0.2em]">El Tridente Especializado</h2>
      <h3 className="text-4xl md:text-5xl font-light tracking-tight text-white leading-tight">Tres maestrías, un objetivo común</h3>
      <p className="text-xl md:text-2xl text-white/60 font-light">El valor de tener especialistas dedicados vs. un generalista</p>
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
        <div key={i} className="glass-panel p-8 space-y-8 flex flex-col h-full border-t-2 border-t-white/10 hover:border-t-secondary transition-all duration-500">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mb-6">
              {col.icon}
            </div>
            <h4 className="text-2xl font-light text-white">{col.title}</h4>
            <p className="text-[10px] uppercase tracking-[0.2em] text-secondary font-bold">{col.subtitle}</p>
          </div>
          <ul className="space-y-4 flex-grow">
            {col.items.map((item, j) => (
              <li key={j} className="text-sm text-white/60 font-light leading-relaxed flex items-start gap-3">
                <span className="w-1 h-1 rounded-full bg-secondary mt-2 shrink-0"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    <div className="glass-panel p-8 md:p-12 border-l-2 border-l-secondary">
      <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed">
        "La sinergia de estas tres mentes trabajando sincronizadas crea un ecosistema donde la publicidad atrae al cliente correcto, el diseño lo convence visualmente, y la comunidad lo retiene y refiere."
      </p>
    </div>
  </div>
);

export const Propuestas = () => {
  return (
    <div className="space-y-20 md:space-y-32 w-full max-w-7xl">
      <div className="space-y-6 md:space-y-8 max-w-3xl">
        <h2 className="text-[10px] md:text-xs font-bold text-white/40 uppercase tracking-[0.2em]">Propuestas de Ecosistema Digital</h2>
        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-light leading-tight tracking-tight">
          Tres niveles de integración para Alpha Cars
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {/* PLAN BÁSICO */}
        <div className="glass-panel p-8 space-y-10 border-t-2 border-t-white/10 flex flex-col group hover:bg-white/[0.02] transition-all duration-500">
          <div className="space-y-4">
            <h3 className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/40 font-bold">OPCIÓN A · PLAN BÁSICO</h3>
            <h4 className="text-3xl font-light tracking-tight text-white group-hover:text-secondary transition-colors">Validación Inteligente</h4>
            <div className="space-y-1">
              <p className="text-2xl font-light text-white/90">$1.800.000 <span className="text-sm text-white/40">COP/mes</span></p>
              <p className="text-[10px] text-white/40 uppercase tracking-widest">+ Inversión pauta ($800k - $1.2M)</p>
            </div>
          </div>

          <div className="space-y-6 flex-grow">
            <div className="space-y-4">
              <h5 className="text-[10px] uppercase tracking-[0.2em] text-secondary font-bold">Incluye:</h5>
              <ul className="space-y-4 text-sm text-white/60 font-light">
                <li className="flex items-start gap-3"><span className="text-secondary">✓</span> 16 piezas de diseño/mes</li>
                <li className="flex items-start gap-3"><span className="text-secondary">✓</span> Gestión de 2 redes (IG + FB)</li>
                <li className="flex items-start gap-3"><span className="text-secondary">✓</span> 1 campaña focalizada</li>
                <li className="flex items-start gap-3"><span className="text-secondary">✓</span> Configuración técnica inicial</li>
                <li className="flex items-start gap-3"><span className="text-secondary">✓</span> Reporte mensual de leads</li>
              </ul>
            </div>

            <div className="pt-6 border-t border-white/5 space-y-3">
              <h5 className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">Add-on Disponible:</h5>
              <div className="flex justify-between items-center bg-white/[0.03] p-3 rounded-lg border border-white/5">
                <span className="text-xs text-white/80">Landing Page (Web)</span>
                <span className="text-xs font-mono text-secondary">$699.000</span>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-white/5 mt-auto">
            <p className="text-xs text-white/40 font-light italic">Ideal para: Talleres iniciando su inversión digital.</p>
          </div>
        </div>

        {/* PLAN INTERMEDIO */}
        <div className="glass-panel p-8 space-y-10 border-t-2 border-t-secondary bg-secondary/[0.03] relative overflow-hidden flex flex-col scale-105 z-10 shadow-[0_0_50px_rgba(201,169,98,0.1)] group hover:bg-secondary/[0.05] transition-all duration-500">
          <div className="absolute top-4 right-4 bg-secondary text-primary text-[8px] font-bold px-2 py-1 rounded-full uppercase tracking-widest">
            MÁS POPULAR
          </div>

          <div className="space-y-4">
            <h3 className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-secondary font-bold">OPCIÓN B · PLAN INTERMEDIO</h3>
            <h4 className="text-3xl font-light tracking-tight text-white group-hover:text-secondary transition-colors">Funnel de Crecimiento</h4>
            <div className="space-y-1">
              <p className="text-2xl font-light text-secondary">$3.200.000 <span className="text-sm text-white/40">COP/mes</span></p>
              <p className="text-[10px] text-white/40 uppercase tracking-widest">+ Inversión pauta ($1.5M - $2.5M)</p>
            </div>
          </div>

          <div className="space-y-6 flex-grow">
            <div className="space-y-4">
              <h5 className="text-[10px] uppercase tracking-[0.2em] text-secondary font-bold">Incluye todo lo anterior más:</h5>
              <ul className="space-y-4 text-sm text-white/60 font-light">
                <li className="flex items-start gap-3"><span className="text-secondary">✓</span> 30 piezas de diseño/mes</li>
                <li className="flex items-start gap-3"><span className="text-secondary">✓</span> Gestión de 3 redes</li>
                <li className="flex items-start gap-3"><span className="text-secondary">✓</span> Community Management completo</li>
                <li className="flex items-start gap-3"><span className="text-secondary">✓</span> Funnel de captación + Remarketing</li>
                <li className="flex items-start gap-3"><span className="text-secondary">✓</span> Estudio de mercado inicial</li>
                <li className="flex items-start gap-3"><span className="text-secondary">✓</span> Auditoría de competencia</li>
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-white/5 mt-auto">
            <p className="text-xs text-white/40 font-light italic">Ideal para: Talleres con flujo estable que buscan escalar.</p>
          </div>
        </div>

        {/* PLAN AVANZADO */}
        <div className="glass-panel p-8 space-y-10 border-t-2 border-t-white/10 flex flex-col group hover:bg-white/[0.02] transition-all duration-500">
          <div className="space-y-4">
            <h3 className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/40 font-bold">OPCIÓN C · PLAN AVANZADO</h3>
            <h4 className="text-3xl font-light tracking-tight text-white group-hover:text-secondary transition-colors">Ecosistema Premium</h4>
            <div className="space-y-1">
              <p className="text-2xl font-light text-white/90">$4.800.000 <span className="text-sm text-white/40">COP/mes</span></p>
              <p className="text-[10px] text-white/40 uppercase tracking-widest">+ Inversión pauta ($3M - $6M)</p>
            </div>
          </div>

          <div className="space-y-6 flex-grow">
            <div className="space-y-4">
              <h5 className="text-[10px] uppercase tracking-[0.2em] text-secondary font-bold">Incluye todo lo anterior más:</h5>
              <ul className="space-y-4 text-sm text-white/60 font-light">
                <li className="flex items-start gap-3"><span className="text-secondary">✓</span> 44 piezas de diseño/mes</li>
                <li className="flex items-start gap-3"><span className="text-secondary">✓</span> Gestión multicanal avanzada</li>
                <li className="flex items-start gap-3"><span className="text-secondary">✓</span> Crisis management y reputación</li>
                <li className="flex items-start gap-3"><span className="text-secondary">✓</span> Ecosistema de pauta completo</li>
                <li className="flex items-start gap-3 font-medium text-white/90"><span className="text-secondary">✓</span> Landing Page (Web) INCLUIDA</li>
                <li className="flex items-start gap-3 font-medium text-white/90"><span className="text-secondary">✓</span> Chatbot IA INCLUIDO</li>
                <li className="flex items-start gap-3"><span className="text-secondary">✓</span> Consultoría estratégica semanal</li>
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-white/5 mt-auto">
            <p className="text-xs text-white/40 font-light italic">Ideal para: Talleres líderes que buscan dominar el mercado.</p>
          </div>
        </div>
      </div>

      {/* Comparativa */}
      <div className="space-y-8 md:space-y-12 pt-16 md:pt-24 border-t border-white/10">
        <h3 className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/40 font-bold text-center">Tabla Comparativa Final</h3>
        <div className="overflow-x-auto rounded-3xl border border-white/10 bg-white/[0.02]">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b border-white/10 text-white/40 text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold">
                <th className="py-6 px-6 md:px-8">Característica</th>
                <th className="py-6 px-6 md:px-8 text-center">Plan Básico</th>
                <th className="py-6 px-6 md:px-8 text-center text-secondary">Plan Intermedio</th>
                <th className="py-6 px-6 md:px-8 text-center">Plan Avanzado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-white/80 font-light text-sm md:text-base">
              {[
                { name: "Fee Mensual", b: "$1.800.000", i: "$3.200.000", a: "$4.800.000" },
                { name: "Piezas de diseño/mes", b: "16", i: "30", a: "44" },
                { name: "Redes gestionadas", b: "2", i: "3", a: "4+" },
                { name: "Community Management", b: "Básico", i: "Completo", a: "Avanzado" },
                { name: "Estructura de Pauta", b: "1 campaña", i: "Funnel (2-3 camp.)", a: "Ecosistema completo" },
                { name: "Inversión pauta sugerida", b: "$800k-$1.2M", i: "$1.5M-$2.5M", a: "$3M-$6M" },
                { name: "Landing Page (Web)", b: "Addon $699k", i: "Opcional", a: "Incluida" },
                { name: "Chatbot IA", b: "—", i: "Opcional", a: "Incluido" },
                { name: "Estudio de Mercado", b: "Opcional", i: "Incluido", a: "Incluido avanzado" },
                { name: "Reportes", b: "Mensual", i: "Quincenal", a: "Semanal" },
              ].map((row, index) => (
                <tr key={index} className="hover:bg-white/[0.04] transition-colors">
                  <td className="py-5 px-6 md:px-8">{row.name}</td>
                  <td className="py-5 px-6 md:px-8 text-center text-white/60">{row.b}</td>
                  <td className="py-5 px-6 md:px-8 text-center text-secondary font-medium">{row.i}</td>
                  <td className="py-5 px-6 md:px-8 text-center text-white/60">{row.a}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-center text-white/40 font-light max-w-2xl mx-auto text-xs md:text-sm leading-relaxed italic">
          * Los valores de pauta son pagos directos a Meta/Google o administrados por nosotros con total transparencia. No incluidos en el fee de agencia.
        </p>
      </div>
    </div>
  );
};

export const Aceleradores = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <div ref={ref} className="space-y-16 md:space-y-24 w-full max-w-5xl relative">
      <div className="space-y-6 md:space-y-8 max-w-3xl">
        <h2 className="text-[10px] md:text-xs font-bold text-white/40 uppercase tracking-[0.2em]">Potenciadores de resultado (Opcionales)</h2>
        <p className="text-3xl md:text-4xl text-white font-light leading-tight tracking-tight">
          Aceleradores diseñados para elevar la percepción de valor y automatizar la conversión de clientes premium.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative">
        <motion.div style={{ y: y1 }} className="glass-panel p-8 md:p-12 space-y-8 md:space-y-10 flex flex-col h-full">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 mb-6 md:mb-8">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
            </div>
            <h3 className="text-3xl md:text-4xl font-light tracking-tight text-white">Sitio Web Landing Page</h3>
            <div className="space-y-1">
              <p className="text-xl md:text-2xl font-light text-secondary">$699.000 COP <span className="text-sm line-through text-white/30 ml-2">$1.200.000</span></p>
              <p className="text-[10px] md:text-xs text-secondary/80 uppercase tracking-widest font-bold">42% DESCUENTO CON PLANES ACTIVOS</p>
            </div>
          </div>
          <p className="text-white/60 font-light text-sm md:text-base flex-grow">Tu vitrina digital profesional operando 24/7:</p>
          <ul className="space-y-4 md:space-y-6 text-sm md:text-base text-white/80 font-light">
            <li className="border-l border-white/20 pl-4 md:pl-6">
              <strong className="block text-white/90 font-medium mb-1">Arquitectura de Alta Conversión</strong>
              <span className="text-white/60">Diseño responsive, optimización SEO básica y catálogos de servicios técnicos.</span>
            </li>
            <li className="border-l border-white/20 pl-4 md:pl-6">
              <strong className="block text-white/90 font-medium mb-1">Ecosistema Integrado</strong>
              <span className="text-white/60">Integración fluida con WhatsApp, formularios de agendamiento y hosting profesional por 1 año.</span>
            </li>
          </ul>
          <div className="pt-6 md:pt-8 mt-6 md:mt-8 border-t border-secondary/30 bg-secondary/5 p-4 rounded-lg">
            <p className="text-white/90 font-medium text-sm mb-2 flex items-center gap-2">
              <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 20 20"><path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" /></svg>
              Sinergia Perfecta + Chatbot IA
            </p>
            <p className="text-white/70 font-light text-xs md:text-sm leading-relaxed">
              Mientras la Landing Page proyecta el estatus premium de tu taller, el <strong>Asistente IA califica y atiende visitantes en tiempo real</strong>. Esta combinación captura leads a cualquier hora, logrando que el cliente tenga una respuesta técnica inmediata sin que muevas un dedo.
            </p>
          </div>
        </motion.div>

        <motion.div style={{ y: y2 }} className="glass-panel p-8 md:p-12 space-y-8 md:space-y-10 flex flex-col h-full md:mt-12">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-full border border-secondary/30 flex items-center justify-center text-secondary mb-6 md:mb-8">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>
            <h3 className="text-3xl md:text-4xl font-light tracking-tight text-white">Asistente IA (Chatbot)</h3>
            <div className="space-y-1">
              <p className="text-xl md:text-2xl font-light text-secondary">$800.000 COP <span className="text-[10px] md:text-xs text-white/40 ml-2 uppercase tracking-widest">Implementación</span></p>
            </div>
          </div>
          <p className="text-white/60 font-light text-sm md:text-base flex-grow">Entrenado con el catálogo específico de servicios de Alpha Cars:</p>
          <ul className="space-y-4 md:space-y-6 text-sm md:text-base text-white/80 font-light">
            {[
              "Responde consultas técnicas 24/7 (precios, durabilidad, procesos)",
              "Califica leads antes de que lleguen a WhatsApp",
              "Integración nativa con Meta Business",
              "Captura clientes mientras duermes"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0"></span>
                <span className="text-white/60">{item}</span>
              </li>
            ))}
          </ul>
          <div className="pt-6 md:pt-8 mt-6 md:mt-8 border-t border-white/10">
            <p className="text-white/40 font-light text-xs md:text-sm leading-relaxed">
              * Impacto: Un lead respondido en 5 minutos vs 5 horas tiene 80% más probabilidad de conversión.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
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
    <div ref={ref} className="space-y-16 md:space-y-24 max-w-4xl w-full relative">
      <h2 className="text-[10px] md:text-xs font-bold text-white/40 uppercase tracking-[0.2em]">Cronograma de Implementación</h2>

      <div className="relative">
        {/* Vertical Timeline Line */}
        <motion.div
          style={{ scaleY, originY: 0 }}
          className="absolute left-[15px] md:left-[39px] top-0 bottom-0 w-[1px] bg-secondary z-0"
        />

        <div className="space-y-12 md:space-y-16 relative z-10">
          {[
            { phase: "01", title: "Fundación Técnica", desc: "Setup de cuentas publicitarias, tracking y auditoría inicial", time: "Semanas 1 – 2" },
            { phase: "02", title: "Producción Inicial", desc: "Sesión fotográfica y diseño de primera tanda de piezas", time: "Semanas 3 – 4" },
            { phase: "03", title: "Lanzamiento Controlado", desc: "Primeras campañas y activación de redes sociales", time: "Semanas 5 – 6" },
            { phase: "04", title: "Optimización y Escala", desc: "Análisis de métricas y escalamiento de presupuesto", time: "Semanas 7 – 8" }
          ].map((item, i) => (
            <div key={i} className="flex gap-6 md:gap-12 group">
              <div className="relative flex flex-col items-center shrink-0">
                <div className="w-8 h-8 md:w-20 md:h-20 rounded-full glass-panel flex items-center justify-center text-xs md:text-sm font-mono text-white/50 group-hover:text-secondary group-hover:border-secondary/50 transition-all duration-500">
                  {item.phase}
                </div>
              </div>
              <div className="flex-grow pt-1 md:pt-4 border-b border-white/5 pb-8 md:pb-12 group-last:border-0">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-8">
                  <div>
                    <h4 className="text-xl md:text-2xl font-light text-white/90 group-hover:text-white transition-colors">{item.title}</h4>
                    <p className="text-sm md:text-base text-white/50 font-light mt-2">{item.desc}</p>
                  </div>
                  <div className="text-[10px] md:text-xs font-light text-white/40 md:text-right shrink-0 bg-white/[0.02] px-4 py-2 rounded-full border border-white/5 self-start md:self-center uppercase tracking-widest">
                    {item.time}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 md:mt-16 pt-8 md:pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-8">
        <div>
          <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/40 font-bold mb-2">Tiempo total estimado</p>
          <p className="text-3xl md:text-4xl font-light tracking-tight text-white">6 – 8 semanas</p>
        </div>
        <p className="text-xs md:text-sm text-white/40 font-light max-w-sm md:text-right leading-relaxed italic">
          Ecosistema operativo al 100% en menos de dos meses.
        </p>
      </div>
    </div>
  );
};

export const Terminos = () => (
  <div className="space-y-12 md:space-y-16 max-w-4xl w-full">
    <h2 className="text-[10px] md:text-xs font-bold text-white/40 uppercase tracking-[0.2em]">Términos y Condiciones</h2>

    <div className="glass-panel p-8 md:p-12">
      <dl className="space-y-8 md:space-y-10">
        {[
          { term: "Forma de pago", def: "50% anticipo para iniciar · 50% contra entrega/día 20 del mes" },
          { term: "Duración mínima", def: "Plan Básico: 3 meses (validación) · Intermedio/Avanzado: 6 meses (crecimiento)" },
          { term: "Inversión en pauta", def: "Pagadera directamente a plataformas. Recomendado min $800.000 COP/mes" },
          { term: "Entregas del cliente", def: "Acceso a taller para fotos, información técnica de servicios, protocolo de atención" },
          { term: "Propiedad intelectual", def: "Todo el material desarrollado pasa a propiedad del cliente tras el pago completo" },
          { term: "Confidencialidad", def: "Ambas partes se comprometen a tratar la información con total reserva" },
          { term: "Validez de la propuesta", def: "15 días calendario a partir de la fecha de emisión" }
        ].map((item, i) => (
          <div key={i} className="flex flex-col md:flex-row gap-2 md:gap-8 border-b border-white/5 pb-8 md:pb-10 last:border-0 last:pb-0">
            <dt className="text-sm md:text-base font-medium text-white/90 md:w-1/3 shrink-0">{item.term}</dt>
            <dd className="text-sm md:text-base text-white/60 font-light md:w-2/3 leading-relaxed">{item.def}</dd>
          </div>
        ))}
      </dl>
    </div>
  </div>
);

export const SiguientesPasos = () => (
  <div className="space-y-16 md:space-y-24 max-w-3xl w-full">
    <h2 className="text-[10px] md:text-xs font-bold text-white/40 uppercase tracking-[0.2em]">Siguientes Pasos</h2>

    <div className="space-y-8 md:space-y-12 text-lg md:text-xl text-white/70 font-light leading-relaxed">
      <p className="text-3xl md:text-4xl lg:text-5xl text-white font-light leading-tight tracking-tight">
        Para poner en marcha su ecosistema digital premium:
      </p>

      <div className="glass-panel p-8 md:p-12 my-12 md:my-16">
        <ol className="space-y-8 md:space-y-10">
          {[
            "Selección de Plan (Básico, Intermedio o Avanzado) para Alpha Cars",
            "Reunión de descubrimiento (45 min): Analizamos sus servicios de mayor margen",
            "Firma de acuerdo y pago de anticipo",
            "Kick-off técnico inmediato en Bogotá",
            "Inicio de fase de producción"
          ].map((step, i) => (
            <li key={i} className="flex items-center gap-6 md:gap-8">
              <span className="text-xs md:text-sm font-mono text-white/30 border border-white/10 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shrink-0">0{i + 1}</span>
              <span className="text-white/90 font-medium text-base md:text-lg">{step}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="border-l-2 border-secondary pl-6 md:pl-8 py-2 my-12 md:my-16">
        <p className="text-white/90 font-medium mb-2 md:mb-4 text-xl md:text-2xl tracking-tight">El mercado premium no espera.</p>
        <p className="text-base md:text-lg text-white/60">Los talleres que dominen la captación online en los próximos 12 meses serán los que capturen el 80% de los clientes de alta gama en su ciudad.</p>
      </div>

      <p className="text-base md:text-lg text-white/60">Construyamos juntos la presencia digital que su trabajo merece.</p>

      <div className="pt-16 md:pt-24 mt-16 md:mt-24 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-16">
          <div className="space-y-2">
            <p className="text-2xl text-white font-light tracking-tight">Director de Estrategia Digital</p>
            <p className="text-sm text-white/40 uppercase tracking-widest">Propuesta Comercial 2026</p>
          </div>
          <div className="w-32 h-[1px] bg-secondary/30"></div>
        </div>

        <p className="text-[10px] md:text-xs text-white/30 uppercase tracking-[0.2em] text-center leading-relaxed">
          Documento preparado con carácter confidencial. Precios en pesos colombianos (COP).<br className="md:hidden" /> Prohibida su reproducción o distribución sin autorización expresa.
        </p>
      </div>
    </div>
  </div>
);
