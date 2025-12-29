import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galerie - Boulangerie Vanessa et Baptiste",
  description: "Découvrez en images nos créations artisanales : pains, pâtisseries et chocolats de la Boulangerie Vanessa et Baptiste à Chavagne.",
};

export default function Galerie() {
  // Liste des images de la galerie
  const images = [
    { src: "/images/15.png", alt: "Pain artisanal" },
    { src: "/images/9.png", alt: "Pâtisseries" },
    { src: "/images/16.png", alt: "Chocolats" },
    { src: "/images/PP.jpg", alt: "Notre boulangerie" },
    { src: "/images/1.png", alt: "Créations artisanales" },
    { src: "/images/2.png", alt: "Nos produits" },
    { src: "/images/3.png", alt: "Spécialités maison" },
    { src: "/images/4.png", alt: "Pains traditionnels" },
    { src: "/images/5.png", alt: "Viennoiseries" },
    { src: "/images/6.png", alt: "Gâteaux" },
    { src: "/images/7.png", alt: "Chocolaterie" },
    { src: "/images/8.png", alt: "Produits gourmands" },
  ];

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Notre Galerie
              </h1>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Découvrez nos créations artisanales à travers une sélection de nos plus belles réalisations.
                Pains traditionnels, pâtisseries raffinées et chocolats fins, tous fabriqués avec passion
                dans notre atelier de Chavagne.
              </p>
            </div>

            {/* Grille de photos en masonry style */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div
                    className="h-80 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundImage: `url('${image.src}')` }}
                  ></div>
                  {/* Overlay au hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg
                        className="w-12 h-12 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to action */}
            <div className="mt-16 text-center bg-primary text-white rounded-2xl p-12">
              <h2 className="text-3xl font-bold mb-4">Envie de passer commande ?</h2>
              <p className="text-lg mb-8 opacity-90">
                Contactez-nous pour vos commandes spéciales : gâteaux d'anniversaire, pièces montées,
                buffets sucrés et bien plus encore !
              </p>
              <a
                href="/contact"
                className="inline-block bg-white text-primary hover:bg-gray-100 font-semibold py-4 px-10 rounded-full transition-colors text-lg shadow-xl"
              >
                Nous contacter
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}