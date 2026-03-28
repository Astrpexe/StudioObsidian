'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

import { useState } from 'react';

export default function Demo() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    website: '',
    goals: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        alert('Oops! There was a problem submitting your form');
      }
    } catch (error) {
      alert('Oops! There was a problem submitting your form');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="pt-32 pb-24 px-8 max-w-[1440px] mx-auto min-h-screen bg-[#131313]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left Column: Content & Social Proof */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 space-y-20"
        >
          <section>
            <span className="inline-block px-4 py-1.5 bg-[#2a2a2a] text-[#ffffff] font-label text-[10px] tracking-[0.2em] uppercase rounded-full mb-8">
              Exclusive Opportunity
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#e2e2e2] leading-[1.1] mb-8 font-headline">
              Ready for a <span className="text-[#ffffff] italic">better</span> website?
            </h1>
            <p className="text-xl text-[#c2c6d6] leading-relaxed max-w-lg">
              We can create a free preview for your business. No strings attached, just pure architectural design focused on your conversion goals.
            </p>
          </section>

          {/* Bento Style Trust Signals */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-8 bg-[#1b1b1b] rounded-xl border border-[#424754]/10 hover:border-[#ffffff]/30 transition-colors">
              <div className="text-4xl font-black text-[#e2e2e2] mb-2 font-headline">100%</div>
              <div className="text-xs text-[#c2c6d6] uppercase tracking-widest font-label">Custom Built</div>
            </div>
            <div className="p-8 bg-[#1b1b1b] rounded-xl border border-[#424754]/10 hover:border-[#ffffff]/30 transition-colors">
              <div className="text-4xl font-black text-[#e2e2e2] mb-2 font-headline">0</div>
              <div className="text-xs text-[#c2c6d6] uppercase tracking-widest font-label">Templates Used</div>
            </div>
            <div className="col-span-2 p-8 bg-[#2a2a2a] rounded-xl border border-[#424754]/10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#ffffff]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex items-center gap-4 mb-4 relative z-10">
                <div className="flex -space-x-3">
                  <Image src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=40&auto=format&fit=crop" alt="User" width={40} height={40} className="rounded-full border-2 border-[#131313]" />
                  <Image src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=40&auto=format&fit=crop" alt="User" width={40} height={40} className="rounded-full border-2 border-[#131313]" />
                  <Image src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=40&auto=format&fit=crop" alt="User" width={40} height={40} className="rounded-full border-2 border-[#131313]" />
                </div>
                <div className="text-sm text-[#e2e2e2] font-bold">Trusted by 50+ Brands</div>
              </div>
              <p className="text-[#c2c6d6] text-sm italic relative z-10">&quot;The conversion rate doubled within the first month of launch.&quot;</p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: The Form */}
        <div className="lg:col-span-7">
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="bg-[#1b1b1b] p-10 md:p-16 rounded-2xl border border-[#424754]/15 shadow-2xl relative overflow-hidden"
          >
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#ffffff]/5 rounded-full blur-[80px] pointer-events-none"></div>

            {isSubmitted ? (
              <div className="text-center py-20 space-y-6">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto text-green-500">
                  <CheckCircle2 size={40} />
                </div>
                <h2 className="text-3xl font-bold text-[#e2e2e2] font-headline">Success</h2>
                <p className="text-[#c2c6d6]">Your form has been successfully sent. We will contact you shortly.</p>
                <button 
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ firstName: '', lastName: '', email: '', website: '', goals: '' });
                  }}
                  className="text-[#ffffff] font-bold text-sm tracking-widest uppercase flex items-center justify-center gap-2 mx-auto hover:gap-4 transition-all mt-8"
                >
                  Submit another request <ArrowRight size={16} />
                </button>
              </div>
            ) : (
              <>
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-[#e2e2e2] mb-4 font-headline">Start a Conversation</h2>
                  <p className="text-[#c2c6d6] text-sm">Fill out the details below. Our team will review your current digital presence and reach out to discuss potential improvements.</p>
                </div>

                <form className="space-y-8 relative z-10" action="https://formspree.io/f/xeepezaq" method="POST" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label htmlFor="firstName" className="block text-xs font-bold text-[#c2c6d6] uppercase tracking-widest font-label">First Name</label>
                      <div className="relative">
                        <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full bg-[#131313] border border-[#424754]/30 rounded-lg px-5 py-4 text-[#e2e2e2] focus:outline-none focus:border-[#ffffff] focus:ring-1 focus:ring-[#ffffff] transition-all pr-12" placeholder="John" required />
                        {formData.firstName.trim() !== '' && (
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500">
                            <CheckCircle2 size={20} />
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label htmlFor="lastName" className="block text-xs font-bold text-[#c2c6d6] uppercase tracking-widest font-label">Last Name</label>
                      <div className="relative">
                        <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full bg-[#131313] border border-[#424754]/30 rounded-lg px-5 py-4 text-[#e2e2e2] focus:outline-none focus:border-[#ffffff] focus:ring-1 focus:ring-[#ffffff] transition-all pr-12" placeholder="Doe" required />
                        {formData.lastName.trim() !== '' && (
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500">
                            <CheckCircle2 size={20} />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="email" className="block text-xs font-bold text-[#c2c6d6] uppercase tracking-widest font-label">Work Email</label>
                    <div className="relative">
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-[#131313] border border-[#424754]/30 rounded-lg px-5 py-4 text-[#e2e2e2] focus:outline-none focus:border-[#ffffff] focus:ring-1 focus:ring-[#ffffff] transition-all pr-12" placeholder="john@company.com" required />
                      {formData.email.trim() !== '' && (
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500">
                          <CheckCircle2 size={20} />
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="website" className="block text-xs font-bold text-[#c2c6d6] uppercase tracking-widest font-label">Current Website URL</label>
                    <div className="relative">
                      <input type="url" id="website" name="website" value={formData.website} onChange={handleChange} className="w-full bg-[#131313] border border-[#424754]/30 rounded-lg px-5 py-4 text-[#e2e2e2] focus:outline-none focus:border-[#ffffff] focus:ring-1 focus:ring-[#ffffff] transition-all pr-12" placeholder="https://www.yourcompany.com" required />
                      {formData.website.trim() !== '' && (
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500">
                          <CheckCircle2 size={20} />
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="goals" className="block text-xs font-bold text-[#c2c6d6] uppercase tracking-widest font-label">Primary Goal</label>
                    <div className="relative">
                      <select id="goals" name="goals" value={formData.goals} onChange={handleChange} className="w-full bg-[#131313] border border-[#424754]/30 rounded-lg px-5 py-4 text-[#e2e2e2] focus:outline-none focus:border-[#ffffff] focus:ring-1 focus:ring-[#ffffff] transition-all appearance-none cursor-pointer pr-12" required>
                        <option value="" disabled>Select your main objective...</option>
                        <option value="leads">Increase Lead Generation</option>
                        <option value="sales">Boost E-commerce Sales</option>
                        <option value="brand">Elevate Brand Perception</option>
                        <option value="speed">Improve Site Speed & SEO</option>
                      </select>
                      {formData.goals.trim() !== '' && (
                        <div className="absolute right-10 top-1/2 -translate-y-1/2 text-green-500 pointer-events-none">
                          <CheckCircle2 size={20} />
                        </div>
                      )}
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-[#8c909f]">
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-[#ffffff] to-[#8c909f] text-[#131313] font-bold text-sm tracking-widest uppercase py-5 rounded-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all active:scale-[0.98] flex items-center justify-center gap-3 mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-[#131313]/30 border-t-[#131313] rounded-full"
                        />
                        Processing...
                      </>
                    ) : (
                      <>
                        Submit Request <ArrowRight size={18} />
                      </>
                    )}
                  </button>
                  
                  <p className="text-center text-[#8c909f] text-xs mt-6">
                    By submitting, you agree to our privacy policy. We never share your data.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </main>
  );
}
