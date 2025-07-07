import { useEffect, useState } from 'react';
import { urlFor, fetchQuantumPosts } from '@/lib/sanityUtils';
import { connectTONWallet, connectEthereumWallet } from '@/utils/cryptoUtils';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [wallet, setWallet] = useState({ eth: null, ton: null });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const quantumPosts = await fetchQuantumPosts();
        setPosts(quantumPosts);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleEthereumConnect = async () => {
    try {
      const ethWallet = await connectEthereumWallet();
      setWallet(prev => ({ ...prev, eth: ethWallet }));
    } catch (error) {
      alert(error.message);
    }
  };

  const handleTONConnect = async () => {
    try {
      const tonWallet = await connectTONWallet();
      setWallet(prev => ({ ...prev, ton: tonWallet }));
    } catch (error) {
      alert(error.message);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="quantum-loader">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
          МелеКтрон Квантна Платформа
        </h1>
        <p className="text-xl max-w-2xl mx-auto">
          Истражите будућност квантне електронике и блокчејн технологија
        </p>
        
        <div className="mt-8 flex justify-center gap-4">
          <button 
            onClick={handleEthereumConnect}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all"
          >
            {wallet.eth ? '✅ Ethereum' : '🔗 Повежи Ethereum'}
          </button>
          
          <button 
            onClick={handleTONConnect}
            className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg transition-all"
          >
            {wallet.ton ? '✅ TON' : '🔗 Повежи TON'}
          </button>
        </div>
      </header>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Најновије Квантне Објаве</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(post => (
            <div key={post._id} className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-purple-500 transition-all">
              {post.mainImage && (
                <img 
                  src={urlFor(post.mainImage).width(600).url()} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-400 mb-4">{post.description}</p>
                <button className="text-purple-500 hover:text-purple-400 font-medium">
                  Прочитај више →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 mb-16">
        <h2 className="text-3xl font-bold mb-6">Квантна Архитектура</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="mb-4">
              Наша платформа комбинује квантно рачунарство са блокчејн технологијом 
              како би створила јединствене могућности:
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Квантна енкрипција за непробојну сигурност
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Блокчејн базирана дистрибуција квантних кључева
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Децентрализовани квантни рачунарски ресурси
              </li>
            </ul>
          </div>
          <div className="bg-gray-800 rounded-xl p-6">
            <div className="quantum-grid">
              {[...Array(16)].map((_, i) => (
                <div key={i} className="quantum-cell">
                  <div className="quantum-dot"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}