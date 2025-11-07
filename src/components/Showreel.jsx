import { motion } from 'framer-motion';

export default function Showreel() {
  return (
    <section id="reel" className="relative w-full bg-black py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold sm:text-4xl"
        >
          Showreel
        </motion.h2>

        <div className="relative mt-8 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-fuchsia-500/20 via-white/5 to-transparent p-2">
          <div className="relative overflow-hidden rounded-xl">
            <div className="absolute -inset-20 -z-[0] animate-pulse bg-[radial-gradient(circle_at_20%_20%,rgba(217,70,239,0.25),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.25),transparent_50%)] blur-3xl" />
            <div className="aspect-video w-full">
              <iframe
                className="h-full w-full"
                src="https://player.vimeo.com/video/76979871?h=8272103f6e&title=0&byline=0&portrait=0"
                title="Ayush Bhoi Showreel"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
