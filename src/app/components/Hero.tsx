import { motion } from "motion/react";

export function Hero() {
  const scrollToApply = () => {
    const element = document.getElementById("apply");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--brand-cream)]">
      {/* Animated Orange Blob */}
      <motion.div
        className="absolute -top-20 -right-20 w-96 h-96 bg-[var(--brand-orange)] rounded-full opacity-20 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block bg-[var(--brand-orange)] text-white px-6 py-2 rounded-full mb-6 text-sm font-bold"
            >
              🔥 NOW ACCEPTING FRANCHISE APPLICATIONS
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-black text-[var(--brand-navy)] mb-6 leading-none">
              Start Your Own
              <span className="block text-[var(--brand-orange)] mt-2">
                Profitable
              </span>
              <span className="block mt-2">
                Food Stall
              </span>
            </h1>

            <p className="text-2xl md:text-3xl text-gray-700 mb-10 font-medium">
              Join the Fresh Prawn Cracker Revolution
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start">
              <button
                onClick={scrollToApply}
                className="bg-[var(--brand-orange)] text-white px-10 py-5 rounded-full text-xl font-black hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-2xl"
              >
                APPLY NOW →
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById("story");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-white text-[var(--brand-navy)] px-10 py-5 rounded-full text-xl font-black border-4 border-[var(--brand-navy)] hover:bg-[var(--brand-navy)] hover:text-white transition-all transform hover:scale-105 shadow-xl"
              >
                LEARN MORE
              </button>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {["Freshly Made", "Air-Popped", "Light & Crispy"].map((tag, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="bg-[var(--brand-navy)] text-white px-6 py-3 rounded-full font-bold text-sm"
                >
                  ✓ {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Right: Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <img 
                src="/images/hero-background.jpg" 
                alt="Prawn Popper - Fresh Air-Popped Snacks" 
                className="w-full h-auto drop-shadow-2xl rounded-3xl"
              />
            </motion.div>
            
            {/* Decorative Circle */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white rounded-full opacity-50 blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
