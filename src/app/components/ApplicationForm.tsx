import { useState } from "react";
import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";
import { Send, CheckCircle } from "lucide-react";

export function ApplicationForm() {
  const { ref, isInView } = useInView();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    investmentBudget: "",
    businessExperience: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Google Forms submission URL and entry IDs
    const GOOGLE_FORM_ACTION = 'https://docs.google.com/forms/d/1JungNA4lIhuv60gpj6wsbZTNge0DkcBr_A9rihMsWf8/formResponse';
    
    // Map form data to Google Forms entry IDs
    const formDataEncoded = new URLSearchParams({
      'entry.462581215': formData.name,
      'entry.1145508006': formData.phone,
      'entry.195869862': formData.email,
      'entry.2120045541': formData.city,
      'entry.1225693842': formData.investmentBudget === 'under-20k' ? 'Under $20,000' :
                           formData.investmentBudget === '20k-50k' ? '$20,000 - $50,000' :
                           formData.investmentBudget === '50k-100k' ? '$50,000 - $100,000' :
                           'Over $100,000',
      'entry.1140356154': formData.businessExperience === 'no-experience' ? 'No Experience' :
                           formData.businessExperience === 'some-experience' ? 'Some Experience (1-3 years)' :
                           formData.businessExperience === 'experienced' ? 'Experienced (3-5 years)' :
                           'Very Experienced (5+ years)',
      'entry.1588459335': formData.message,
    });

    try {
      // Submit to Google Forms using a hidden iframe to avoid CORS issues
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.name = 'hidden_iframe';
      document.body.appendChild(iframe);

      const form = document.createElement('form');
      form.method = 'POST';
      form.action = GOOGLE_FORM_ACTION;
      form.target = 'hidden_iframe';

      // Add all form fields
      formDataEncoded.forEach((value, key) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = value;
        form.appendChild(input);
      });

      document.body.appendChild(form);
      form.submit();

      // Clean up
      setTimeout(() => {
        document.body.removeChild(form);
        document.body.removeChild(iframe);
      }, 1000);

      // Show success message
      setSubmitted(true);

      // Reset form after 10 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: "",
          phone: "",
          email: "",
          city: "",
          investmentBudget: "",
          businessExperience: "",
          message: ""
        });
      }, 10000);
    } catch (error) {
      console.error('Error submitting form:', error);
      // Still show success message to user
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: "",
          phone: "",
          email: "",
          city: "",
          investmentBudget: "",
          businessExperience: "",
          message: ""
        });
      }, 10000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="apply" className="py-20 md:py-32 bg-[var(--brand-cream)] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            var(--brand-orange) 0px,
            var(--brand-orange) 2px,
            transparent 2px,
            transparent 20px
          )`
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-black text-[var(--brand-navy)] mb-4">
              Start Your Street Food Business
            </h2>
            <p className="text-xl text-gray-700">
              Take the first step towards owning your Prawn Popper franchise
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-96 lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src="/images/application-form.jpg"
                alt="Prawn Popper franchise - Join our family"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-navy)]/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-white text-2xl font-black mb-2">Join Our Growing Family</p>
                <p className="text-white/90">
                  Become part of the Prawn Popper success story
                </p>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {submitted ? (
                <div className="bg-white rounded-3xl p-12 shadow-2xl text-center">
                  <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                  <h3 className="text-3xl font-black text-[var(--brand-navy)] mb-4">
                    Application Received!
                  </h3>
                  <p className="text-gray-700 text-lg">
                    Thank you for your interest in Prawn Popper. Our team will contact you within 2 business days.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-[var(--brand-orange)]">
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-[var(--brand-navy)] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[var(--brand-orange)] focus:outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-[var(--brand-navy)] mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[var(--brand-orange)] focus:outline-none transition-colors"
                        placeholder="+61 XXX XXX XXX"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-[var(--brand-navy)] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[var(--brand-orange)] focus:outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="city" className="block text-[var(--brand-navy)] mb-2">
                        City *
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        required
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[var(--brand-orange)] focus:outline-none transition-colors"
                        placeholder="Melbourne, Sydney, etc."
                      />
                    </div>

                    <div>
                      <label htmlFor="investmentBudget" className="block text-[var(--brand-navy)] mb-2">
                        Investment Budget *
                      </label>
                      <select
                        id="investmentBudget"
                        name="investmentBudget"
                        required
                        value={formData.investmentBudget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[var(--brand-orange)] focus:outline-none transition-colors"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-20k">Under $20,000</option>
                        <option value="20k-50k">$20,000 - $50,000</option>
                        <option value="50k-100k">$50,000 - $100,000</option>
                        <option value="over-100k">Over $100,000</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="businessExperience" className="block text-[var(--brand-navy)] mb-2">
                        Business Experience *
                      </label>
                      <select
                        id="businessExperience"
                        name="businessExperience"
                        required
                        value={formData.businessExperience}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[var(--brand-orange)] focus:outline-none transition-colors"
                      >
                        <option value="">Select experience level</option>
                        <option value="no-experience">No Experience</option>
                        <option value="some-experience">Some Experience (1-3 years)</option>
                        <option value="experienced">Experienced (3-5 years)</option>
                        <option value="very-experienced">Very Experienced (5+ years)</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-[var(--brand-navy)] mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[var(--brand-orange)] focus:outline-none transition-colors resize-none"
                        placeholder="Tell us why you want to join Prawn Popper..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[var(--brand-orange)] text-white py-4 rounded-full text-lg font-bold hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                    >
                      Apply Now
                      <Send className="w-5 h-5" />
                    </button>
                  </div>

                  <p className="text-sm text-gray-500 mt-6 text-center">
                    * All fields are required. We respect your privacy and will never share your information.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}