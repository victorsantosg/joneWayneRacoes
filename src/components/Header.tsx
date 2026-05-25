'use client';
import Link from 'next/link';
import { useCartStore } from '../store/useCartStore';
import { useEffect, useState } from 'react';

export default function Header() {
  const items = useCartStore(state => state.items);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const totalItems = mounted ? items.reduce((acc, item) => acc + item.quantity, 0) : 0;

  return (
    <header className="bg-primary shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 w-full max-w-container-max mx-auto">
        <div className="flex items-center gap-4">
          <button className="text-on-primary hover:bg-tertiary-container hover:text-on-tertiary-container p-2 rounded-full transition-colors active:scale-95 duration-150">
            <span className="material-symbols-outlined">menu</span>
          </button>
          <Link href="/">
            <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-secondary-container tracking-tight">Jone Wayne Rações</h1>
          </Link>
        </div>
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
            <input className="w-full bg-surface-container-low border-none rounded-full py-2 pl-10 pr-4 text-body-md focus:ring-2 focus:ring-secondary-container" placeholder="Buscar nutrição bruta..." type="text" />
          </div>
        </div>
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-6 items-center">
            <Link className="text-secondary-container font-bold border-b-2 border-secondary-container font-label-sm text-label-sm py-1" href="/">Início</Link>
            <Link className="text-on-primary/80 hover:bg-tertiary-container hover:text-on-tertiary-container transition-colors font-label-sm text-label-sm px-2 py-1 rounded" href="/">Categorias</Link>
            <Link className="text-on-primary/80 hover:bg-tertiary-container hover:text-on-tertiary-container transition-colors font-label-sm text-label-sm px-2 py-1 rounded" href="/">Pedidos</Link>
          </nav>
          <Link href="/carrinho">
            <button className="flex items-center gap-2 bg-secondary-container text-on-secondary-container px-4 py-2 rounded-full font-label-sm text-label-sm hover:bg-secondary transition-all active:scale-95 relative">
              <span className="material-symbols-outlined">shopping_cart</span>
              <span className="hidden sm:inline">Carrinho</span>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-error text-on-error text-[10px] font-bold px-2 py-1 rounded-full">
                  {totalItems}
                </span>
              )}
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
