import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Qui sommes-nous - Boulangerie Vanessa et Baptiste",
  description: "Découvrez l'histoire de Vanessa et Baptiste, artisans boulangers passionnés à Chavagne. Notre engagement pour la qualité et le savoir-faire artisanal.",
};

export default function QuiSommesNous() {
  return (
    <div className="pt-20 min-h-screen">
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Qui sommes-nous ?
              </h1>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-primary mb-4">Notre Histoire</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Créée en 2010, la boulangerie Vanessa et Baptiste est le fruit de la passion
                  de deux artisans boulangers dévoués. Depuis plus de 14 ans, nous servons
                  la commune de Chavagne et ses environs avec des produits de qualité exceptionnelle.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Installés au 1 rue du Centre à Chavagne, nous mettons un point d&apos;honneur à proposer des
                  produits de qualité, fabriqués avec des ingrédients soigneusement sélectionnés
                  et un savoir-faire transmis de génération en génération.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-primary mb-4">Notre Engagement</h2>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 text-xl">✓</span>
                    <span>Produits artisanaux faits maison quotidiennement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 text-xl">✓</span>
                    <span>Ingrédients de qualité et fournisseurs locaux</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 text-xl">✓</span>
                    <span>Respect des méthodes traditionnelles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 text-xl">✓</span>
                    <span>Innovation et créations originales</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 text-xl">✓</span>
                    <span>Service personnalisé et convivial</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-primary text-white rounded-2xl p-8 text-center mb-12">
              <h2 className="text-2xl font-bold mb-4">Triple Expertise</h2>
              <p className="text-lg leading-relaxed mb-4">
                Boulanger, pâtissier et chocolatier : trois métiers, une seule passion.
                Nous maîtrisons l&apos;art de transformer les meilleurs ingrédients en créations
                gourmandes qui raviront vos papilles.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6 text-center">
                <div>
                  <div className="text-3xl font-bold">14+</div>
                  <div className="text-sm opacity-90">Années d&apos;expérience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">10-19</div>
                  <div className="text-sm opacity-90">Collaborateurs</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">3</div>
                  <div className="text-sm opacity-90">Expertises</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary-light/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">👨‍🍳</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Savoir-faire</h3>
                <p className="text-gray-600">
                  Une expertise artisanale transmise avec passion
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary-light/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">🌾</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Qualité</h3>
                <p className="text-gray-600">
                  Des ingrédients sélectionnés avec soin
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary-light/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">❤️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Passion</h3>
                <p className="text-gray-600">
                  L&apos;amour du métier dans chaque produit
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}