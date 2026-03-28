'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Database, Users, MonitorSmartphone, MousePointerClick } from 'lucide-react';

export default function Process() {
  return (
    <main className="pt-32 bg-[#131313] min-h-screen text-[#e2e2e2] font-body overflow-hidden">
      
      {/* Hero Section */}
      <section className="px-8 py-20 max-w-[1440px] mx-auto relative">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#1b1b1b] to-transparent opacity-50 transform rotate-12 -z-10 pointer-events-none"></div>
        <div className="absolute top-40 right-20 w-[600px] h-[100px] bg-[#1a1f2e] transform -rotate-45 -z-10 pointer-events-none blur-3xl"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[#ffffff] font-label text-xs tracking-[0.2em] uppercase mb-6 block font-bold">
              Our Tactical Playbook
            </span>
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-[1.05] mb-8 font-headline">
              Architecting <br />
              <span className="bg-gradient-to-r from-[#ffffff] to-[#8c909f] bg-clip-text text-transparent">Digital Voids.</span>
            </h1>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="lg:pt-24"
          >
            <p className="text-[#c2c6d6] text-lg font-light leading-relaxed mb-8 max-w-md">
              Every project begins with a deep forensic audit of your brand&apos;s digital presence. We dismantle your current operation, map out behavioral patterns, and find friction points.
            </p>
            <Link href="/#work" className="text-[#ffffff] font-label text-xs tracking-[0.2em] uppercase font-bold hover:text-white transition-colors flex items-center gap-2">
              View Projects <span className="text-lg">→</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Vertical Ladder Section */}
      <section className="px-8 py-24 border-t border-[#424754]/20 max-w-[1440px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight font-headline">The Process</h2>
          <p className="text-[#c2c6d6] text-lg font-light mt-4 max-w-xl mx-auto">A systematic ascent to digital excellence.</p>
        </motion.div>

        <div className="flex flex-col gap-32 relative">
          {/* Connecting Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#424754]/30 to-transparent hidden md:block transform -translate-x-1/2"></div>

          {/* Analyze */}
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col md:flex-row items-center gap-12 md:gap-24 relative"
          >
            <div className="w-full md:w-1/2 relative h-[400px] rounded-2xl overflow-hidden border border-[#424754]/20 shadow-2xl group">
              <Image src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop" alt="Analyze" fill className="object-cover grayscale opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-transparent"></div>
            </div>
            
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-5xl font-black text-[#ffffff]/20 font-headline">01</span>
                <h3 className="text-4xl font-extrabold tracking-tight font-headline text-[#e2e2e2]">Analyze</h3>
              </div>
              <p className="text-[#c2c6d6] text-lg font-light leading-relaxed mb-8">
                Every project begins with a deep forensic audit of your brand&apos;s digital presence. We dismantle your current operation, map out behavioral patterns, and find friction points.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#1b1b1b] border border-[#424754]/30 flex items-center justify-center shrink-0">
                    <Database className="text-[#ffffff]" size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold tracking-widest uppercase text-[#e2e2e2] mb-1 font-headline">Data Collection</h4>
                    <p className="text-[#c2c6d6] text-sm font-light">Tracing the flow of users to find exact drop-off points.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#1b1b1b] border border-[#424754]/30 flex items-center justify-center shrink-0">
                    <Users className="text-[#ffffff]" size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold tracking-widest uppercase text-[#e2e2e2] mb-1 font-headline">User Research</h4>
                    <p className="text-[#c2c6d6] text-sm font-light">Understanding target demographics requires deep qualitative analysis.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Demo */}
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-24 relative"
          >
            <div className="w-full md:w-1/2 relative h-[400px] rounded-2xl overflow-hidden border border-[#424754]/20 shadow-2xl group">
              <Image src="https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=2070&auto=format&fit=crop" alt="Demo" fill className="object-cover grayscale opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-transparent"></div>
            </div>
            
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-6 md:justify-end">
                <h3 className="text-4xl font-extrabold tracking-tight font-headline text-[#e2e2e2]">Demo</h3>
                <span className="text-5xl font-black text-[#ffffff]/20 font-headline">02</span>
              </div>
              <p className="text-[#c2c6d6] text-lg font-light leading-relaxed mb-8 md:text-right">
                Concepts take physical form. We build high-fidelity interactive prototypes that demonstrate kinetic motion and tactical user flow. Test the product before a single line of code is written.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#1b1b1b] p-6 rounded-xl border border-[#424754]/20 text-center">
                  <MonitorSmartphone className="text-[#ffffff] mb-4 mx-auto" size={24} />
                  <h4 className="text-xs font-bold tracking-widest uppercase text-[#e2e2e2] font-headline mb-2">High-Fidelity</h4>
                  <p className="text-[#c2c6d6] text-xs font-light">Pixel-perfect mockups.</p>
                </div>
                <div className="bg-[#1b1b1b] p-6 rounded-xl border border-[#424754]/20 text-center">
                  <MousePointerClick className="text-[#ffffff] mb-4 mx-auto" size={24} />
                  <h4 className="text-xs font-bold tracking-widest uppercase text-[#e2e2e2] font-headline mb-2">Interactive</h4>
                  <p className="text-[#c2c6d6] text-xs font-light">Clickable prototypes.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Refine */}
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col md:flex-row items-center gap-12 md:gap-24 relative"
          >
            <div className="w-full md:w-1/2 relative h-[400px] rounded-2xl overflow-hidden border border-[#424754]/20 shadow-2xl group">
              <Image src="https://images.unsplash.com/photo-1505909182942-e2f09aee3e89?q=80&w=2072&auto=format&fit=crop" alt="Refine" fill className="object-cover grayscale opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-transparent"></div>
            </div>
            
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-5xl font-black text-[#ffffff]/20 font-headline">03</span>
                <h3 className="text-4xl font-extrabold tracking-tight font-headline text-[#e2e2e2]">Refine</h3>
              </div>
              <p className="text-[#c2c6d6] text-lg font-light leading-relaxed mb-8">
                The final polish. Performance tuning meets typographic precision to ensure your product is as fast as it is beautiful. We optimize for speed, accessibility, and SEO.
              </p>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-4 border-b border-[#424754]/30">
                  <span className="text-sm font-bold tracking-widest uppercase text-[#c2c6d6] font-headline">Performance Score</span>
                  <span className="text-2xl font-extrabold text-[#ffffff] font-headline">100%</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-[#424754]/30">
                  <span className="text-sm font-bold tracking-widest uppercase text-[#c2c6d6] font-headline">Load Velocity</span>
                  <span className="text-2xl font-extrabold text-[#ffffff] font-headline">&lt; 1s</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-[#424754]/30">
                  <span className="text-sm font-bold tracking-widest uppercase text-[#c2c6d6] font-headline">SEO Metrics</span>
                  <span className="text-2xl font-extrabold text-[#ffffff] font-headline">100%</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-8 py-32 text-center max-w-[1440px] mx-auto border-t border-[#424754]/20 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[#ffffff]/5 to-transparent pointer-events-none"></div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-12 font-headline text-[#e2e2e2] relative z-10">
            Ready to build your <br />
            <span className="text-[#ffffff] italic">Studio Obsidian</span>?
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center relative z-10">
            <Link href="/demo" className="bg-gradient-to-r from-[#ffffff] to-[#8c909f] text-[#131313] px-10 py-4 rounded-full font-label text-sm tracking-[0.2em] uppercase font-bold hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all active:scale-95">
              Inquire Now
            </Link>
            <Link href="/#work" className="text-[#e2e2e2] px-10 py-4 rounded-full border border-[#424754]/50 font-label text-sm tracking-[0.2em] uppercase font-bold hover:bg-[#1b1b1b] transition-colors">
              View Work
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

