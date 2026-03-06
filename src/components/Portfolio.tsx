import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web App',
      imageClass: 'from-blue-400 to-indigo-500',
    },
    {
      title: 'Financial Dashboard',
      category: 'UI Design & Dev',
      imageClass: 'from-emerald-400 to-teal-500',
    },
    {
      title: 'Social Media Manager',
      category: 'Full Stack',
      imageClass: 'from-purple-400 to-pink-500',
    },
    {
      title: 'Real Estate Portal',
      category: 'Frontend',
      imageClass: 'from-orange-400 to-red-500',
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-slate-50 dark:bg-dark-900 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-600 dark:text-primary-400 font-medium text-sm tracking-widest uppercase transition-colors duration-300">My Works</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-2 mb-4 transition-colors duration-300">Featured Projects</h2>
          <div className="w-16 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden cursor-pointer shadow-md dark:shadow-dark-900/50 hover:shadow-2xl transition-all"
            >
              {/* Dummy Image Replacement using gradients */}
              <div className={`w-full aspect-video bg-gradient-to-br ${project.imageClass} flex items-center justify-center`}>
                <span className="text-white/80 font-bold text-2xl tracking-wider select-none mix-blend-overlay">PROJECT PREVIEW</span>
              </div>
              
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-slate-900/80 dark:bg-dark-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-primary-400 dark:text-primary-300 font-medium text-sm mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  {project.title}
                </h3>
                <div className="flex gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                  <a href="#" className="w-10 h-10 rounded-full bg-white/20 hover:bg-primary-600 flex items-center justify-center text-white backdrop-blur-sm transition-colors">
                    <ExternalLink size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/20 hover:bg-primary-600 flex items-center justify-center text-white backdrop-blur-sm transition-colors">
                    <Github size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
