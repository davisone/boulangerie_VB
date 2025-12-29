import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pâtisserie - Boulangerie Vanessa et Baptiste",
  description: "Créations gourmandes et délicates : tartes aux fruits, éclairs, mille-feuilles, gâteaux personnalisés. Chaque pâtisserie est une œuvre d'art.",
};

export default function Patisserie() {
  const products = [
    {
      name: "Éclairs",
      description: "Chocolat, café, vanille ou fruits rouges, nos éclairs fondent en bouche",
    },
    {
      name: "Tartes aux Fruits",
      description: "Fruits de saison sur une crème pâtissière onctueuse",
    },
    {
      name: "Mille-Feuille",
      description: "Feuilletage croustillant et crème légère à la vanille",
    },
    {
      name: "Paris-Brest",
      description: "Pâte à choux garnie de crème pralinée maison",
    },
    {
      name: "Macarons",
      description: "Une palette de saveurs raffinées et colorées",
    },
    {
      name: "Gâteaux Personnalisés",
      description: "Sur commande : gâteaux d'anniversaire, événements spéciaux",
    },
  ];

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="text-6xl mb-4">🎂</div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Pâtisserie
              </h1>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Créations gourmandes et délicates : tartes aux fruits de saison, éclairs,
                mille-feuilles, gâteaux d&apos;anniversaire personnalisés. Chaque pâtisserie est une œuvre d&apos;art.
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
                Notre Passion Sucrée
              </h2>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-4xl mb-2">🎨</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Créativité</h3>
                  <p className="text-gray-600 text-sm">
                    Chaque pâtisserie est une création unique
                  </p>
                </div>
                <div>
                  <div className="text-4xl mb-2">🍓</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Fruits de Saison</h3>
                  <p className="text-gray-600 text-sm">
                    Produits frais et saveurs authentiques
                  </p>
                </div>
                <div>
                  <div className="text-4xl mb-2">✨</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Finitions Soignées</h3>
                  <p className="text-gray-600 text-sm">
                    Attention portée aux moindres détails
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-primary text-white rounded-2xl p-8 mb-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Commandes Spéciales</h2>
              <p className="text-lg mb-4">
                Gâteaux d&apos;anniversaire, pièces montées, desserts pour vos événements...
                Nous réalisons vos créations sur mesure.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-primary font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors"
              >
                Nous contacter
              </Link>
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