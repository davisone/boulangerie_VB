"use client";

import Link from "next/link";
import Counter from "./components/Counter";
import ReviewsCarousel from "./components/ReviewsCarousel";

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

      {/* Section Réseaux Sociaux */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Suivez-nous sur Facebook
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Découvrez nos dernières créations, actualités et promotions en temps réel sur notre page Facebook
              </p>
            </div>

            {/* Card Facebook */}
            <div className="bg-white rounded-2xl p-8 shadow-xl text-center max-w-2xl mx-auto">
              <div className="mb-6">
                <svg className="w-20 h-20 mx-auto text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Boulangerie Vanessa et Baptiste
              </h3>

              <p className="text-gray-600 mb-8 leading-relaxed">
                Retrouvez nos dernières créations, nos nouveautés, nos horaires d&apos;ouverture exceptionnels
                et toutes nos actualités sur notre page Facebook officielle.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://www.facebook.com/vanessaetbaptiste"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#1877F2] hover:bg-[#166FE5] text-white font-semibold py-4 px-10 rounded-full transition-colors text-lg shadow-xl"
                >
                  <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Visiter notre page Facebook
                </a>

                <a
                  href="https://www.facebook.com/vanessaetbaptiste"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-gray-800 font-semibold py-4 px-10 rounded-full transition-colors text-lg shadow-xl border-2 border-gray-200"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  J&apos;aime
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-200">
                <div>
                  <div className="text-2xl font-bold text-primary">1500+</div>
                  <div className="text-sm text-gray-600">Abonnés</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">4.8/5</div>
                  <div className="text-sm text-gray-600">Note moyenne</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">14 ans</div>
                  <div className="text-sm text-gray-600">D&apos;expérience</div>
                </div>
              </div>
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

      {/* Section Avis Clients */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Avis de nos Clients
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez ce que nos clients pensent de nos produits et services
            </p>
          </div>

          <ReviewsCarousel />

          {/* Badge Google */}
          <div className="flex justify-center mt-8">
            <a
              href="https://www.google.com/maps/place/?q=place_id:ChIJxw16Xu8dD0gRSzAxu-imWa0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white hover:bg-gray-50 text-gray-800 font-semibold py-3 px-6 rounded-full shadow-lg transition-colors border border-gray-200"
            >
              <svg className="w-6 h-6 mr-2" viewBox="0 0 48 48">
                <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"></path>
                <path fill="#FF3D00" d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"></path>
                <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.910 11.910 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"></path>
                <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"></path>
              </svg>
              Voir tous nos avis sur Google
            </a>
          </div>
        </div>
      </section>

      {/* Section Nous Trouver - Map & Horaires */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
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
                          <span>06h30 - 19h30</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold">Mercredi</span>
                          <span>09h00 - 18h00</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold">Jeudi</span>
                          <span className="text-gray-500">Fermé</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold">Vendredi</span>
                          <span>06h30 - 19h30</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold">Samedi</span>
                          <span>07h00 - 19h00</span>
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
                        <a href="tel:+33299643580" className="hover:text-primary transition-colors">
                          02 99 64 35 80
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

      {/* Section SEO - Texte optimisé pour le référencement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Votre Boulangerie Artisanale à Chavagne - Vanessa & Baptiste
              </h2>

              <div className="grid md:grid-cols-2 gap-8 text-gray-700">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Boulangerie Traditionnelle à Chavagne (35310)
                  </h3>
                  <p className="mb-4 leading-relaxed">
                    Située au cœur de <strong>Chavagne</strong>, la <strong>Boulangerie Vanessa & Baptiste</strong> est
                    votre <strong>boulangerie artisanale</strong> de référence depuis 2010. Nous sommes des <strong>artisans
                    boulangers</strong> passionnés, spécialisés dans la fabrication de <strong>pain traditionnel</strong>,
                    de <strong>pâtisseries fines</strong> et de <strong>chocolats artisanaux</strong>.
                  </p>
                  <p className="mb-4 leading-relaxed">
                    Notre <strong>boulangerie à Chavagne</strong> propose une large gamme de <strong>pains frais</strong>
                    cuits quotidiennement : <strong>baguette tradition</strong>, pain de campagne, pain aux céréales,
                    pain complet et bien d&apos;autres spécialités. Tous nos produits sont fabriqués sur place avec
                    des ingrédients de qualité sélectionnés auprès de fournisseurs locaux.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Pâtisserie et Chocolaterie Artisanale
                  </h3>
                  <p className="mb-4 leading-relaxed">
                    En tant que <strong>pâtissiers chocolatiers</strong> expérimentés, nous créons des
                    <strong> pâtisseries sur-mesure</strong> pour toutes vos occasions : anniversaires, mariages,
                    baptêmes et événements professionnels. Notre <strong>chocolaterie artisanale</strong> propose
                    des créations uniques : truffes, pralinés, ganaches et ballotins personnalisés.
                  </p>
                  <p className="mb-4 leading-relaxed">
                    Découvrez également nos <strong>viennoiseries</strong> fraîches chaque matin : croissants,
                    pains au chocolat, pains aux raisins, chaussons aux pommes. Notre équipe de 15 collaborateurs
                    met tout son savoir-faire au service de votre gourmandise.
                  </p>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Boulangerie Ouverte à Chavagne - Ille-et-Vilaine (35)
                </h3>
                <div className="grid md:grid-cols-3 gap-6 text-gray-700">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Nos Spécialités</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Pain artisanal et baguette tradition</li>
                      <li>• Viennoiseries fraîches</li>
                      <li>• Pâtisseries fines</li>
                      <li>• Chocolats maison</li>
                      <li>• Gâteaux personnalisés</li>
                      <li>• Sandwichs et snacking</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Zones Desservies</h4>
                    <p className="text-sm leading-relaxed">
                      <strong>Boulangerie à Chavagne</strong> et communes environnantes :
                      Rennes, L&apos;Hermitage, Mordelles, Cintré, Bruz, Saint-Grégoire.
                      Livraison possible pour les commandes professionnelles et événements.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Pourquoi Nous Choisir ?</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• 14 ans d&apos;expérience</li>
                      <li>• Fabrication 100% artisanale</li>
                      <li>• Ingrédients locaux</li>
                      <li>• Produits frais quotidiens</li>
                      <li>• Équipe de 15 professionnels</li>
                      <li>• Service personnalisé</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">
                  <strong>Boulangerie Vanessa & Baptiste</strong> - 1 Rue du Centre, 35310 Chavagne -
                  Tél : <a href="tel:+33299643580" className="text-primary hover:underline">02 99 64 35 80</a>
                </p>
                <p className="text-sm text-gray-500">
                  Mots-clés : boulangerie Chavagne, boulanger Chavagne, pâtisserie Chavagne, chocolaterie Chavagne,
                  pain artisanal 35, boulangerie Rennes, boulangerie Ille-et-Vilaine, artisan boulanger 35310,
                  baguette tradition Chavagne, pâtissier Chavagne
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
