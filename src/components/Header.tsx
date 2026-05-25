'use client';
import Link from 'next/link';
import { useCartStore } from '../store/useCartStore';
import { useEffect, useState } from 'react';

export default function Header() {
  const items = useCartStore(state => state.items);
  const [mounted, setMounted] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const totalItems = mounted ? items.reduce((acc, item) => acc + item.quantity, 0) : 0;

  return (
    <header className="bg-primary/95 backdrop-blur-md shadow-md sticky top-0 z-50 border-b border-primary-container/20">
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-3 w-full max-w-container-max mx-auto">
        <div className="flex items-center gap-4">
          <button onClick={() => setDrawerOpen(true)} className="md:hidden text-on-primary hover:bg-primary-container p-2 rounded-full transition-colors active:scale-95 duration-150 flex items-center justify-center">
            <span className="material-symbols-outlined">menu</span>
          </button>
          <Link href="/">
            <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-secondary-container tracking-tight">Jone Wayne Rações</h1>
          </Link>
        </div>
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/70">search</span>
            <input className="w-full bg-surface-container-low/60 border border-outline-variant/30 rounded-full py-2 pl-10 pr-4 text-body-md focus:ring-2 focus:ring-secondary-container focus:bg-surface-container-low transition-all" placeholder="Buscar nutrição bruta..." type="text" />
          </div>
        </div>
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-6 items-center">
            <Link className="text-secondary-container font-bold hover:text-white transition-colors font-label-sm text-label-sm py-1 border-b-2 border-secondary-container" href="/">Início</Link>
            <Link className="text-on-primary/80 hover:text-secondary-container transition-colors font-label-sm text-label-sm px-2 py-1" href="/categorias">Categorias</Link>
            <Link className="text-on-primary/80 hover:text-secondary-container transition-colors font-label-sm text-label-sm px-2 py-1" href="/pedidos">Pedidos</Link>
          </nav>
          <Link href="/carrinho">
            <button className="flex items-center gap-2 bg-secondary-container text-on-secondary-container px-4 py-2 rounded-full font-label-sm text-label-sm hover:bg-secondary transition-all active:scale-95 relative">
              <span className="material-symbols-outlined text-xl">shopping_cart</span>
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

      {/* Mobile Drawer */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity" onClick={() => setDrawerOpen(false)} />
          <div className="relative flex flex-col w-4/5 max-w-xs h-full bg-background p-6 shadow-2xl transition-transform duration-300 ease-in-out border-r border-outline-variant/20">
            <div className="flex justify-between items-center mb-8">
              <span className="font-bold text-lg text-primary font-headline-lg">Menu</span>
              <button onClick={() => setDrawerOpen(false)} className="p-2 text-on-surface hover:bg-surface-container-high rounded-full transition-colors">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            
            {/* Search in Drawer */}
            <div className="relative w-full mb-6">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/70">search</span>
              <input className="w-full bg-surface-container-low border border-outline-variant/30 rounded-full py-2.5 pl-10 pr-4 text-body-md focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Buscar nutrição bruta..." type="text" />
            </div>

            <nav className="flex flex-col gap-2">
              <Link onClick={() => setDrawerOpen(false)} className="text-on-surface hover:text-primary hover:bg-surface-container-low font-bold p-3 rounded-lg flex items-center gap-3 transition-colors" href="/">
                <span className="material-symbols-outlined text-primary">home</span> Início
              </Link>
              <Link onClick={() => setDrawerOpen(false)} className="text-on-surface hover:text-primary hover:bg-surface-container-low font-bold p-3 rounded-lg flex items-center gap-3 transition-colors" href="/categorias">
                <span className="material-symbols-outlined text-primary">grid_view</span> Categorias
              </Link>
              <Link onClick={() => setDrawerOpen(false)} className="text-on-surface hover:text-primary hover:bg-surface-container-low font-bold p-3 rounded-lg flex items-center gap-3 transition-colors" href="/pedidos">
                <span className="material-symbols-outlined text-primary">receipt_long</span> Meus Pedidos
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
