export default function Products() {
  const products = [
    {
      title: "Boulangerie",
      description:
        "Pains traditionnels et spéciaux, baguettes croustillantes, pains de campagne, céréales et bien plus encore. Pétris et cuits chaque jour avec des ingrédients de qualité.",
      icon: "🥖",
    },
    {
      title: "Pâtisserie",
      description:
        "Créations gourmandes et délicates : tartes aux fruits de saison, éclairs, mille-feuilles, gâteaux d'anniversaire personnalisés. Chaque pâtisserie est une œuvre d'art.",
      icon: "🎂",
    },
    {
      title: "Chocolaterie",
      description:
        "Chocolats fins et pralinés maison, truffes onctueuses, ganaches parfumées. Notre sélection de chocolats saura ravir les palais les plus exigeants.",
      icon: "🍫",
    },
  ];

  return (
    <section id="produits" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nos Produits Artisanaux
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez notre gamme complète de produits artisanaux, préparés avec passion et savoir-faire
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-6xl mb-6 text-center">{product.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                {product.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {product.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-primary-light/10 border-2 border-primary-light rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Produits de saison
            </h3>
            <p className="text-gray-700">
              Nous adaptons notre offre au fil des saisons pour vous proposer des produits frais
              et savoureux tout au long de l&apos;année. N&apos;hésitez pas à nous rendre visite pour
              découvrir nos nouveautés et nos spécialités du moment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}