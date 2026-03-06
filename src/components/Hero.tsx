import { motion } from 'framer-motion';
import profileImg from '/src/assets/passppp.JPG';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden overflow-x-hidden bg-transparent dark:bg-dark-900 transition-colors duration-300">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-50 dark:bg-primary-900/20 rounded-full blur-3xl opacity-50 -z-10 translate-x-1/2 -translate-y-1/2 transition-colors duration-300" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50 dark:bg-blue-900/20 rounded-full blur-3xl opacity-50 -z-10 -translate-x-1/2 translate-y-1/2 transition-colors duration-300" />

      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:w-1/2"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 font-medium text-sm mb-6 transition-colors duration-300">
              👋 Hello, I'm Harshal Patil
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6 transition-colors duration-300">
              {/* Creative <br className="hidden md:block" /> */}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-emerald-400 dark:from-primary-400 dark:to-emerald-300">
                Full Stack Developer
              </span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-lg leading-relaxed transition-colors duration-300">
             I build modern full-stack web applications using frontend, backend, databases, and AI technologies to create fast, scalable, and intelligent digital products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#portfolio" className="px-8 py-3.5 bg-primary-600 dark:bg-primary-500 text-white font-medium rounded-full hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors shadow-lg shadow-primary-600/30 dark:shadow-primary-500/20 text-center">
                View My Projects
              </a>
              <a href="#contact" className="px-8 py-3.5 bg-white dark:bg-dark-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-dark-700 font-medium rounded-full hover:bg-slate-50 dark:hover:bg-dark-700 hover:text-slate-900 dark:hover:text-white transition-colors text-center shadow-sm">
                Contact Me
              </a>
            </div>
          </motion.div>

          {/* Visual Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="md:w-1/2 relative"
          >
            <div className="relative w-full aspect-square max-w-[500px] mx-auto z-10">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-600 to-emerald-300 rounded-[2.5rem] rotate-3 opacity-20 dark:opacity-30 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-white dark:bg-dark-800 shadow-2xl dark:shadow-dark-900/50 rounded-[2.5rem] -rotate-3 overflow-hidden border border-slate-100 dark:border-dark-700 flex items-center justify-center transition-all duration-300">
                <img src={profileImg} alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
