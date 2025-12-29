import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Boulangerie Vanessa et Baptiste",
  description: "Contactez la Boulangerie Vanessa et Baptiste à Chavagne. Horaires, adresse et coordonnées. Suivez-nous sur Facebook.",
};

export default function Contact() {
  return (
    <div className="pt-20 min-h-screen">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nous Trouver
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Venez découvrir notre boulangerie à Chavagne
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-primary-light/10 to-white border border-primary-light rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Informations Pratiques
              </h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Adresse</h3>
                    <p className="text-gray-700">1 Rue du Centre</p>
                    <p className="text-gray-700">35310 Chavagne</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Horaires</h3>
                    <p className="text-gray-700">
                      Nous contacter pour connaître nos horaires d&apos;ouverture
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Téléphone</h3>
                    <p className="text-gray-700">À venir</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-light/10 to-white border border-primary-light rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Suivez-nous
              </h2>

              <div className="mb-6">
                <p className="text-gray-700 mb-4">
                  Retrouvez toutes nos actualités, nos nouveautés et nos créations du moment
                  sur notre page Facebook.
                </p>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-full transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Visiter notre page Facebook
                </a>
              </div>

              <div className="border-t border-gray-200 pt-6 mt-6">
                <h3 className="font-semibold text-gray-900 mb-3">Commandes spéciales</h3>
                <p className="text-gray-700">
                  Gâteaux personnalisés, plateaux de pâtisseries, commandes pour événements...
                  N&apos;hésitez pas à nous contacter pour toute demande particulière.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto mt-12">
            <div className="bg-primary-light/10 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Vous avez une question ?
              </h2>
              <p className="text-gray-700 mb-6">
                N&apos;hésitez pas à nous rendre visite en boutique ou à nous contacter
                via notre page Facebook. Nous serons ravis de répondre à toutes vos demandes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-full transition-colors"
                >
                  Contactez-nous sur Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}