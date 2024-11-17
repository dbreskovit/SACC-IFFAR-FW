import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import HeaderLink from './HeaderLink';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 z-40 w-full glass transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06]">
      <header className="max-w-8xl mx-auto">
        <div
          className={`flex items-center justify-between ${
            isMenuOpen ? 'flex-col' : 'flex-row'
          } py-2 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-4 lg:mx-0`}
        >
          <div className="flex w-full items-center justify-between">
            <a href="/" className="flex items-center space-x-2">
              <img src="/favicon.svg" alt="Logo do Evento" className="h-10 w-auto" />
            </a>

            <button
              className="lg:hidden flex items-center justify-center p-3 rounded-md text-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>

          <nav
            className={`flex-col lg:flex-row 
                ${isMenuOpen ? 'flex' : 'hidden lg:flex'} 
                space-y-4 lg:space-y-0 lg:space-x-4 w-full lg:w-1/2 font-semibold text-base md:text-md text-slate-100 justify-end mt-4 lg:mt-0`} // Adicionei mt-4 para aumentar a distância no mobile
          >
            <HeaderLink href="/sobre">Sobre o Evento</HeaderLink>
            <HeaderLink href="/sobre">Programação</HeaderLink>
            <HeaderLink href="/patrocinio">Patrocine-nos 💜</HeaderLink>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;