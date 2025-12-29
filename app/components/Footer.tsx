import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">
              Boulangerie Vanessa & Baptiste
            </h3>
            <p className="text-gray-400">
              Artisan boulanger, pâtissier et chocolatier à Chavagne
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  href="/"
                  className="hover:text-primary transition-colors"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/qui-sommes-nous"
                  className="hover:text-primary transition-colors"
                >
                  Qui sommes-nous
                </Link>
              </li>
              <li>
                <Link
                  href="/produits/boulangerie"
                  className="hover:text-primary transition-colors"
                >
                  Boulangerie
                </Link>
              </li>
              <li>
                <Link
                  href="/produits/patisserie"
                  className="hover:text-primary transition-colors"
                >
                  Pâtisserie
                </Link>
              </li>
              <li>
                <Link
                  href="/produits/chocolaterie"
                  className="hover:text-primary transition-colors"
                >
                  Chocolaterie
                </Link>
              </li>
              <li>
                <Link
                  href="/galerie"
                  className="hover:text-primary transition-colors"
                >
                  Galerie
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Suivez-nous</h4>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-400 hover:text-primary transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p className="mb-2">
            &copy; {new Date().getFullYear()} Boulangerie Vanessa et Baptiste. Tous droits réservés.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/mentions-legales" className="hover:text-primary transition-colors">
              Mentions légales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}