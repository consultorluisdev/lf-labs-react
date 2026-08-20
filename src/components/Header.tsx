import { useState } from "react";

export default function Header(){
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg/90 backdrop-blur-sm border-b border-border">
      <div className="container-content h-[72px] flex items-center justify-between">
        <a
          href="#"
          className="font-display font-700 text-xl tracking-tight text-ink flex items-center gap-2.5"
        >
          <span className="w-7 h-7 rounded-btn bg-accent flex items-center justify-center font-700 text-xl tracking-tight text-white">
            F
          </span>
          FlowDesk
        </a>
        <nav className="hidden md:flex items-center gap-8 font-body text-[15px] text-insoft">
          <a href="#beneficios" className="hover:text-ink transition-colors">
            Beneficios
          </a>
          <a
            href="#funcionalidades"
            className="hover:text-ink transition-colors"
          >
            Funcionalidades
          </a>
          <a href="#depoimentos" className="hover:text-ink transition-colors">
            Depoimentos
          </a>
        </nav>

        <div className="flex items-center gap-03">
          <a
            href="#"
            className="hidden sm:inline-block text-[15px] text-insoft hover:text-ink transition-colors px-2"
          >
            Entrar
          </a>
          <a
            href="#cta-final"
            className="btn-primary text-[14px] font-medium px-5 py-2.5 rounded-btn"
          >
            Começar grátis
          </a>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-ink hover:bg-surfacealt rounded-btn transition-colors"
            aria-label="Abrir menu"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/*mobile menu*/}
      {isMenuOpen && (
        <div className="md:hidden bg-surface/95 backdrop-blur-sm border-t border-border">
          <div className="container-content py-4 flex flex-col gap-3">
            <a
              href="#beneficios"
              className="text-inksoft hover:text-ink transition-colors py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Beneficios
            </a>
            <a
              href="#funcionalidades"
              className="text-inksoft hover:text-ink transition-colors py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Funcionalidades
            </a>
            <a
              href="#depoimentos"
              className="text-inksoft hover:text-ink transition-colors py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Depoimentos
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
