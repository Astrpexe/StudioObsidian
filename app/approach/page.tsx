'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Terminal, Smartphone, BarChart, Zap } from 'lucide-react';

export default function Approach() {
  return (
    <main className="pt-24 md:pt-32 bg-[#131313] min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen md:min-h-[819px] px-6 md:px-8 mb-16 md:mb-24 flex flex-col items-start max-w-[1440px] mx-auto">
        <div className="w-full flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-end mb-12 md:mb-20 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full md:w-2/3"
          >
            <span className="font-label text-xs md:text-sm text-[#ffffff] tracking-[0.2em] uppercase font-bold mb-4 block">Our Philosophy</span>
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-black tracking-tighter text-[#e2e2e2] leading-[1.2] md:leading-[0.9] mb-8 font-headline">
              The Science of <br /> <span className="bg-gradient-to-r from-[#ffffff] to-[#8c909f] bg-clip-text text-transparent">Digital Precision</span>
            </h1>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="w-full md:w-1/3 pb-0 md:pb-4"
          >
            <p className="text-[#c2c6d6] text-base md:text-lg leading-relaxed max-w-sm">
              We don&apos;t just build websites. We engineer high-performance visual ecosystems where architectural depth meets conversion-led strategy.
            </p>
          </motion.div>
        </div>
        
        {/* Motherboard Background */}
        <div className="relative w-full h-[350px] md:h-[600px] overflow-hidden rounded-xl border border-[#424754]/15 group">
          <Image 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop" 
            alt="Motherboard CPU" 
            fill 
            className="object-cover grayscale opacity-50 group-hover:opacity-70 transition-all duration-1000 ease-in-out scale-105 group-hover:scale-100" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-transparent to-transparent z-10"></div>
          
          {/* Floating Glass Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
            className="absolute bottom-6 right-6 md:bottom-12 right-12 glass-panel p-6 md:p-8 max-w-[calc(100%-3rem)] md:max-w-md rounded-xl border border-[#424754]/10 shadow-2xl z-20"
          >
            <Terminal className="text-[#ffffff] mb-4 w-6 h-6 md:w-9 md:h-9" />
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-[#e2e2e2] font-headline">Performance as a Standard</h3>
            <p className="text-[#c2c6d6] text-xs md:text-sm tracking-wide">Every pixel is accounted for. Every millisecond is reclaimed. Our approach is rooted in the belief that speed is the ultimate luxury in a digital-first world.</p>
          </motion.div>
        </div>
      </section>

      {/* Bento Grid Approach Pillars */}
      <section className="px-6 md:px-8 max-w-[1440px] mx-auto mb-20 md:mb-40">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {/* Mobile-First Strategy */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-7 bg-[#1b1b1b] p-8 md:p-12 rounded-xl flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                <Smartphone className="text-[#ffffff]" size={24} />
                <span className="font-label text-xs md:text-sm text-[#c2c6d6] tracking-widest uppercase">Pillar 01</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight text-[#e2e2e2] font-headline">Mobile-First <br />Fluidity</h2>
              <p className="text-[#c2c6d6] text-base md:text-lg max-w-md">
                We design for the palm of the hand first. By prioritizing constrained viewports, we distill your message to its most potent form, ensuring seamless transitions across every tier of hardware.
              </p>
            </div>
            <div className="mt-8 md:mt-12 h-48 md:h-64 bg-[#353535] rounded-lg relative overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=2070&auto=format&fit=crop" alt="Mobile phone" fill className="object-cover grayscale opacity-50 group-hover:opacity-80 transition-opacity duration-700" />
            </div>
          </motion.div>

          {/* Conversion-Led Design */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="md:col-span-5 bg-[#2a2a2a] p-8 md:p-12 rounded-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                <BarChart className="text-[#ffffff]" size={24} />
                <span className="font-label text-xs md:text-sm text-[#c2c6d6] tracking-widest uppercase">Pillar 02</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight text-[#e2e2e2] font-headline">Conversion <br />Architecture</h2>
              <p className="text-[#c2c6d6] text-sm md:text-base">
                Beauty is a metric. We utilize eye-tracking data and psychological triggers to map the user&apos;s journey from curiosity to commitment.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-[#424754]/10">
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-[#e2e2e2]">
                  <div className="w-4 h-4 rounded-full bg-[#ffffff] flex items-center justify-center"><div className="w-2 h-2 bg-[#131313] rounded-full"></div></div>
                  <span className="text-xs md:text-sm font-medium tracking-wide text-wrap">F-Pattern Visual Hierarchy</span>
                </li>
                <li className="flex items-center gap-3 text-[#e2e2e2]">
                  <div className="w-4 h-4 rounded-full bg-[#ffffff] flex items-center justify-center"><div className="w-2 h-2 bg-[#131313] rounded-full"></div></div>
                  <span className="text-xs md:text-sm font-medium tracking-wide text-wrap">Cognitive Load Reduction</span>
                </li>
                <li className="flex items-center gap-3 text-[#e2e2e2]">
                  <div className="w-4 h-4 rounded-full bg-[#ffffff] flex items-center justify-center"><div className="w-2 h-2 bg-[#131313] rounded-full"></div></div>
                  <span className="text-xs md:text-sm font-medium tracking-wide text-wrap">Persistent Call-to-Actions</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Speed-Optimized Engineering */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            className="md:col-span-12 bg-[#0e0e0e] p-8 md:p-16 rounded-xl border border-[#424754]/10 relative overflow-hidden flex flex-col md:flex-row items-center gap-8 md:gap-12"
          >
            <div className="relative z-10 md:w-1/2">
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                <Zap className="text-[#ffffff]" size={24} />
                <span className="font-label text-xs md:text-sm text-[#c2c6d6] tracking-widest uppercase">Pillar 03</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight text-[#e2e2e2] font-headline">Optimized For <br />Zero-Lag Intensity</h2>
              <p className="text-[#c2c6d6] text-base md:text-lg">
                We treat code like fine machinery. Our &quot;Architectural Void&quot; system ensures minimal script weight, next-gen image compression, and server-side excellence that achieves perfect Lighthouse scores.
              </p>
            </div>
            <div className="w-full md:w-1/2 grid grid-cols-2 gap-3 md:gap-4 relative z-10">
              <div className="bg-[#2a2a2a] p-3 md:p-8 rounded-lg text-center">
                <div className="text-[#ffffff] text-xl md:text-4xl font-black mb-1 md:mb-2 font-headline">99.9</div>
                <div className="font-label text-[9px] md:text-sm opacity-60 text-[#e2e2e2] uppercase tracking-normal">Performance Score</div>
              </div>
              <div className="bg-[#2a2a2a] p-3 md:p-8 rounded-lg text-center">
                <div className="text-[#ffffff] text-xl md:text-4xl font-black mb-1 md:mb-2 font-headline">&lt; 1s</div>
                <div className="font-label text-[9px] md:text-sm opacity-60 text-[#e2e2e2] uppercase tracking-normal">Load Velocity</div>
              </div>
            </div>
            <div className="absolute -right-20 -bottom-20 w-64 md:w-96 h-64 md:h-96 bg-[#ffffff]/10 rounded-full blur-[80px] md:blur-[120px]"></div>
          </motion.div>
        </div>
      </section>

      {/* Deep Content Section */}
      <section className="bg-[#0e0e0e] py-20 md:py-40 px-6 md:px-8 mb-20 md:mb-40">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative group overflow-hidden rounded-xl"
          >
            <div className="relative w-full h-[400px] md:h-[600px]">
              <Image 
                src="https://image2url.com/r2/default/images/1774580536511-c51fc779-4ab7-4deb-8686-f916188b9920.jpg" 
                alt="Comet ripping through the night sky" 
                fill
                className="object-cover grayscale opacity-80 transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100" 
              />
            </div>
            
            <div className="absolute -top-12 -left-12 w-32 md:w-48 h-32 md:h-48 border border-[#ffffff]/20 rounded-full"></div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-16 tracking-tight text-[#e2e2e2] font-headline">The Obsidian Standard</h2>
            <div className="space-y-8 md:space-y-16">
              <div className="flex gap-4 md:gap-6">
                <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#ffffff]/30 flex items-center justify-center font-bold text-[#ffffff] text-sm md:text-base">01</div>
                <div>
                  <h4 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-[#e2e2e2] font-headline">Contextual Relevance</h4>
                  <p className="text-[#c2c6d6] text-sm md:text-base leading-relaxed">We don&apos;t follow trends; we observe behaviors. Your design is tailor-made to solve the specific friction points of your unique audience.</p>
                </div>
              </div>
              <div className="flex gap-4 md:gap-6">
                <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#ffffff]/30 flex items-center justify-center font-bold text-[#ffffff] text-sm md:text-base">02</div>
                <div>
                  <h4 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-[#e2e2e2] font-headline">Visual Authority</h4>
                  <p className="text-[#c2c6d6] text-sm md:text-base leading-relaxed">By utilizing our architectural spacing and high-contrast tonal layering, your brand projects a sense of permanence and professional stability.</p>
                </div>
              </div>
              <div className="flex gap-4 md:gap-6">
                <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#ffffff]/30 flex items-center justify-center font-bold text-[#ffffff] text-sm md:text-base">03</div>
                <div>
                  <h4 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-[#e2e2e2] font-headline">Adaptive Scaling</h4>
                  <p className="text-[#c2c6d6] text-sm md:text-base leading-relaxed">Future-proofing is built into the core. Our design systems are modular, allowing your platform to grow without breaking its visual integrity.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-8 max-w-[1440px] mx-auto mb-20 md:mb-40 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="py-16 md:py-32 border-y border-[#424754]/15"
        >
          <h2 className="text-3xl md:text-7xl font-black tracking-tighter mb-8 md:mb-12 text-[#e2e2e2] font-headline leading-tight">Ready for the <br />Obsidian Upgrade?</h2>
          <Link href="/demo" className="bg-gradient-to-r from-[#ffffff] to-[#8c909f] text-[#131313] font-headline text-sm md:text-lg tracking-widest uppercase font-black py-4 md:py-6 px-10 md:px-16 rounded-full active:scale-95 transition-all shadow-xl shadow-[#ffffff]/20 inline-block">
            Inquire Now
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
