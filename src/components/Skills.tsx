import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface Skill {
  name: string;
  icon: string;
  level: number;
  category: string;
  color: string;
}

const skills: Skill[] = [
  // Languages (from resume)
  { name: "C", icon: "c", level: 80, category: "Languages", color: "#A8B9CC" },
  { name: "Java", icon: "java", level: 85, category: "Languages", color: "#ED8B00" },
  { name: "Python", icon: "python", level: 90, category: "Languages", color: "#3776AB" },
  { name: "JavaScript", icon: "javascript", level: 88, category: "Languages", color: "#F7DF1E" },
  { name: "SQL", icon: "mysql", level: 75, category: "Languages", color: "#4479A1" },
  // Web Development
  { name: "HTML5", icon: "html5", level: 95, category: "Web Dev", color: "#E34F26" },
  { name: "CSS3", icon: "css3", level: 90, category: "Web Dev", color: "#1572B6" },
  { name: "React", icon: "react", level: 92, category: "Web Dev", color: "#61DAFB" },
  // Data Science / ML
  { name: "NumPy", icon: "numpy", level: 80, category: "Data Science", color: "#013243" },
  { name: "Pandas", icon: "pandas", level: 80, category: "Data Science", color: "#150458" },
  { name: "Scikit Learn", icon: "scikitlearn", level: 70, category: "Data Science", color: "#FF6F00" },
  // Tools
  { name: "Git", icon: "git", level: 85, category: "Tools", color: "#F05032" },
  { name: "VS Code", icon: "vscode", level: 95, category: "Tools", color: "#007ACC" },
];

const categories = ["All", "Languages", "Web Dev", "Data Science", "Tools"];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const filtered = activeCategory === "All" ? skills : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-5xl font-display font-bold text-center mb-4"
        >
          <span className="text-gradient">Tech Arsenal</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-center mb-12 font-body"
        >
          Technologies I wield
        </motion.p>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-14"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2.5 rounded-xl text-sm font-display font-semibold tracking-wider transition-all duration-400 ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground neon-glow shadow-lg"
                  : "glass text-muted-foreground hover:text-foreground neon-border"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid - Premium Hexagonal Cards */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((skill, i) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.5, rotateY: 90 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 200, 
                  damping: 20, 
                  delay: i * 0.05 
                }}
                whileHover={{ 
                  scale: 1.12, 
                  y: -10,
                  rotateY: 5,
                  rotateX: -5,
                }}
                onHoverStart={() => setHoveredSkill(skill.name)}
                onHoverEnd={() => setHoveredSkill(null)}
                className="relative glass rounded-2xl p-5 neon-border hover-glow group cursor-default overflow-hidden"
                style={{ perspective: "800px" }}
              >
                {/* Animated background glow */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at center, ${skill.color}15 0%, transparent 70%)`,
                  }}
                />

                {/* Orbiting ring on hover */}
                <AnimatePresence>
                  {hoveredSkill === skill.name && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1, rotate: 360 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ rotate: { duration: 3, repeat: Infinity, ease: "linear" }, opacity: { duration: 0.3 } }}
                      className="absolute inset-1 rounded-xl border border-primary/30 pointer-events-none"
                    />
                  )}
                </AnimatePresence>

                <div className="relative flex flex-col items-center gap-3">
                  {/* Icon with glow */}
                  <motion.div
                    className="relative"
                    animate={hoveredSkill === skill.name ? { y: [0, -4, 0] } : {}}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <img
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-original.svg`}
                      alt={skill.name}
                      className="w-12 h-12 transition-all duration-500 group-hover:drop-shadow-[0_0_12px_var(--tw-shadow-color)]"
                      style={{ "--tw-shadow-color": skill.color } as React.CSSProperties}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-plain.svg`;
                      }}
                    />
                  </motion.div>

                  <span className="text-xs font-display font-bold text-foreground text-center tracking-wider uppercase">
                    {skill.name}
                  </span>

                  {/* Circular Progress */}
                  <div className="relative w-14 h-14">
                    <svg className="w-14 h-14 -rotate-90" viewBox="0 0 56 56">
                      <circle
                        cx="28" cy="28" r="24"
                        fill="none"
                        stroke="hsl(var(--secondary))"
                        strokeWidth="3"
                      />
                      <motion.circle
                        cx="28" cy="28" r="24"
                        fill="none"
                        stroke={skill.color}
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeDasharray={2 * Math.PI * 24}
                        initial={{ strokeDashoffset: 2 * Math.PI * 24 }}
                        whileInView={{ strokeDashoffset: 2 * Math.PI * 24 * (1 - skill.level / 100) }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: i * 0.05 + 0.3, ease: "easeOut" }}
                        style={{
                          filter: hoveredSkill === skill.name ? `drop-shadow(0 0 6px ${skill.color})` : "none",
                          transition: "filter 0.3s ease",
                        }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.span
                        className="text-[10px] font-mono font-bold text-foreground"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 + 1 }}
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
