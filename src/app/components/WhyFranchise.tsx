import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";
import { DollarSign, Zap, Clock, TrendingUp } from "lucide-react";

export function WhyFranchise() {
  const { ref, isInView } = useInView();

  const benefits = [
    {
      icon: DollarSign,
      title: "Low Startup Cost",
      description: "Minimal investment required compared to traditional restaurants",
    },
    {
      icon: Zap,
      title: "Simple Operation",
      description: "Easy to learn and manage with streamlined processes",
    },
    {
      icon: Clock,
      title: "Fast Service",
      description: "Quick preparation means more sales in less time",
    },
    {
      icon: TrendingUp,
      title: "High Demand",
      description: "Growing popularity in night markets and food festivals",
    },
  ];

  return (
    <section id="why-join" className="py-20 md:py-32 bg-[var(--brand-navy)]">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
              Why Join Our Franchise
            </h2>
            <p className="text-xl text-[var(--brand-cream)]">
              Start your street food business with confidence
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/franchise-benefits.jpg"
                alt="Prawn Popper franchise - Successful market stall"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-navy)]/80 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-white text-2xl font-bold">
                  Join a growing network of successful vendors
                </p>
              </div>
            </div>

            <div className="grid gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-[var(--brand-orange)] rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-white mb-2">
                          {benefit.title}
                        </h3>
                        <p className="text-[var(--brand-cream)]">{benefit.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
