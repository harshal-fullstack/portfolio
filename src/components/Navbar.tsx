import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#services' },
  { name: 'Projects', href: '#portfolio' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-dark-900/90 backdrop-blur-md shadow-sm dark:shadow-dark-800/50 py-4 border-b border-transparent dark:border-dark-800' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 max-w-6xl flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:bg-primary-500 transition-colors shadow-sm dark:shadow-none">
            HP
          </div>
          <span className="font-bold text-2xl tracking-tight text-slate-800 dark:text-white">Harry.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 lg:gap-8 items-center">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              {item.name}
            </a>
          ))}
          <div className="flex items-center gap-4 border-l border-slate-200 dark:border-dark-700 pl-4 lg:pl-6 ml-2">
            <ThemeToggle />
            <a href="#contact" className="px-5 py-2.5 bg-slate-900 dark:bg-primary-600 text-white text-sm font-medium rounded-full hover:bg-primary-600 dark:hover:bg-primary-500 transition-colors shadow-lg shadow-slate-900/20 dark:shadow-primary-600/20">
              Let's Talk
            </a>
          </div>
        </nav>

        {/* Mobile Menu Actions */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button 
            className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-dark-800 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-dark-900 border-t border-slate-100 dark:border-dark-800 overflow-hidden shadow-lg"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 py-3 border-b border-slate-50 dark:border-dark-800/50 last:border-0"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
