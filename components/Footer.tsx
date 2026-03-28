import Link from 'next/link';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="w-full py-20 px-8 bg-[#0e0e0e] border-t border-[#424754]/10">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link href="/" className="flex items-center gap-3 text-xl font-extrabold text-[#e2e2e2] font-headline">
              <Logo className="w-6 h-6" />
              Studio Obsidian
            </Link>
            <p className="font-headline text-xs tracking-widest uppercase text-[#c2c6d6] max-w-xs text-center md:text-left">
              Creating definitive digital experiences through precision and deep space aesthetics.
            </p>
          </div>
          <div className="flex gap-8 font-headline text-xs tracking-widest uppercase text-[#c2c6d6] font-bold">
            <span>- Get more customers with a website.</span>
          </div>
          <div className="font-headline text-xs tracking-widest uppercase text-[#c2c6d6] font-bold">
            © 2024 Studio Obsidian. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
