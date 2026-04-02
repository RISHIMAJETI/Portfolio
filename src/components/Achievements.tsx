import { motion } from "framer-motion";
import { Trophy, Award, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const AnimatedCounter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const step = Math.ceil(target / 40);
          const interval = setInterval(() => {
            start += step;
            if (start >= target) {
              setCount(target);
              clearInterval(interval);
            } else {
              setCount(start);
            }
          }, 30);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-3xl sm:text-4xl font-display font-bold text-primary text-glow">
      {count.toLocaleString()}{suffix}
    </div>
  );
};

const achievements = [
  {
    icon: Trophy,
    title: "Codeathon 2024",
    description: "Won ₹75,000 as 2nd Runner-Up organized by IIIT Bangalore Innovation Center and RBIH.",
    stat: 75000,
    statSuffix: "",
    statLabel: "₹ Prize Won",
  },
  {
    icon: Award,
    title: "Algorand Hackathon",
    description: 'Won $500 prize for "Best Use of Blockchain" to develop the Campus Founders platform.',
    stat: 500,
    statSuffix: "",
    statLabel: "$ Prize Won",
  },
  {
    icon: Star,
    title: "RBIH Top 100",
    description: "Selected for Co-Incubation Program by RBIH, VTU, and KSHEC among Top 100 from 7,000+ students.",
    stat: 100,
    statSuffix: "",
    statLabel: "Top Selection",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-5xl font-display font-bold text-center mb-4"
        >
          <span className="text-gradient">Achievements</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-center mb-16 font-body"
        >
          Milestones along the way
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((ach, i) => (
            <motion.div
              key={ach.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass rounded-2xl p-6 neon-border hover-glow text-center group"
            >
              <motion.div
                whileHover={{ rotate: 15, scale: 1.1 }}
                className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-5"
              >
                <ach.icon size={28} className="text-primary" />
              </motion.div>

              <AnimatedCounter target={ach.stat} suffix={ach.statSuffix} />
              <p className="text-xs text-muted-foreground font-mono mt-1 mb-4">{ach.statLabel}</p>

              <h3 className="text-lg font-display font-bold text-foreground mb-2">{ach.title}</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">{ach.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
