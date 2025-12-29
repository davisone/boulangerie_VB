import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chocolaterie - Boulangerie Vanessa et Baptiste",
  description: "Chocolats fins et pralinés maison, truffes onctueuses, ganaches parfumées. Notre sélection de chocolats ravira les palais les plus exigeants.",
};

export default function Chocolaterie() {
  const products = [
    {
      name: "Truffes",
      description: "Truffes au chocolat noir ou au lait, nature ou parfumées",
    },
    {
      name: "Pralinés",
      description: "Chocolats fourrés de pralinés aux noisettes et amandes",
    },
    {
      name: "Ganaches",
      description: "Ganaches fondantes aux saveurs variées : fruits, épices, alcools fins",
    },
    {
      name: "Mendiants",
      description: "Palets de chocolat garnis de fruits secs et confits",
    },
    {
      name: "Orangettes",
      description: "Écorces d'orange confites enrobées de chocolat noir",
    },
    {
      name: "Ballotins Personnalisés",
      description: "Compositions sur mesure pour vos cadeaux et événements",
    },
  ];

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="text-6xl mb-4">🍫</div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Chocolaterie
              </h1>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Chocolats fins et pralinés maison, truffes onctueuses, ganaches parfumées.
                Notre sélection de chocolats saura ravir les palais les plus exigeants.
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
                L&apos;Excellence du Chocolat
              </h2>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-4xl mb-2">🌟</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Chocolat Premium</h3>
                  <p className="text-gray-600 text-sm">
                    Sélection de chocolats de couverture de qualité
                  </p>
                </div>
                <div>
                  <div className="text-4xl mb-2">🎯</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Fait Main</h3>
                  <p className="text-gray-600 text-sm">
                    Chaque chocolat est façonné avec précision
                  </p>
                </div>
                <div>
                  <div className="text-4xl mb-2">🎁</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Idée Cadeau</h3>
                  <p className="text-gray-600 text-sm">
                    Ballotins personnalisés pour toute occasion
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Chocolat Noir</h2>
                <p className="text-gray-700 mb-4">
                  Pour les amateurs de cacao intense, notre sélection de chocolats noirs
                  offre des saveurs profondes et équilibrées.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• 70% de cacao minimum</li>
                  <li>• Ganaches aux fruits</li>
                  <li>• Truffes nature</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Chocolat au Lait</h2>
                <p className="text-gray-700 mb-4">
                  Onctuosité et douceur caractérisent notre gamme de chocolats au lait,
                  appréciés de tous.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Pralinés noisette</li>
                  <li>• Caramels</li>
                  <li>• Ganaches douces</li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-700 mb-6">
                Découvrez également nos autres spécialités
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/produits/boulangerie"
                  className="bg-white hover:bg-gray-100 text-primary border-2 border-primary font-semibold py-3 px-8 rounded-full transition-colors"
                >
                  Boulangerie
                </Link>
                <Link
                  href="/produits/patisserie"
                  className="bg-white hover:bg-gray-100 text-primary border-2 border-primary font-semibold py-3 px-8 rounded-full transition-colors"
                >
                  Pâtisserie
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}