import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";
import { Package, Truck, GraduationCap, Wrench, Award, HeartHandshake } from "lucide-react";

export function FranchiseSupport() {
  const { ref, isInView } = useInView();

  const supports = [
    {
      icon: Wrench,
      title: "Equipment Setup",
      description: "Complete equipment package and installation guidance",
    },
    {
      icon: Truck,
      title: "Ingredient Supply",
      description: "Reliable supply chain for fresh ingredients",
    },
    {
      icon: GraduationCap,
      title: "Training",
      description: "Comprehensive training on operations and customer service",
    },
    {
      icon: Package,
      title: "Stall Setup Support",
      description: "Assistance with market stall design and setup",
    },
    {
      icon: Award,
      title: "Unified Branding",
      description: "Registered trademark and professional packaging",
    },
    {
      icon: HeartHandshake,
      title: "Ongoing Support",
      description: "Continuous assistance and business development",
    },
  ];

  return (
    <section id="support" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-[var(--brand-navy)] mb-4">
              We Support Our<br />Franchise Partners
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              From setup to success, we're with you every step of the way
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {supports.map((support, index) => {
              const Icon = support.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-[var(--brand-cream)] to-orange-50 rounded-2xl p-8 h-full border-2 border-transparent hover:border-[var(--brand-orange)] transition-all">
                    <div className="w-16 h-16 bg-[var(--brand-orange)] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-black text-[var(--brand-navy)] mb-3">
                      {support.title}
                    </h3>
                    <p className="text-gray-700">{support.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="bg-[var(--brand-orange)] rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
              <h3 className="text-3xl font-black text-white mb-4">
                Your Success is Our Success
              </h3>
              <p className="text-white/90 text-lg">
                We provide everything you need to launch and grow your Prawn Popper business. Our comprehensive support system ensures you're never alone on your entrepreneurial journey.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
