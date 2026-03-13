import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";
import { Sparkles, Wind, Eye, Heart } from "lucide-react";

export function WhyCustomersLove() {
  const { ref, isInView } = useInView();

  const reasons = [
    {
      icon: Sparkles,
      title: "Freshly Made",
      description: "Made to order, never pre-packaged",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      icon: Wind,
      title: "Not Deep Fried",
      description: "Air-popped for a healthier choice",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Heart,
      title: "Light and Crispy",
      description: "Perfect texture every time",
      color: "bg-pink-100 text-pink-600",
    },
    {
      icon: Eye,
      title: "Fun to Watch",
      description: "The popping process is mesmerizing",
      color: "bg-purple-100 text-purple-600",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-[var(--brand-orange)] to-orange-600">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
              Why Customers Love It
            </h2>
            <p className="text-xl text-white/90">
              The perfect combination that keeps them coming back
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2"
                >
                  <div className={`w-16 h-16 ${reason.color} rounded-2xl flex items-center justify-center mb-4`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-[var(--brand-navy)] mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600">{reason.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
