import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";
import { TrendingUp, Users, DollarSign, Target } from "lucide-react";

export function ProfitPotential() {
  const { ref, isInView } = useInView();

  const stats = [
    {
      icon: DollarSign,
      value: "Low",
      label: "Operating Costs",
      description: "Minimal overhead with high margins",
    },
    {
      icon: Users,
      value: "High",
      label: "Foot Traffic",
      description: "Perfect for busy markets & events",
    },
    {
      icon: Target,
      value: "Quick",
      label: "ROI Timeline",
      description: "Fast path to profitability",
    },
    {
      icon: TrendingUp,
      value: "Growing",
      label: "Market Demand",
      description: "Health-conscious consumers",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-[var(--brand-cream)] to-orange-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-[var(--brand-navy)] mb-4">
              Profit Potential
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Join a business model designed for success in the street food market
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-xl text-center hover:shadow-2xl transition-all transform hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-[var(--brand-orange)] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-black text-[var(--brand-orange)] mb-2">
                    {stat.value}
                  </div>
                  <h3 className="text-xl font-black text-[var(--brand-navy)] mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-gray-600 text-sm">{stat.description}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-[var(--brand-navy)] rounded-3xl p-8 md:p-12 max-w-4xl mx-auto text-center"
          >
            <h3 className="text-3xl font-black text-white mb-4">
              Turn Your Passion Into Profit
            </h3>
            <p className="text-[var(--brand-cream)] text-lg mb-6">
              With low startup costs, simple operations, and high customer demand, Prawn Popper offers an attractive business opportunity for aspiring entrepreneurs. Our proven model and ongoing support help you build a successful street food business.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 text-white">
                ✓ Proven Business Model
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 text-white">
                ✓ Strong Profit Margins
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 text-white">
                ✓ Scalable Operations
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
