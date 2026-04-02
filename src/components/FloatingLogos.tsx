import { useRef } from "react";
import { motion } from "framer-motion";

const techLogos: string[] = [
  "c","cplusplus","java","python","javascript","typescript","go","rust",
  "kotlin","swift","php","ruby","dart","scala","r","matlab","perl",
  "haskell","julia","bash","html5","css3","react","angularjs","vuejs",
  "nextjs","nodejs","express","mongodb","mysql","postgresql","firebase",
  "graphql","tensorflow","pytorch",
];

type LogoType = {
  name: string;
  x: number;
  y: number;
  delay: number;
  duration: number;
  size: number;
  opacity: number;
};

const FloatingLogos = () => {

  // ✅ duplicate logos (2x)
  const duplicatedLogos = [...techLogos, ...techLogos];

  // ✅ store random values only once
  const logos = useRef<LogoType[]>(
    duplicatedLogos.map((name) => ({
      name,
      x: Math.random() * 90,
      y: Math.random() * 90,
      delay: Math.random() * 5,
      duration: 5 + Math.random() * 5,
      size: 30 + Math.random() * 20,
      opacity: 0.1 + Math.random() * 0.20,
    }))
  ).current;

  return (
    <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
      {logos.map((logo, i) => (
        <motion.img
          key={i}
          src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${logo.name}/${logo.name}-original.svg`}
          alt={logo.name}
          className="absolute"
          style={{
            left: `${logo.x}%`,
            top: `${logo.y}%`,
            width: logo.size,
            height: logo.size,
            opacity: logo.opacity,
            filter: "grayscale(50%) brightness(1.5)",
          }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: logo.duration,
            repeat: Infinity,
            delay: logo.delay,
            ease: "easeInOut",
          }}
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      ))}
    </div>
  );
};

export default FloatingLogos;