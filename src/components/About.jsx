import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative w-full bg-white py-24 text-black">
      <div className="mx-auto max-w-5xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold sm:text-4xl"
        >
          About
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-6 text-lg leading-relaxed text-gray-700"
        >
          I’m Ayush Bhoi, a video editor and motion designer crafting kinetic, expressive stories. 
          My work lives at the intersection of rhythm, typography, and emotion—bringing brands and music-driven narratives to life with precision and play.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 text-lg leading-relaxed text-gray-700"
        >
          I believe in minimal, bold visuals that move with intention. Every frame counts, every cut speaks.
        </motion.p>
      </div>
    </section>
  );
}
