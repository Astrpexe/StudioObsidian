'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { CheckCircle2, XCircle, Smartphone, Zap, Target, BarChart3, PenTool, Rocket } from 'lucide-react';

export default function Home() {
  return (
    <main className="bg-[#0c0f10] text-[#f8f9fb]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden">
        {/* Monotone Dark Gray Abstract Background */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" 
            alt="Abstract Dark Background" 
            fill 
            className="object-cover opacity-60 grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0c0f10]/80 to-[#0c0f10]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl p-6 md:p-12 rounded-3xl backdrop-blur-2xl bg-white/5 border border-white/10 shadow-2xl"
          >
            <span className="inline-block font-label text-xs md:text-sm uppercase tracking-widest text-[#e2e2e2] font-bold mb-4 md:mb-6">
              High-Performance Web Design
            </span>
            <h1 className="font-headline text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[1.1] md:leading-[1.05] mb-6 md:mb-8">
              <span className="vibrant-gradient-text">We build websites that turn visitors into <span className="italic">customers.</span></span>
            </h1>
            <p className="font-body text-base md:text-2xl font-medium text-[#bfc8cd] max-w-3xl leading-relaxed mb-8 md:mb-12">
              Focused on speed, mobile experience, and conversion-driven design. We transform your digital presence into a measurable growth engine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/demo" className="bg-gradient-to-r from-[#ffffff] to-[#8c909f] text-[#131313] px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg text-center hover:shadow-[0_15px_30px_rgba(255,255,255,0.3)] transition-all active:scale-95">
                Inquire Now
              </Link>
              <Link href="#work" className="bg-white/10 backdrop-blur-md text-white px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg text-center hover:bg-white/20 transition-all border border-white/10">
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-32 bg-[#0c0f10]" id="work">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div 
            initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6"
          >
            <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-white">Selected Projects</h2>
            <p className="text-[#bfc8cd] max-w-md font-body text-lg font-medium">A curation of high-impact digital solutions designed for specific business goals.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Project 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              whileHover={{ y: -10 }} 
              className="group cursor-pointer"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-8 bg-[#1a1f23] border border-white/5 relative shadow-2xl">
                <Image src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="Nexus Analytics" fill className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
              </div>
              <h3 className="font-headline text-2xl font-bold mb-3 text-white">Nexus Analytics</h3>
              <p className="text-[#bfc8cd] text-lg font-medium leading-relaxed">Increased user retention by 42% through streamlined data visualization.</p>
            </motion.div>
            {/* Project 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              whileHover={{ y: -10 }} 
              className="group cursor-pointer lg:mt-16"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-8 bg-[#1a1f23] border border-white/5 relative shadow-2xl">
                <Image src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop" alt="Aura Lifestyle" fill className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
              </div>
              <h3 className="font-headline text-2xl font-bold mb-3 text-white">Aura Lifestyle</h3>
              <p className="text-[#bfc8cd] text-lg font-medium leading-relaxed">Boosted mobile conversion rates by 65% with a 1.2s page load speed.</p>
            </motion.div>
            {/* Project 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              whileHover={{ y: -10 }} 
              className="group cursor-pointer"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-8 bg-[#1a1f23] border border-white/5 relative shadow-2xl">
                <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" alt="Studio Verve" fill className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
              </div>
              <h3 className="font-headline text-2xl font-bold mb-3 text-white">Studio Verve</h3>
              <p className="text-[#bfc8cd] text-lg font-medium leading-relaxed">Doubled inbound inquiries through strategic lead capture placements.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Before vs After Section */}
      <section className="py-20 md:py-32 bg-[#111417]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-16 md:mb-24"
          >
            <h2 className="font-headline text-4xl md:text-8xl font-black mb-6 text-white tracking-tighter">Results that Matter</h2>
            <p className="text-[#bfc8cd] text-lg md:text-xl font-medium">Real transformations for real businesses.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
            {/* Before */}
            <motion.div 
              initial={{ opacity: 0, x: -50, filter: 'blur(10px)' }} 
              whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }} 
              viewport={{ once: false, margin: "-100px" }} 
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6 md:space-y-8"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/5 bg-black aspect-video">
                <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-[#353535] text-[#e2e2e2] text-[10px] md:text-xs uppercase tracking-widest px-3 md:px-4 py-1.5 md:py-2 rounded-full font-bold z-10">Original</div>
                <Image src="https://image2url.com/r2/default/images/1774579649556-241d7dc8-f7cc-42f6-a224-dfd33e7145d0.png" alt="Outdated website" fill className="object-cover opacity-50 grayscale" />
              </div>
              <div className="p-6 md:p-10 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
                <h4 className="font-bold text-lg md:text-xl mb-4 md:mb-6 text-[#e2e2e2] flex items-center gap-3">
                  <XCircle size={24} /> The Issues:
                </h4>
                <ul className="space-y-3 md:space-y-4 text-sm md:text-base font-medium text-[#bfc8cd]">
                  <li className="flex items-start gap-3 md:gap-4"><XCircle size={18} className="mt-0.5 shrink-0" /> Outdated design aesthetic with poor visual hierarchy</li>
                  <li className="flex items-start gap-3 md:gap-4"><XCircle size={18} className="mt-0.5 shrink-0" /> Low contrast text and busy, distracting background imagery</li>
                  <li className="flex items-start gap-3 md:gap-4"><XCircle size={18} className="mt-0.5 shrink-0" /> Unclear call-to-action and overwhelming form structure</li>
                </ul>
              </div>
            </motion.div>
            {/* After */}
            <motion.div 
              initial={{ opacity: 0, x: 50, filter: 'blur(10px)' }} 
              whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }} 
              viewport={{ once: false, margin: "-100px" }} 
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="space-y-6 md:space-y-8"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(255,255,255,0.15)] border-2 md:border-4 border-[#ffffff]/20 bg-black aspect-video">
                <div className="absolute top-4 left-4 md:top-6 md:left-6 vibrant-gradient text-white text-[10px] md:text-xs uppercase tracking-widest px-3 md:px-4 py-1.5 md:py-2 rounded-full font-bold z-10">Optimized</div>
                <Image src="https://image2url.com/r2/default/images/1774579690827-e50dc09f-3e13-4595-b60b-7e5ef4b6669c.png" alt="Modern website" fill className="object-cover" />
              </div>
              <div className="p-6 md:p-10 bg-white/5 backdrop-blur-xl rounded-2xl border border-[#ffffff]/20">
                <h4 className="font-bold text-lg md:text-xl mb-4 md:mb-6 text-[#ffffff] flex items-center gap-3">
                  <CheckCircle2 size={24} /> The Improvement:
                </h4>
                <ul className="space-y-3 md:space-y-4 text-sm md:text-base font-medium text-[#bfc8cd]">
                  <li className="flex items-start gap-3 md:gap-4"><CheckCircle2 size={18} className="mt-0.5 text-[#ffffff] shrink-0" /> High-converting dark mode interface with premium feel</li>
                  <li className="flex items-start gap-3 md:gap-4"><CheckCircle2 size={18} className="mt-0.5 text-[#ffffff] shrink-0" /> Streamlined lead generation form for immediate user action</li>
                  <li className="flex items-start gap-3 md:gap-4"><CheckCircle2 size={18} className="mt-0.5 text-[#ffffff] shrink-0" /> Strong typographic hierarchy and localized trust signals</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 md:py-40 bg-[#0c0f10] relative overflow-hidden" id="approach">
        {/* Monotone Dark Gray Abstract Background */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop" 
            alt="Abstract Dark Background" 
            fill 
            className="object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0f10] via-transparent to-[#0c0f10]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <motion.div 
              initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="lg:sticky lg:top-40 bg-white/5 backdrop-blur-2xl p-8 md:p-10 rounded-3xl border border-white/10 mb-12 lg:mb-0"
            >
              <span className="font-label text-xs md:text-sm uppercase tracking-widest text-[#e2e2e2] font-bold mb-4 md:mb-6 block">Philosophy</span>
              <h2 className="font-headline text-4xl md:text-7xl lg:text-8xl font-black mb-6 md:mb-10 tracking-tighter text-white leading-[1.2] md:leading-[1.05]">Design with <span className="vibrant-gradient-text">digital precision</span>.</h2>
              <p className="font-body text-lg md:text-2xl font-medium text-[#bfc8cd] leading-relaxed mb-8 md:mb-16">
                We don&apos;t just build websites; we engineer digital experiences that act as your 24/7 sales team. Our approach blends psychological triggers with architectural precision to guide users toward the actions that grow your business.
              </p>
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative h-48 md:h-96">
                <Image src="https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=2070&auto=format&fit=crop" alt="Workspace" fill className="object-cover grayscale" />
              </div>
            </motion.div>
            <div className="grid grid-cols-1 gap-6 md:gap-10">
              <motion.div 
                initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                whileHover={{ scale: 1.02 }} 
                className="p-8 md:p-10 bg-white/5 backdrop-blur-xl rounded-3xl group hover:bg-white/10 transition-all border border-white/10 shadow-2xl"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-white/10 flex items-center justify-center text-white mb-6 md:mb-8">
                  <Smartphone size={28} className="md:w-8 md:h-8" />
                </div>
                <h3 className="font-headline text-2xl md:text-3xl font-bold mb-4 text-white">Mobile-First Instinct</h3>
                <p className="text-[#bfc8cd] text-base md:text-lg font-medium leading-relaxed">Over 60% of traffic is mobile. We design for the thumb first, ensuring every interaction is effortless on any screen size.</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                whileHover={{ scale: 1.02 }} 
                className="p-8 md:p-10 bg-white/5 backdrop-blur-xl rounded-3xl group hover:bg-white/10 transition-all border border-white/10 shadow-2xl"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-white/10 flex items-center justify-center text-white mb-6 md:mb-8">
                  <Zap size={28} className="md:w-8 md:h-8" />
                </div>
                <h3 className="font-headline text-2xl md:text-3xl font-bold mb-4 text-white">Velocity & Performance</h3>
                <p className="text-[#bfc8cd] text-base md:text-lg font-medium leading-relaxed">Every millisecond counts. Our code is lean and optimized for speed, improving both user experience and SEO rankings.</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                whileHover={{ scale: 1.02 }} 
                className="p-8 md:p-10 bg-white/5 backdrop-blur-xl rounded-3xl group hover:bg-white/10 transition-all border border-white/10 shadow-2xl"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-white/10 flex items-center justify-center text-white mb-6 md:mb-8">
                  <Target size={28} className="md:w-8 md:h-8" />
                </div>
                <h3 className="font-headline text-2xl md:text-3xl font-bold mb-4 text-white">Conversion-led Flow</h3>
                <p className="text-[#bfc8cd] text-base md:text-lg font-medium leading-relaxed">We map the user journey to eliminate friction and direct visitors toward your primary calls to action.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-[#050607]" id="process">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-20"
          >
            <h2 className="font-headline text-5xl md:text-6xl font-black text-white tracking-tight">The Strategic Path</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Step 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="text-center relative z-10"
            >
              <div className="w-24 h-24 bg-white/5 backdrop-blur-xl rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl border border-white/10">
                <BarChart3 size={36} className="text-white" />
              </div>
              <h3 className="font-headline text-2xl font-bold mb-4 text-white">Analyze</h3>
              <p className="text-[#bfc8cd] text-base font-medium px-4">Deep dive into your business goals, target audience, and current performance metrics.</p>
            </motion.div>
            {/* Step 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="text-center relative z-10"
            >
              <div className="w-24 h-24 bg-white/5 backdrop-blur-xl rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl border border-white/10">
                <PenTool size={36} className="text-white" />
              </div>
              <h3 className="font-headline text-2xl font-bold mb-4 text-white">Demo</h3>
              <p className="text-[#bfc8cd] text-base font-medium px-4">Creating interactive prototypes and visual directions focused on conversion hierarchy.</p>
            </motion.div>
            {/* Step 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="text-center relative z-10"
            >
              <div className="w-24 h-24 bg-white/5 backdrop-blur-xl rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl border border-white/10">
                <Rocket size={36} className="text-white" />
              </div>
              <h3 className="font-headline text-2xl font-bold mb-4 text-white">Refine</h3>
              <p className="text-[#bfc8cd] text-base font-medium px-4">Finalizing the build with performance testing, A/B checks, and seamless deployment.</p>
            </motion.div>
            {/* Connector line */}
            <div className="hidden md:block absolute top-10 left-[20%] right-[20%] h-[1px] bg-white/10"></div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-32 bg-[#0c0f10]">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 40, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white/5 backdrop-blur-2xl rounded-[2rem] md:rounded-[3rem] p-8 md:p-24 text-center relative overflow-hidden border border-white/10 shadow-2xl"
          >
            <div className="absolute inset-0 opacity-30 pointer-events-none">
              <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-white/10 rounded-full blur-[80px] md:blur-[100px]"></div>
              <div className="absolute bottom-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-white/5 rounded-full blur-[80px] md:blur-[100px]"></div>
            </div>
            <h2 className="font-headline text-4xl md:text-7xl lg:text-8xl font-black text-white mb-6 md:mb-8 tracking-tighter relative z-10 leading-tight">Want a better website?</h2>
            <p className="text-[#bfc8cd] text-lg md:text-2xl font-medium mb-8 md:mb-12 max-w-3xl mx-auto relative z-10">
              Let&apos;s build a digital presence that actually drives your business forward. Connect with our team to explore the possibilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Link href="/demo" className="bg-gradient-to-r from-[#ffffff] to-[#8c909f] text-[#131313] px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:shadow-[0_15px_30px_rgba(255,255,255,0.3)] transition-all active:scale-95">
                Inquire Now
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
