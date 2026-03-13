import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";

export function BrandStory() {
  const { ref, isInView } = useInView();

  return (
    <section id="story" className="py-20 md:py-32 bg-[var(--brand-cream)]">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-black text-[var(--brand-navy)] mb-8">
              Freshly Popped<br />Prawn Crackers
            </h2>
            <p className="text-xl md:text-2xl text-[var(--brand-orange)] font-bold mb-4">
              A unique market snack concept
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-[var(--brand-orange)]">
            <h3 className="text-2xl md:text-3xl font-black text-[var(--brand-navy)] mb-6">
              Brand Story
            </h3>
            
            {/* Brand Story Images */}
            <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/images/brand-story-1.jpg"
                  alt="Prawn Popper brand story - Market stall"
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/images/brand-story-2.jpg"
                  alt="Prawn Popper brand story - Fresh preparation"
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
            </div>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                The idea behind Prawn Popper started with a simple question:
              </p>
              <p className="text-xl font-bold text-[var(--brand-orange)] italic">
                "Can we create a street snack that is fresh, exciting, and lighter than traditional fried food?"
              </p>
              <p>
                After experimenting with different techniques, we developed a process that allows prawn crackers to <span className="font-bold text-[var(--brand-orange)]">hot-pop instantly</span>, creating a light and crispy texture without deep frying.
              </p>
              <p>
                Customers love watching the crackers <span className="font-bold">expand right in front of them</span>.
              </p>
              <p>
                This visual experience makes the snack fun, memorable, and perfect for busy night markets.
              </p>
              <p className="text-xl font-bold text-[var(--brand-navy)] pt-4">
                Today, Prawn Popper is growing into a street food brand, and we are inviting partners to join us in bringing this exciting snack to more locations.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
