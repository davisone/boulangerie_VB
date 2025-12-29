export default function About() {
  return (
    <section id="apropos" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              À Propos de Nous
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-primary mb-4">Notre Histoire</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Vanessa et Baptiste ont uni leur passion pour l&apos;artisanat boulanger pour
                créer une boulangerie où tradition et innovation se rencontrent.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Installés à Chavagne, nous mettons un point d&apos;honneur à proposer des
                produits de qualité, fabriqués avec des ingrédients soigneusement sélectionnés
                et un savoir-faire transmis de génération en génération.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-primary mb-4">Notre Engagement</h3>
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

          <div className="bg-primary text-white rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Triple Expertise</h3>
            <p className="text-lg leading-relaxed">
              Boulanger, pâtissier et chocolatier : trois métiers, une seule passion.
              Nous maîtrisons l&apos;art de transformer les meilleurs ingrédients en créations
              gourmandes qui raviront vos papilles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}