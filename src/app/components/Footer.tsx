export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--brand-navy)] py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src="/images/logo.png" alt="Prawn Popper" className="h-24 md:h-28" />
          </div>

          <div className="text-center md:text-right">
            <p className="text-[var(--brand-cream)] mb-2">
              © {currentYear} Prawn Popper. All rights reserved.
            </p>
            <p className="text-[var(--brand-cream)]/70 text-sm">
              Freshly Air-Popped Snacks | Non-Fried Prawn Cracker
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <div className="flex flex-wrap gap-3 justify-center">
            {["Freshly Made", "Air-Popped", "Light & Crispy", "Healthier Snack"].map((tag, index) => (
              <span
                key={index}
                className="bg-white/5 text-[var(--brand-cream)] px-4 py-2 rounded-full text-sm border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
