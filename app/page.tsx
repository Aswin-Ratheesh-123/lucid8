import Hero from "@/components/Hero";
import AIProducts from "@/components/AIProducts";
import ProductsSection from "@/components/ProductsSection";
export default function Home() {
  return (
    <main className="overflow-hidden bg-white">
      <Hero />
      {/* Services Section */}
      {/* CTA Section */}
      <AIProducts />
      <ProductsSection />
    </main>
  );
}