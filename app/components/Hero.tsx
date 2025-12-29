"use client";

export default function Hero() {
  return (
    <section id="accueil" className="pt-20 bg-gradient-to-br from-primary-light/20 to-white">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Boulangerie Artisanale
            <span className="block text-primary mt-2">Vanessa & Baptiste</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Artisan boulanger, pâtissier et chocolatier à Chavagne
          </p>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Découvrez le savoir-faire artisanal de nos produits faits maison avec passion.
            Du pain croustillant aux pâtisseries délicates, en passant par nos chocolats raffinés.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                const section = document.getElementById("produits");
                if (section) section.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-full transition-colors"
            >
              Découvrir nos produits
            </button>
            <button
              onClick={() => {
                const section = document.getElementById("contact");
                if (section) section.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-white hover:bg-gray-100 text-primary border-2 border-primary font-semibold py-3 px-8 rounded-full transition-colors"
            >
              Nous contacter
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}