import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { BrandStory } from "./components/BrandStory";
import { ProductFeatures } from "./components/ProductFeatures";
import { WhyCustomersLove } from "./components/WhyCustomersLove";
import { WhyFranchise } from "./components/WhyFranchise";
import { ProfitPotential } from "./components/ProfitPotential";
import { FranchiseSupport } from "./components/FranchiseSupport";
import { HowToStart } from "./components/HowToStart";
import { ApplicationForm } from "./components/ApplicationForm";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <BrandStory />
      <ProductFeatures />
      <WhyCustomersLove />
      <WhyFranchise />
      <ProfitPotential />
      <FranchiseSupport />
      <HowToStart />
      <ApplicationForm />
      <Footer />
    </div>
  );
}
