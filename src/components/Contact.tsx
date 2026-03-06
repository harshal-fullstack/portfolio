import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-24 bg-white dark:bg-dark-800 transition-colors duration-300">
      <div className="container mxauto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-600 dark:text-primary-400 font-medium text-sm tracking-widest uppercase transition-colors duration-300">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-2 mb-4 transition-colors duration-300">Let's Work Together</h2>
          <div className="w-16 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 bg-slate-50 dark:bg-dark-900 rounded-[2.5rem] p-8 md:p-12 border border-slate-100 dark:border-dark-700 transition-colors duration-300">

          {/* Contact Info */}
          <div className="lg:w-1/3 space-y-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 transition-colors duration-300">Contact Information</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-8 transition-colors duration-300">
              Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 shrink-0 transition-colors duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-1 transition-colors duration-300">Email</h4>
                  <p className="text-slate-600 dark:text-slate-300 transition-colors duration-300">harshalpatil.mh31@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400 shrink-0 transition-colors duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-1 transition-colors duration-300">Phone</h4>
                  <p className="text-slate-600 dark:text-slate-300 transition-colors duration-300">+91 9981029383</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0 transition-colors duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-1 transition-colors duration-300">Location</h4>
                  <p className="text-slate-600 dark:text-slate-300 transition-colors duration-300">Raipur,CG<br />INDIA</p>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              {/* Socials can go here */}
              <a href="https://www.linkedin.com/in/harshal2005/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 dark:bg-dark-700 flex items-center justify-center text-slate-300 dark:text-slate-200 hover:bg-primary-600 dark:hover:bg-primary-500 hover:text-white dark:hover:text-white transition-all shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
              <a href="https://github.com/harshal-fullstack" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 dark:bg-dark-700 flex items-center justify-center text-slate-300 dark:text-slate-200 hover:bg-primary-600 dark:hover:bg-primary-500 hover:text-white dark:hover:text-white transition-all shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
              </a>
              <a href="https://unstop.com/u/harshpat73272" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 dark:bg-dark-700 flex items-center justify-center text-slate-300 dark:text-slate-200 hover:bg-primary-600 dark:hover:bg-primary-500 hover:text-white dark:hover:text-white transition-all shadow-md text-xs font-bold font-mono">
                U
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3 bg-white dark:bg-dark-800 rounded-3xl p-8 shadow-sm dark:shadow-dark-900/50 border border-slate-100 dark:border-dark-700 transition-colors duration-300">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 transition-colors duration-300">Send Me a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors duration-300">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-dark-600 bg-white dark:bg-dark-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors duration-300">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-dark-600 bg-white dark:bg-dark-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors duration-300">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-dark-600 bg-white dark:bg-dark-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent transition-all"
                  placeholder="Project Collaboration"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors duration-300">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-dark-600 bg-white dark:bg-dark-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3.5 bg-slate-900 dark:bg-primary-600 text-white font-medium rounded-full hover:bg-primary-600 dark:hover:bg-primary-500 transition-colors shadow-lg shadow-slate-900/20 dark:shadow-primary-600/20"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
