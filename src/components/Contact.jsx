import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-white py-24 text-black">
      <div className="mx-auto max-w-5xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold sm:text-4xl"
        >
          Contact
        </motion.h2>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-4 rounded-2xl border border-black/10 bg-white p-6 shadow-sm"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                required
                type="text"
                className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 outline-none ring-fuchsia-500/30 focus:ring"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                required
                type="email"
                className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 outline-none ring-fuchsia-500/30 focus:ring"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                required
                rows={5}
                className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 outline-none ring-fuchsia-500/30 focus:ring"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-black px-4 py-2 font-semibold text-white transition hover:bg-fuchsia-600"
            >
              Send
            </button>
            <p className="text-xs text-gray-500">This demo form doesn't send yet. You can reach me via socials.</p>
          </form>

          <div className="space-y-6">
            <p className="text-lg text-gray-700">
              Let’s build something kinetic. I’m available for freelance projects, brand collaborations, and title sequence direction.
            </p>
            <div className="flex flex-col gap-2 text-sm text-gray-600">
              <a className="underline hover:text-black" href="mailto:ayushbhoi.design@gmail.com">ayushbhoi.design@gmail.com</a>
              <div className="flex items-center gap-4">
                <a className="underline hover:text-black" href="#">Instagram</a>
                <a className="underline hover:text-black" href="#">Behance</a>
                <a className="underline hover:text-black" href="#">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
