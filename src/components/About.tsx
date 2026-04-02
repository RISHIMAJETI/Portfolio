import { motion } from "framer-motion";
import { MapPin, GraduationCap, User, School, BookOpen } from "lucide-react";

const education = [
  {
    icon: GraduationCap,
    degree: "B.E / B.Tech — CSE",
    institution: "East Point College of Engineering and Technology",
    year: "2022–Present",
    score: "GPA: 7.1",
  },
  {
    icon: BookOpen,
    degree: "Intermediate — MPC",
    institution: "Sri Bhavishya Junior College, Vijayawada",
    year: "2020–2022",
    score: "70%",
  },
  {
    icon: School,
    degree: "SSC — State Board",
    institution: "Narayana IIT Olympiad School, Vijayawada",
    year: "2019–2020",
    score: "GPA: 10.0",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-5xl font-display font-bold text-center mb-16"
        >
          <span className="text-gradient">About Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* Left - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 5, rotateX: -5 }}
              className="relative w-64 h-64 sm:w-80 sm:h-80"
              style={{ perspective: "1000px" }}
            >
              {/* Glow Border */}
              <div className="absolute inset-0 rounded-2xl neon-border animate-pulse-glow" />

              {/* Image */}
              <div className="absolute inset-2 rounded-xl glass overflow-hidden">
                <img
                  src="/rishi.jpeg"
                  alt="Rishi Profile"
                  className="w-full h-full object-cover rounded-xl transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Rotating Border */}
              <div
                className="absolute -inset-4 rounded-2xl border border-primary/10 animate-spin-slow"
                style={{ animationDuration: "30s" }}
              />
            </motion.div>
          </motion.div>

          {/* Right - Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-display font-bold text-foreground">
              M Anantha Krishna Rishi
            </h3>

            <p className="text-primary font-display text-lg tracking-wider">
              Frontend Developer & Data Science Enthusiast
            </p>

            <p className="text-muted-foreground font-body leading-relaxed">
              Passionate Computer Science student with a strong foundation in programming,
              data science, and machine learning. Eager to explore data-driven solutions and
              contribute to impactful projects through continuous learning and teamwork.
            </p>

            {/* Location */}
            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center gap-3 glass rounded-xl px-4 py-3 neon-border"
            >
              <MapPin size={20} className="text-primary flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-foreground font-body">
                  Location
                </p>
                <p className="text-xs text-muted-foreground">
                  Hyderabad, India
                </p>
              </div>
            </motion.div>

            {/* Education */}
            <div className="pt-2">
              <h4 className="text-lg font-display font-bold text-foreground mb-4 flex items-center gap-2">
                <GraduationCap size={20} className="text-primary" />
                Education
              </h4>

              <div className="space-y-3">
                {education.map((edu, i) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.15 }}
                    whileHover={{ x: 5, scale: 1.01 }}
                    className="flex items-start gap-3 glass rounded-xl px-4 py-3 neon-border group"
                  >
                    <edu.icon
                      size={18}
                      className="text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform"
                    />

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-sm font-semibold text-foreground font-body">
                          {edu.degree}
                        </p>
                        <span className="text-xs font-mono text-primary font-bold whitespace-nowrap">
                          {edu.score}
                        </span>
                      </div>

                      <p className="text-xs text-muted-foreground">
                        {edu.institution}
                      </p>

                      <p className="text-xs text-muted-foreground/60 font-mono">
                        {edu.year}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;