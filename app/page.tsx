"use client";

import Link from "next/link";
import Counter from "./components/Counter";

export default function Home() {
  return (
    <div>
      {/* Hero Section - Fullscreen avec image de fond */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Image de fond */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop')",
          }}
        >
          {/* Overlay sombre pour améliorer la lisibilité */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Contenu */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            Boulangerie Artisanale
            <span className="block text-primary-light mt-2">Vanessa & Baptiste</span>
          </h1>
          <p className="text-xl md:text-3xl mb-8 drop-shadow-lg">
            Artisan boulanger, pâtissier et chocolatier à Chavagne
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Link
              href="/produits/boulangerie"
              className="bg-primary hover:bg-primary-dark text-white font-semibold py-4 px-10 rounded-full transition-colors text-center text-lg shadow-xl"
            >
              Découvrir nos produits
            </Link>
            <Link
              href="/contact"
              className="bg-white hover:bg-gray-100 text-gray-900 font-semibold py-4 px-10 rounded-full transition-colors text-center text-lg shadow-xl"
            >
              Nous contacter
            </Link>
          </div>
        </div>

        {/* Flèche de scroll */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Section Présentation avec photo */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Bienvenue chez Vanessa & Baptiste
                </h2>
                <div className="w-24 h-1 bg-primary mb-6"></div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Créée en 2010, notre boulangerie est le fruit de la passion de deux artisans
                  boulangers dévoués. Depuis plus de 14 ans, nous servons la commune de Chavagne
                  et ses environs avec des produits de qualité exceptionnelle.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Installés au cœur de Chavagne, nous mettons tout notre savoir-faire au service
                  de produits artisanaux, préparés chaque jour avec des ingrédients soigneusement
                  sélectionnés.
                </p>
                <Link
                  href="/qui-sommes-nous"
                  className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-full transition-colors"
                >
                  En savoir plus
                </Link>
              </div>
              <div className="order-1 md:order-2">
                <div
                  className="h-96 rounded-2xl shadow-2xl bg-cover bg-center"
                  style={{
                    backgroundImage: "url('/images/PP.jpg')",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Compteurs */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <Counter end={14} suffix="+" label="Années d'expérience" duration={2500} />
            <Counter end={15} suffix=" collaborateurs" label="Équipe dévouée" duration={2500} />
            <Counter end={3} label="Expertises" duration={2000} />
          </div>
        </div>
      </section>

      {/* Section Services avec cards flip */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Services
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez notre triple expertise : boulangerie, pâtisserie et chocolaterie
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card Boulangerie */}
            <div className="group h-96 [perspective:1000px]">
              <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Face avant */}
                <div className="absolute inset-0 h-full w-full rounded-2xl bg-white shadow-lg [backface-visibility:hidden] overflow-hidden">
                  <div
                    className="h-48 w-full bg-cover bg-center rounded-t-2xl"
                    style={{ backgroundImage: "url('/images/15.png')" }}
                  ></div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Boulangerie
                    </h3>
                    <p className="text-gray-600">
                      Pains traditionnels et spéciaux cuits chaque jour
                    </p>
                  </div>
                </div>
                {/* Face arrière */}
                <div className="absolute inset-0 h-full w-full rounded-2xl bg-primary text-white shadow-lg [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <div className="flex flex-col h-full p-6 justify-center">
                    <h3 className="text-2xl font-bold mb-4">Nos Pains</h3>
                    <ul className="text-sm space-y-2 mb-6">
                      <li>• Baguettes tradition</li>
                      <li>• Pains de campagne</li>
                      <li>• Pains aux céréales</li>
                      <li>• Pains complets</li>
                      <li>• Fougasses</li>
                    </ul>
                    <Link
                      href="/produits/boulangerie"
                      className="bg-white text-primary font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors text-center"
                    >
                      Voir nos pains
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Pâtisserie */}
            <div className="group h-96 [perspective:1000px]">
              <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Face avant */}
                <div className="absolute inset-0 h-full w-full rounded-2xl bg-white shadow-lg [backface-visibility:hidden] overflow-hidden">
                  <div
                    className="h-48 w-full bg-cover bg-center rounded-t-2xl"
                    style={{ backgroundImage: "url('/images/9.png')" }}
                  ></div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Pâtisserie
                    </h3>
                    <p className="text-gray-600">
                      Créations gourmandes et délicates
                    </p>
                  </div>
                </div>
                {/* Face arrière */}
                <div className="absolute inset-0 h-full w-full rounded-2xl bg-primary text-white shadow-lg [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <div className="flex flex-col h-full p-6 justify-center">
                    <h3 className="text-2xl font-bold mb-4">Nos Pâtisseries</h3>
                    <ul className="text-sm space-y-2 mb-6">
                      <li>• Éclairs & Religieuses</li>
                      <li>• Tartes aux fruits</li>
                      <li>• Mille-feuilles</li>
                      <li>• Macarons</li>
                      <li>• Gâteaux personnalisés</li>
                    </ul>
                    <Link
                      href="/produits/patisserie"
                      className="bg-white text-primary font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors text-center"
                    >
                      Voir nos pâtisseries
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Chocolaterie */}
            <div className="group h-96 [perspective:1000px]">
              <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Face avant */}
                <div className="absolute inset-0 h-full w-full rounded-2xl bg-white shadow-lg [backface-visibility:hidden] overflow-hidden">
                  <div
                    className="h-48 w-full bg-cover bg-center rounded-t-2xl"
                    style={{ backgroundImage: "url('/images/16.png')" }}
                  ></div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Chocolaterie
                    </h3>
                    <p className="text-gray-600">
                      Chocolats fins et pralinés maison
                    </p>
                  </div>
                </div>
                {/* Face arrière */}
                <div className="absolute inset-0 h-full w-full rounded-2xl bg-primary text-white shadow-lg [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <div className="flex flex-col h-full p-6 justify-center">
                    <h3 className="text-2xl font-bold mb-4">Nos Chocolats</h3>
                    <ul className="text-sm space-y-2 mb-6">
                      <li>• Truffes artisanales</li>
                      <li>• Pralinés maison</li>
                      <li>• Ganaches parfumées</li>
                      <li>• Mendiants</li>
                      <li>• Ballotins personnalisés</li>
                    </ul>
                    <Link
                      href="/produits/chocolaterie"
                      className="bg-white text-primary font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors text-center"
                    >
                      Voir nos chocolats
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Nos Engagements avec image fixe en fond */}
      <section className="relative py-20">
        {/* Image de fond fixe */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=2070&auto=format&fit=crop')",
            backgroundAttachment: "fixed",
          }}
        >
          {/* Overlay sombre pour améliorer la lisibilité */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Contenu */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Nos Engagements
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Des valeurs fortes qui guident notre travail au quotidien
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Engagement 1 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl hover:bg-white/20 transition-all text-center border border-white/20">
              <div className="bg-primary/80 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Fabrication Artisanale</h3>
              <p className="text-white/90">
                Tous nos produits sont fabriqués sur place, chaque jour, selon les méthodes traditionnelles
              </p>
            </div>

            {/* Engagement 2 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl hover:bg-white/20 transition-all text-center border border-white/20">
              <div className="bg-primary/80 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Ingrédients de Qualité</h3>
              <p className="text-white/90">
                Sélection rigoureuse de nos matières premières auprès de fournisseurs locaux de confiance
              </p>
            </div>

            {/* Engagement 3 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl hover:bg-white/20 transition-all text-center border border-white/20">
              <div className="bg-primary/80 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Fraîcheur Garantie</h3>
              <p className="text-white/90">
                Production quotidienne pour vous offrir des produits toujours frais et savoureux
              </p>
            </div>

            {/* Engagement 4 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl hover:bg-white/20 transition-all text-center border border-white/20">
              <div className="bg-primary/80 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Service Personnalisé</h3>
              <p className="text-white/90">
                À l'écoute de vos besoins pour des créations sur-mesure adaptées à vos événements
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Facebook Feed */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Suivez-nous sur Facebook
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Découvrez nos dernières créations, actualités et promotions en temps réel
              </p>
            </div>

            {/* Facebook Page Plugin */}
            <div className="flex justify-center">
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fvanessaetbaptiste&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="500"
                height="600"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                className="rounded-2xl shadow-lg"
              ></iframe>
            </div>

            {/* Call to action */}
            <div className="mt-8 text-center">
              <a
                href="https://www.facebook.com/vanessaetbaptiste"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#1877F2] hover:bg-[#166FE5] text-white font-semibold py-4 px-10 rounded-full transition-colors text-lg shadow-xl"
              >
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Suivre notre page Facebook
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section Galerie Photos - Aperçu */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notre Galerie
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez nos plus belles créations en images
            </p>
          </div>

          {/* Grille de photos aperçu */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto mb-8">
            <div
              className="h-64 bg-cover bg-center rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              style={{ backgroundImage: "url('/images/15.png')" }}
            ></div>
            <div
              className="h-64 bg-cover bg-center rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              style={{ backgroundImage: "url('/images/9.png')" }}
            ></div>
            <div
              className="h-64 bg-cover bg-center rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              style={{ backgroundImage: "url('/images/16.png')" }}
            ></div>
            <div
              className="h-64 bg-cover bg-center rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              style={{ backgroundImage: "url('/images/PP.jpg')" }}
            ></div>
          </div>

          {/* Bouton vers la galerie complète */}
          <div className="text-center">
            <Link
              href="/galerie"
              className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold py-4 px-10 rounded-full transition-colors text-lg shadow-xl"
            >
              Voir toute la galerie
            </Link>
          </div>
        </div>
      </section>

      {/* Section Nous Trouver - Map & Horaires */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Nous Trouver
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Venez nous rendre visite à notre boutique de Chavagne
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Informations pratiques */}
              <div className="space-y-8">
                {/* Adresse */}
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-start">
                    <div className="bg-primary/10 rounded-full p-3 mr-4">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Adresse</h3>
                      <p className="text-gray-700">
                        1 Rue du Centre<br />
                        35310 Chavagne<br />
                        France
                      </p>
                    </div>
                  </div>
                </div>

                {/* Horaires */}
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-start">
                    <div className="bg-primary/10 rounded-full p-3 mr-4">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Horaires d&apos;ouverture</h3>
                      <div className="space-y-2 text-gray-700">
                        <div className="flex justify-between">
                          <span className="font-semibold">Lundi - Mardi</span>
                          <span>07h00 - 13h00</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold">Mercredi</span>
                          <span>Fermé</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold">Jeudi - Vendredi</span>
                          <span>07h00 - 13h00</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold">Samedi</span>
                          <span>07h00 - 13h00</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold">Dimanche</span>
                          <span>07h00 - 13h00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact */}
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-start">
                    <div className="bg-primary/10 rounded-full p-3 mr-4">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Contact</h3>
                      <p className="text-gray-700">
                        <a href="tel:+33299075258" className="hover:text-primary transition-colors">
                          02 99 07 52 58
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Carte Google Maps Embed */}
              <div className="h-full min-h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=place_id:ChIJxw16Xu8dD0gRSzAxu-imWa0&zoom=15"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "500px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl shadow-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
