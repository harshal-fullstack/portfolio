import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Award, GraduationCap } from 'lucide-react';
import vtCertificate from '../assets/vt certificate.jpg';
import pythonCertificate from '../assets/python.pdf';
import githubCertificate from '../assets/Harshal Patil_Certificate_7_8_2024.pdf';
import aiCertificate from '../assets/IIT bombay.pdf';

import c1Img from '../assets/c1.jpg';
import c2Img from '../assets/c2.jpg';
import c3Img from '../assets/c3.jpg';
import c4Img from '../assets/c4.jpg';

export default function Services() {
  const [activeTab, setActiveTab] = useState<'skills' | 'certificates' | 'education'>('skills');

  const tabs = [
    { id: 'skills', label: 'Skills', icon: <Code2 size={20} /> },
    { id: 'certificates', label: 'Certificates', icon: <Award size={20} /> },
    { id: 'education', label: 'Education', icon: <GraduationCap size={20} /> },
  ] as const;

  const renderContent = () => {
    switch (activeTab) {
      case 'skills': {
        const techSkills = [
          { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
          { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
          { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
          { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
          { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
          { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg' },
          { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
          { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
          { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
          { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg' },
          { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
          { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
          { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
          { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg' },
          { name: 'Netlify', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg' },
          { name: 'GitHub Actions', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg' },
        ];

        const tools = [
          { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
          { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
          { name: 'GitLab', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg' },
          { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' },
          { name: 'Cursor', icon: 'https://ui-avatars.com/api/?name=Cursor&background=0D8ABC&color=fff&rounded=true&bold=true' },
          { name: 'Notion', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/notion/notion-original.svg' },
          { name: 'IntelliJ', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg' },
        ];

        return (
          <div className="flex flex-col gap-6">
            <div className="bg-white dark:bg-dark-800 p-6 md:p-8 rounded-2xl border border-slate-100 dark:border-dark-700 shadow-sm transition-all hover:shadow-md dark:shadow-dark-900/50">
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-100 dark:border-dark-700 pb-2 transition-colors duration-300">Technologies & Frameworks</h4>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-y-8 gap-x-4">
                {techSkills.map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center gap-3 group">
                    <div className="w-16 h-16 bg-white dark:bg-dark-700 p-3 rounded-xl border border-slate-100 dark:border-dark-600 shadow-sm group-hover:shadow-md dark:shadow-none group-hover:-translate-y-1 transition-all flex items-center justify-center">
                      <img src={skill.icon} alt={skill.name} title={skill.name} className="w-full h-full object-contain" />
                    </div>
                    <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 text-center transition-colors duration-300">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-dark-800 p-6 md:p-8 rounded-2xl border border-slate-100 dark:border-dark-700 shadow-sm transition-all hover:shadow-md dark:shadow-dark-900/50">
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-100 dark:border-dark-700 pb-2 transition-colors duration-300">Tools I Use</h4>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-y-8 gap-x-4">
                {tools.map((tool) => (
                  <div key={tool.name} className="flex flex-col items-center gap-3 group">
                    <div className="w-16 h-16 bg-white dark:bg-dark-700 p-3 rounded-xl border border-slate-100 dark:border-dark-600 shadow-sm group-hover:shadow-md dark:shadow-none group-hover:-translate-y-1 transition-all flex items-center justify-center">
                      <img src={tool.icon} alt={tool.name} title={tool.name} className="w-full h-full object-contain" />
                    </div>
                    <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 text-center transition-colors duration-300">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      }
      case 'certificates': {
        const certs = [
          {
            title: 'Full Stack Web using AI',
            org: 'Skyvo Technologies (Offline)',
            date: 'July - Sept 2025',
            file: vtCertificate,
            image: c1Img
          },
          {
            title: 'Python for Beginners',
            org: 'NIELIT Calicut (Online)',
            date: 'March 7-11, 2025 (5 Days/5 Hrs)',
            file: pythonCertificate,
            image: c2Img
          },
          {
            title: 'Intro to GitHub Workflows & Actions',
            org: 'Live Session (Flutter App)',
            date: '2024',
            file: githubCertificate,
            image: c3Img
          },
          {
            title: 'Artificial Intelligence',
            org: 'IIT Bombay',
            date: 'May 1 - July 1, 2025',
            file: aiCertificate,
            image: c4Img
          }
        ];

        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {certs.map((cert) => (
              <div
                key={cert.title}
                className="bg-white dark:bg-dark-800 rounded-[2rem] border border-slate-100 dark:border-dark-700 shadow-sm flex flex-col overflow-hidden transition-all hover:shadow-xl dark:shadow-dark-900/50 hover:border-primary-200 dark:hover:border-primary-500/50 hover:-translate-y-1 group"
              >
                {/* Image Placeholder Area */}
                <div className="w-full h-48 bg-slate-100 dark:bg-dark-700 relative overflow-hidden flex items-center justify-center transition-colors duration-300">
                  <img src={cert.image} alt={cert.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                {/* Content Area */}
                <div className="p-8 flex flex-col flex-1">
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 leading-tight group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{cert.title}</h4>
                  <div className="flex-1 space-y-2 mb-6">
                    <p className="text-slate-600 dark:text-slate-300 font-medium transition-colors duration-300">{cert.org}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 transition-colors duration-300">{cert.date}</p>
                  </div>

                  <div className="flex gap-3 mt-auto pt-2">
                    <a
                      href={cert.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 bg-primary-600 dark:bg-primary-500 text-white text-sm font-semibold rounded-xl hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors shadow-md shadow-primary-600/20 dark:shadow-primary-500/20"
                    >
                      View Certificate
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      }
      case 'education': {
        const educations = [
          {
            title: 'B.Tech in Computer Science and Engineering',
            school: 'BIT Durg',
            date: 'Pre-Final Year (Expected 2027)',
            desc: 'Focusing on core computer science subjects, software engineering principles, algorithms, and full-stack web development. Active in building real-world projects to solve practical problems.'
          },
          {
            title: '12th Standard (CBSE Board)',
            school: 'Chhattisgarh Public School, Raipur CG',
            date: 'Passed 2023',
            desc: 'Completed Higher Secondary Education.'
          },
          {
            title: '10th Standard (CBSE Board)',
            school: 'Chhattisgarh Public School, Raipur CG',
            date: 'Passed 2021',
            desc: 'Completed Secondary Education.'
          }
        ];

        return (
          <div className="bg-white dark:bg-dark-800 p-6 md:p-10 rounded-2xl border border-slate-100 dark:border-dark-700 shadow-sm relative overflow-hidden transition-colors duration-300">
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary-50 dark:bg-primary-900/10 rounded-full -mr-16 -mt-16 blur-2xl transition-colors duration-300"></div>
            <div className="relative z-10 border-l-2 border-primary-200 dark:border-primary-900/50 pl-8 ml-4 space-y-12">
              {educations.map((edu, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-primary-500 dark:bg-primary-400 border-4 border-white dark:border-dark-800 shadow-sm group-hover:scale-125 transition-all duration-300"></div>
                  <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-1 transition-colors duration-300">{edu.title}</h4>
                  <p className="text-primary-600 dark:text-primary-400 font-semibold mb-3 transition-colors duration-300">{edu.school}</p>
                  <div className="inline-flex items-center px-4 py-1.5 bg-slate-100 dark:bg-dark-700 text-slate-700 dark:text-slate-300 text-xs font-bold rounded-full mb-4 group-hover:bg-primary-50 dark:group-hover:bg-primary-900/30 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors duration-300">
                    {edu.date}
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl transition-colors duration-300">
                    {edu.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );
      }
    }
  };

  return (
    <section id="services" className="py-24 bg-slate-50 dark:bg-dark-900 relative transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary-600 dark:text-primary-400 font-medium text-sm tracking-widest uppercase transition-colors duration-300">My Qualifications</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-2 mb-4 transition-colors duration-300">Background & Expertise</h2>
          <div className="w-16 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Tab Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10 w-full">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300 w-full sm:w-auto ${activeTab === tab.id
                ? 'bg-primary-600 text-white shadow-xl shadow-primary-600/30 scale-105'
                : 'bg-white dark:bg-dark-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-dark-700 border border-slate-200 dark:border-dark-600 hover:scale-105'
                }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Box */}
        <div className="bg-slate-200/50 dark:bg-dark-800/50 p-3 sm:p-5 rounded-[2.5rem] border border-slate-200/60 dark:border-dark-700/60 shadow-inner transition-colors duration-300">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.98, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -15 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="min-h-[300px]"
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
