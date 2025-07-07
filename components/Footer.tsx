import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* ...остали садржај... */}
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Лиценце</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/license/algolia-iso-27001" className="text-gray-400 hover:text-white">
                  Algolia ISO 27001
                </Link>
              </li>
              <li>
                <Link href="/license/cc0-1.0" className="text-gray-400 hover:text-white">
                  CC0 1.0 Универзална
                </Link>
              </li>
              <li>
                <Link href="/license/cc-by-4.0" className="text-gray-400 hover:text-white">
                  CC BY 4.0
                </Link>
              </li>
              <li>
                <Link href="/license/mit" className="text-gray-400 hover:text-white">
                  MIT Лиценца
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Melektron. Сва права задржана.</p>
        </div>
      </div>
    </footer>
  );
}