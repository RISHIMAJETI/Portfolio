import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "CreditWorthy",
    subtitle: "AI-Powered Credit Assessment Platform",
    description:
      "Developed an AI-based credit scoring system leveraging transaction patterns and business data, improving prediction accuracy by 85%. Implemented phone-based authentication for secure access.",
    live: "https://creditworthy.vercel.app",
    github: "https://github.com/RISHIMAJETI/CreditWorthy",
    tags: ["AI/ML", "React", "Python", "Firebase"],
  },
  {
    title: "Campus Founders",
    subtitle: "AI, Blockchain & Government Scheme Platform",
    description:
      "An AI, blockchain, and government scheme–integrated platform empowering student entrepreneurs. Students discover funding, investors get AI-driven insights, and government monitors the startup ecosystem.",
    live: "https://campusfounders.vercel.app/",
    github: "https://github.com/RISHIMAJETI/Campus-Founders",
    tags: ["Blockchain", "AI", "Next.js", "Algorand"],
  },
  {
    title: "FARM2CONSUMER",
    subtitle: "Farmer-Consumer Connection Portal",
    description:
      "Engineered a web platform connecting farmers and consumers via crop type and location filters. Enabled seamless farmer registration and direct consumer interaction via WhatsApp integration.",
    live: "https://farm2consumer.vercel.app",
    github: "https://github.com/RISHIMAJETI/Farm2Consumer",
    tags: ["React", "Node.js", "WhatsApp API"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-5xl font-display font-bold text-center mb-4"
        >
          <span className="text-gradient">Projects</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-center mb-16 font-body"
        >
          Some things I've built
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -8, rotateY: 2, rotateX: -2 }}
              style={{ perspective: "1000px" }}
              className="glass rounded-2xl p-6 neon-border hover-glow group flex flex-col"
            >
              {/* Glow bar */}
              <div className="h-1 w-full rounded-full bg-primary/20 mb-6 overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-primary"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: i * 0.2 }}
                  style={{ boxShadow: "0 0 12px hsl(var(--glow-color) / 0.5)" }}
                />
              </div>

              <h3 className="text-xl font-display font-bold text-foreground mb-1">
                {project.title}
              </h3>
              <p className="text-primary text-sm font-display mb-3">{project.subtitle}</p>
              <p className="text-muted-foreground text-sm font-body leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-mono border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 py-2.5 rounded-lg bg-primary text-primary-foreground font-display text-xs font-semibold tracking-wider flex items-center justify-center gap-2 neon-glow"
                >
                  <ExternalLink size={14} />
                  Live Demo
                </motion.a>
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 py-2.5 rounded-lg glass neon-border font-display text-xs font-semibold tracking-wider text-foreground flex items-center justify-center gap-2"
                >
                  <Github size={14} />
                  GitHub
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
