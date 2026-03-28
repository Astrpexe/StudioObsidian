'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from './Logo';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { name: 'Work', href: '/#work' },
    { name: 'Process', href: '/process' },
    { name: 'Approach', href: '/approach' },
    { name: 'Inquire', href: '/demo' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-[#131313]/80 backdrop-blur-xl border-b border-[#424754]/15 shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
      <nav className="flex justify-between items-center w-full px-4 md:px-8 py-5 max-w-[1440px] mx-auto">
        <Link href="/" className="flex items-center gap-3 text-xl md:text-2xl font-extrabold tracking-tighter text-[#e2e2e2] font-headline">
          <Logo className="w-6 h-6 md:w-8 md:h-8" />
          Studio Obsidian
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10 font-headline text-sm tracking-widest uppercase font-bold">
          {links.map((link) => {
            const isActive = pathname === link.href || (link.href === '/#work' && pathname === '/');
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`${
                  isActive
                    ? 'text-[#ffffff] border-b border-[#ffffff] pb-1'
                    : 'text-[#c2c6d6] hover:text-[#ffffff]'
                } transition-all duration-300`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/demo"
            className="hidden md:inline-block bg-gradient-to-r from-[#ffffff] to-[#8c909f] text-[#131313] px-6 py-2.5 rounded-full font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] active:scale-95"
          >
            Inquire Now
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-[#e2e2e2] p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#131313] border-b border-[#424754]/15 overflow-hidden"
          >
            <div className="flex flex-col px-4 py-6 gap-6 font-headline text-sm tracking-widest uppercase font-bold">
              {links.map((link) => {
                const isActive = pathname === link.href || (link.href === '/#work' && pathname === '/');
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`${
                      isActive
                        ? 'text-[#ffffff] border-l-2 border-[#ffffff] pl-3'
                        : 'text-[#c2c6d6] hover:text-[#ffffff] pl-3'
                    } transition-all duration-300`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Link
                href="/demo"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-gradient-to-r from-[#ffffff] to-[#8c909f] text-[#131313] px-6 py-3 rounded-full font-bold text-sm tracking-wider uppercase text-center mt-4"
              >
                Inquire Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
