
import React, { useState } from 'react';
import { BananaMap } from './components/BananaMap';

// External URL for the logo image
const logoSrc = 'https://i.ibb.co/b5skSvXY/001.png';

const App: React.FC = () => {
  const [showMap, setShowMap] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-8 px-4 relative overflow-x-hidden bg-gradient-to-b from-yellow-50 to-white">
      {/* Background Decoration */}
      <div className="absolute top-[-5%] left-[-5%] w-96 h-96 bg-yellow-200 rounded-full blur-3xl opacity-30 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-80 h-80 bg-yellow-300 rounded-full blur-3xl opacity-20 pointer-events-none"></div>

      <main className="z-10 w-full max-w-2xl text-center space-y-6">
        <header className="flex flex-col items-center space-y-4">
          {/* Large Logo Image Container - Always on top */}
          <div className="relative group animate-float flex items-center justify-center">
            <img 
              src={logoSrc} 
              alt="Banana Character" 
              className="w-56 md:w-72 h-auto drop-shadow-2xl transition-transform duration-300 group-hover:scale-105 mix-blend-multiply"
            />
            {/* Shadow under the character */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-3 bg-black/5 blur-xl rounded-full"></div>
          </div>

          <div className="pt-2">
            <h2 className="text-4xl md:text-6xl font-black text-gray-800 tracking-tight">
              החיפוש אחר הבננה
            </h2>
            <p className="text-gray-500 mt-2 font-medium text-lg">מוצאים לך את הבננה האבודה ברגע</p>
          </div>
        </header>

        <div className="flex justify-center py-4">
          <button
            onClick={() => setShowMap(true)}
            className={`
              transition-all duration-500 transform
              px-12 py-6 text-2xl font-black rounded-3xl
              shadow-xl hover:shadow-2xl active:scale-95
              border-b-4 
              ${showMap 
                ? 'bg-yellow-100 text-yellow-800 cursor-default scale-90 opacity-80 border-transparent' 
                : 'bg-yellow-400 text-yellow-900 border-yellow-600 hover:bg-yellow-300 hover:-translate-y-1'
              }
            `}
          >
            ואיפה הבננה עכשיו?
          </button>
        </div>

        <div 
          className={`
            transition-all duration-700 ease-in-out
            w-full bg-white rounded-3xl shadow-2xl overflow-hidden border-8 border-white ring-4 ring-yellow-200
            ${showMap ? 'opacity-100 translate-y-0 scale-100 mb-8 aspect-video md:aspect-[16/9]' : 'opacity-0 translate-y-10 scale-95 pointer-events-none h-0'}
          `}
        >
          {showMap && <BananaMap />}
        </div>

        {showMap && (
          <div className="animate-bounce mt-4 inline-flex items-center gap-3 bg-yellow-400 text-yellow-900 px-8 py-3 rounded-full font-black shadow-lg text-xl">
            <span>📍</span>
            <span>הנה היא! עוזי חיטמן 3, עכו</span>
          </div>
        )}
      </main>

      <footer className="mt-12 text-gray-400 text-sm font-medium pb-8">
        נוצר באהבה לבננות &copy; {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export default App;
