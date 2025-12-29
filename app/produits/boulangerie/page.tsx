import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Boulangerie - Boulangerie Vanessa et Baptiste",
  description: "Découvrez notre gamme de pains artisanaux : baguettes, pains de campagne, pains spéciaux et bien plus. Cuits chaque jour avec passion.",
};

export default function Boulangerie() {
  const products = [
    {
      name: "Baguette Tradition",
      description: "Notre baguette emblématique, croustillante à l'extérieur et moelleuse à l'intérieur",
    },
    {
      name: "Pain de Campagne",
      description: "Pain rustique à la mie dense et savoureuse, parfait pour accompagner vos repas",
    },
    {
      name: "Pain aux Céréales",
      description: "Un mélange de graines et céréales pour un pain sain et savoureux",
    },
    {
      name: "Pain Complet",
      description: "Riche en fibres et en nutriments, idéal pour un petit-déjeuner équilibré",
    },
    {
      name: "Fougasse",
      description: "Pain méditerranéen moelleux, nature ou aux olives",
    },
    {
      name: "Pain de Seigle",
      description: "Au goût prononcé, parfait pour accompagner fruits de mer et charcuterie",
    },
  ];

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="text-6xl mb-4">🥖</div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Boulangerie
              </h1>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Pains traditionnels et spéciaux, baguettes croustillantes, pains de campagne.
                Pétris et cuits chaque jour avec des ingrédients de qualité.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {product.name}
                  </h3>
                  <p className="text-gray-600">{product.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-primary-light/10 border-2 border-primary-light rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Notre Savoir-Faire
              </h2>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-4xl mb-2">⏰</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Cuisson Quotidienne</h3>
                  <p className="text-gray-600 text-sm">
                    Pains frais cuits chaque jour sur place
                  </p>
                </div>
                <div>
                  <div className="text-4xl mb-2">🌾</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Farines Sélectionnées</h3>
                  <p className="text-gray-600 text-sm">
                    Ingrédients de qualité premium
                  </p>
                </div>
                <div>
                  <div className="text-4xl mb-2">👨‍🍳</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Méthodes Artisanales</h3>
                  <p className="text-gray-600 text-sm">
                    Respect des traditions boulangères
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-700 mb-6">
                Découvrez également nos autres spécialités
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/produits/patisserie"
                  className="bg-white hover:bg-gray-100 text-primary border-2 border-primary font-semibold py-3 px-8 rounded-full transition-colors"
                >
                  Pâtisserie
                </Link>
                <Link
                  href="/produits/chocolaterie"
                  className="bg-white hover:bg-gray-100 text-primary border-2 border-primary font-semibold py-3 px-8 rounded-full transition-colors"
                >
                  Chocolaterie
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}