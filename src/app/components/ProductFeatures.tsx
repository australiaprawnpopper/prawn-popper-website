import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";

export function ProductFeatures() {
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-[var(--brand-navy)] mb-6">
              A New Kind of Street Snack<br />in Australia
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
              Our prawn crackers are <span className="text-[var(--brand-orange)] font-bold">freshly made</span> and <span className="text-[var(--brand-orange)] font-bold">hot-popped on the spot</span>.<br />
              Unlike traditional deep-fried snacks, they are light, crispy, and visually exciting.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/product-hero.jpg"
                alt="Prawn Popper - Fresh prawn crackers"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "Freshly Pressed & Popped to Order",
                  description: "Each cracker is made fresh when you order, ensuring maximum flavor and crunch.",
                },
                {
                  title: "Not Deep Fried",
                  description: "Air-popped for a lighter crunch - not traditional oil-fried prawn chips.",
                },
                {
                  title: "Light, Crispy and Full of Prawn Flavor",
                  description: "The perfect balance of texture and taste that keeps customers coming back.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-[var(--brand-cream)] p-6 rounded-2xl border-l-4 border-[var(--brand-orange)]"
                >
                  <h3 className="text-xl font-black text-[var(--brand-navy)] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Product Feature Images */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/product-feature-1.jpg"
                alt="Prawn Popper - Fresh preparation process"
                className="w-full h-80 md:h-96 object-cover"
              />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/product-feature-2.jpg"
                alt="Prawn Popper - Crispy texture"
                className="w-full h-80 md:h-96 object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
