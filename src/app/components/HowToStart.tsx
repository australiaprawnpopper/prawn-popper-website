import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";
import { FileText, MessageCircle, GraduationCap, Wrench, Rocket } from "lucide-react";

export function HowToStart() {
  const { ref, isInView } = useInView();

  const steps = [
    {
      icon: FileText,
      title: "Apply",
      description: "Submit your franchise application",
      number: "01",
    },
    {
      icon: MessageCircle,
      title: "Discuss",
      description: "Meet with our team to discuss opportunities",
      number: "02",
    },
    {
      icon: GraduationCap,
      title: "Training",
      description: "Complete comprehensive training program",
      number: "03",
    },
    {
      icon: Wrench,
      title: "Setup",
      description: "Get your stall and equipment ready",
      number: "04",
    },
    {
      icon: Rocket,
      title: "Start Selling",
      description: "Launch your Prawn Popper business",
      number: "05",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-[var(--brand-navy)] to-blue-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
              How to Start
            </h2>
            <p className="text-xl text-[var(--brand-cream)]">
              Five simple steps to your new business
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === steps.length - 1;
              
              return (
                <div key={index} className="relative">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="flex items-center gap-6 mb-8"
                  >
                    {/* Number */}
                    <div className="hidden md:block text-6xl font-black text-white/10">
                      {step.number}
                    </div>

                    {/* Icon Circle */}
                    <div className="relative flex-shrink-0">
                      <div className="w-20 h-20 bg-[var(--brand-orange)] rounded-full flex items-center justify-center shadow-xl">
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      {!isLast && (
                        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-1 h-16 bg-white/20" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
                      <h3 className="text-2xl font-black text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-[var(--brand-cream)]">{step.description}</p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-12"
          >
            <button
              onClick={() => {
                const element = document.getElementById("apply");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-[var(--brand-orange)] text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-xl"
            >
              Start Your Journey Today
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
