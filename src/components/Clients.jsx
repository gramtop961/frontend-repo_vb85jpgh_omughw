import { motion } from 'framer-motion';

const clients = [
  'Nike',
  'Adobe',
  'Spotify',
  'A24',
  'VICE',
  'Figma',
];

export default function Clients() {
  return (
    <section id="clients" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold sm:text-4xl"
        >
          Clients & Collaborations
        </motion.h2>

        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6">
          {clients.map((c, i) => (
            <motion.div
              key={c}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-6 text-center text-sm font-medium text-white/80 backdrop-blur"
            >
              {c}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
