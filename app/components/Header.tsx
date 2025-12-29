"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-primary">
              Boulangerie Vanessa & Baptiste
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 items-center">
            <li>
              <Link
                href="/"
                className={`text-gray-700 hover:text-primary transition-colors ${
                  isActive("/") ? "text-primary font-semibold" : ""
                }`}
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                href="/qui-sommes-nous"
                className={`text-gray-700 hover:text-primary transition-colors ${
                  isActive("/qui-sommes-nous") ? "text-primary font-semibold" : ""
                }`}
              >
                Qui sommes-nous
              </Link>
            </li>
            <li
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button className="text-gray-700 hover:text-primary transition-colors flex items-center">
                Nos Produits
                <svg
                  className={`w-4 h-4 ml-1 transition-transform ${
                    isProductsOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isProductsOpen && (
                <ul className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 w-48">
                  <li>
                    <Link
                      href="/produits/boulangerie"
                      className="block px-4 py-2 text-gray-700 hover:bg-primary-light/10 hover:text-primary transition-colors"
                    >
                      Boulangerie
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/produits/patisserie"
                      className="block px-4 py-2 text-gray-700 hover:bg-primary-light/10 hover:text-primary transition-colors"
                    >
                      Pâtisserie
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/produits/chocolaterie"
                      className="block px-4 py-2 text-gray-700 hover:bg-primary-light/10 hover:text-primary transition-colors"
                    >
                      Chocolaterie
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link
                href="/galerie"
                className={`text-gray-700 hover:text-primary transition-colors ${
                  isActive("/galerie") ? "text-primary font-semibold" : ""
                }`}
              >
                Galerie
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`text-gray-700 hover:text-primary transition-colors ${
                  isActive("/contact") ? "text-primary font-semibold" : ""
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="md:hidden mt-4 space-y-4">
            <li>
              <Link
                href="/"
                className="block text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                href="/qui-sommes-nous"
                className="block text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Qui sommes-nous
              </Link>
            </li>
            <li>
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className="block w-full text-left text-gray-700 hover:text-primary transition-colors"
              >
                Nos Produits
              </button>
              {isProductsOpen && (
                <ul className="ml-4 mt-2 space-y-2">
                  <li>
                    <Link
                      href="/produits/boulangerie"
                      className="block text-gray-600 hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Boulangerie
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/produits/patisserie"
                      className="block text-gray-600 hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Pâtisserie
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/produits/chocolaterie"
                      className="block text-gray-600 hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Chocolaterie
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link
                href="/galerie"
                className="block text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Galerie
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}