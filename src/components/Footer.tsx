import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-sm font-body flex items-center justify-center gap-1"
        >
          © 2026 Port.folio.
          Where Logic Meets Creativity
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
