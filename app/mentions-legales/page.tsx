import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales - Boulangerie Vanessa et Baptiste",
  description: "Mentions légales de la Boulangerie Vanessa et Baptiste - SARL VENON à Chavagne.",
};

export default function MentionsLegales() {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
              Mentions Légales
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Informations sur la société
              </h2>

              <div className="space-y-4 text-gray-700">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Raison sociale</h3>
                    <p>VENON (VANESSA ET BAPTISTE)</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Forme juridique</h3>
                    <p>Société à responsabilité limitée (SARL)</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">SIREN</h3>
                    <p>520 401 258</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">SIRET</h3>
                    <p>520 401 258 00022</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">N° TVA Intracommunautaire</h3>
                    <p>FR38 520 401 258</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Code NAF/APE</h3>
                    <p>10.71C - Boulangerie et boulangerie-pâtisserie</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Date de création</h3>
                  <p>19 février 2010</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Siège social
              </h2>
              <div className="text-gray-700">
                <p className="text-lg">
                  VANESSA ET BAPTISTE<br />
                  1 Rue du Centre<br />
                  35310 Chavagne<br />
                  France
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Hébergement du site
              </h2>
              <div className="text-gray-700">
                <p>
                  Ce site est hébergé par Vercel Inc.<br />
                  340 S Lemon Ave #4133<br />
                  Walnut, CA 91789<br />
                  États-Unis
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Propriété intellectuelle
              </h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  L&apos;ensemble de ce site relève de la législation française et internationale
                  sur le droit d&apos;auteur et la propriété intellectuelle. Tous les droits de
                  reproduction sont réservés, y compris pour les documents téléchargeables et
                  les représentations iconographiques et photographiques.
                </p>
                <p>
                  La reproduction de tout ou partie de ce site sur un support électronique
                  quel qu&apos;il soit est formellement interdite sauf autorisation expresse
                  de la direction de la publication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}