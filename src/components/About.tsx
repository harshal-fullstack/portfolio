import { motion } from 'framer-motion';

export default function About() {
  const skills = [
    { name: 'React & Vite', level: '90%' },
    { name: 'Tailwind CSS', level: '95%' },
    { name: 'TypeScript', level: '85%' },
    { name: 'Node.js', level: '75%' },
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-dark-900 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-600 dark:text-primary-400 font-medium text-sm tracking-widest uppercase transition-colors duration-300">About Me</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-2 mb-4 transition-colors duration-300">Behind the Code</h2>
          <div className="w-16 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed text-lg transition-colors duration-300"
          >
            <p>
            👋 Hi, I’m <b>Harshal Patil</b>
            <br />
            💻 I’m a <b>Full Stack Developer</b> passionate about building and designing modern web applications.<br></br>
            🎓 Currently Pre-Final Year <b>B.Tech CSE(core) student at BIT Durg</b><br></br>
            <br />
            🚀 Skilled in:<br></br>
            --Frontend: HTML, CSS, Bootstrap, React, Angular<br></br>
            --Backend: Node.js<br></br>
            --Database & project development<br></br>
            <br />
            🎯 I love creating websites and working on real-world projects that solve problems.
            <br />
            🌱 Always learning, always building!!
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-1/2 w-full"
          >
            <div className="bg-white dark:bg-dark-800 p-8 rounded-3xl shadow-lg dark:shadow-dark-900/50 border border-slate-100 dark:border-dark-700 transition-colors duration-300">
              <h3 className="text-2xl font-semibold mb-6 text-slate-900 dark:text-white transition-colors duration-300">Core Skills</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-slate-700 dark:text-slate-200 transition-colors duration-300">{skill.name}</span>
                      <span className="text-primary-600 dark:text-primary-400 font-semibold transition-colors duration-300">{skill.level}</span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-dark-700 rounded-full h-2.5 transition-colors duration-300">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.level }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="bg-primary-600 h-2.5 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
