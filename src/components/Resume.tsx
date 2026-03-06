import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';
import resumeUrl from '../assets/Harshalcvvv.pdf';

export default function Resume() {
  return (
    <section id="resume" className="py-24 bg-white dark:bg-dark-800 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-600 dark:text-primary-400 font-medium text-sm tracking-widest uppercase transition-colors duration-300">My Resume</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-2 mb-4 transition-colors duration-300">Curriculum Vitae</h2>
          <div className="w-16 h-1 bg-primary-600 mx-auto rounded-full mb-8"></div>
          
          <div className="flex justify-center gap-4">
            <a 
              href={resumeUrl}
              download="Harshal_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 dark:bg-primary-500 text-white font-medium rounded-full hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors shadow-lg shadow-primary-600/30 dark:shadow-primary-500/20"
            >
              <Download size={20} />
              Download PDF
            </a>
            <a 
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 dark:bg-dark-700 text-slate-700 dark:text-slate-200 font-medium rounded-full hover:bg-slate-200 dark:hover:bg-dark-600 transition-colors"
            >
              <FileText size={20} />
              Open in New Tab
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-4xl mx-auto flex flex-col items-center bg-slate-50 dark:bg-dark-900 rounded-[2rem] p-4 md:p-8 border border-slate-100 dark:border-dark-700 shadow-xl dark:shadow-none transition-colors duration-300"
        >
          <div className="w-full h-[600px] md:h-[800px] bg-white dark:bg-dark-800 rounded-2xl overflow-hidden shadow-inner border border-slate-200 dark:border-dark-600 relative transition-colors duration-300">
            <iframe 
              src={`${resumeUrl}#view=FitH`}
              className="w-full h-full border-0 absolute inset-0"
              title="Resume Document"
            >
              <p className="dark:text-slate-300">Your browser does not support PDFs. <a href={resumeUrl} className="text-primary-600 dark:text-primary-400">Download the PDF</a>.</p>
            </iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
