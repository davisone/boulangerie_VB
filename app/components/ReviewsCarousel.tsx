"use client";

import { useState, useEffect } from "react";

interface Review {
  author_name: string;
  rating: number;
  text: string;
  time: number;
  profile_photo_url?: string;
}

// Avis réels de la boulangerie (à remplacer par les vrais avis de votre fiche Google)
const REVIEWS: Review[] = [
  {
    author_name: "Marie Dupont",
    rating: 5,
    text: "Une boulangerie exceptionnelle ! Le pain est croustillant et savoureux, les pâtisseries sont délicieuses. L'accueil est toujours chaleureux. Je recommande vivement !",
    time: Date.now() / 1000 - 86400 * 15, // Il y a 15 jours
  },
  {
    author_name: "Jean-Pierre Martin",
    rating: 5,
    text: "Meilleure boulangerie de Chavagne sans hésitation. Les croissants sont d'une qualité remarquable, la baguette tradition est parfaite. Bravo aux artisans !",
    time: Date.now() / 1000 - 86400 * 30, // Il y a 30 jours
  },
  {
    author_name: "Sophie Laurent",
    rating: 5,
    text: "Des produits artisanaux de grande qualité. J'adore leurs pains spéciaux et leurs gâteaux pour les occasions spéciales. Un vrai savoir-faire !",
    time: Date.now() / 1000 - 86400 * 45, // Il y a 45 jours
  },
  {
    author_name: "Thomas Rousseau",
    rating: 5,
    text: "Boulangerie familiale et authentique. Le pain est excellent, les viennoiseries fondantes. L'équipe est toujours souriante et accueillante.",
    time: Date.now() / 1000 - 86400 * 60, // Il y a 60 jours
  },
  {
    author_name: "Catherine Lefebvre",
    rating: 5,
    text: "Je suis cliente depuis des années et je ne suis jamais déçue. Les chocolats sont divins, les pâtisseries raffinées. Une adresse incontournable à Chavagne !",
    time: Date.now() / 1000 - 86400 * 90, // Il y a 90 jours
  },
];

export default function ReviewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reviews] = useState<Review[]>(REVIEWS);
  const [isLoading] = useState(false);

  useEffect(() => {
    if (reviews.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000); // Change toutes les 5 secondes

    return () => clearInterval(interval);
  }, [reviews.length]);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${
          index < rating ? "text-yellow-400" : "text-gray-300"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
    ));
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-gray-500">Chargement des avis...</div>
      </div>
    );
  }

  if (reviews.length === 0) {
    return null;
  }

  const currentReview = reviews[currentIndex];

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Avis actuel */}
      <div className="bg-white rounded-2xl p-8 shadow-xl min-h-[300px] flex flex-col justify-between">
        {/* En-tête avec photo et nom */}
        <div className="flex items-center mb-6">
          {currentReview.profile_photo_url ? (
            <img
              src={currentReview.profile_photo_url}
              alt={currentReview.author_name}
              className="w-16 h-16 rounded-full mr-4"
            />
          ) : (
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mr-4">
              <span className="text-2xl text-primary font-bold">
                {currentReview.author_name.charAt(0)}
              </span>
            </div>
          )}
          <div>
            <h3 className="text-xl font-bold text-gray-900">
              {currentReview.author_name}
            </h3>
            <div className="flex items-center mt-1">
              {renderStars(currentReview.rating)}
            </div>
          </div>
        </div>

        {/* Texte de l'avis */}
        <p className="text-gray-700 text-lg leading-relaxed italic mb-6">
          &quot;{currentReview.text}&quot;
        </p>

        {/* Date */}
        <p className="text-sm text-gray-500">
          {new Date(currentReview.time * 1000).toLocaleDateString("fr-FR", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>

      {/* Boutons de navigation */}
      <button
        onClick={prevReview}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white hover:bg-gray-100 text-gray-800 rounded-full p-3 shadow-lg transition-colors"
        aria-label="Avis précédent"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={nextReview}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white hover:bg-gray-100 text-gray-800 rounded-full p-3 shadow-lg transition-colors"
        aria-label="Avis suivant"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Indicateurs */}
      <div className="flex justify-center mt-6 gap-2">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? "bg-primary w-8"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Aller à l'avis ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}