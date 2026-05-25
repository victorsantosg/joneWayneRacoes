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
    <>
    <header className="bg-white/90 dark:bg-black/90 backdrop-blur-xl shadow-sm sticky top-0 z-[999] border-b border-outline-variant/20 transition-all">
      <div className="flex justify-between items-center px-4 md:px-8 py-3 md:py-4 w-full max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <button onClick={() => setDrawerOpen(true)} className="md:hidden text-gray-900 dark:text-white hover:bg-surface-container p-2 rounded-full transition-colors active:scale-95 duration-150 flex items-center justify-center">
            <span className="material-symbols-outlined text-2xl">menu</span>
          </button>
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-md">
               <span className="material-symbols-outlined text-white">agriculture</span>
            </div>
            <h1 className="font-display text-xl md:text-2xl font-black text-primary tracking-tight hidden sm:block">
              Jone Wayne
            </h1>
          </Link>
        </div>
        <div className="hidden md:flex flex-1 max-w-2xl mx-8">
          <div className="relative w-full group">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors">search</span>
            <input className="w-full bg-surface-container-lowest border border-outline-variant rounded-full py-2.5 pl-12 pr-4 text-body-md focus:ring-2 focus:ring-primary focus:border-transparent focus:bg-white transition-all shadow-sm" placeholder="Buscar nutrição premium..." type="text" />
          </div>
        </div>
        <div className="flex items-center gap-2 md:gap-6">
          <nav className="hidden lg:flex gap-6 items-center">
            <Link className="text-primary font-bold hover:text-primary-container transition-colors text-sm py-1 border-b-2 border-primary" href="/">Início</Link>
            <Link className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium px-2 py-1" href="/categorias">Categorias</Link>
            <Link className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium px-2 py-1" href="/pedidos">Pedidos</Link>
          </nav>
          
          <Link href="/carrinho" className="relative group">
            <button className="flex items-center justify-center bg-surface-container text-primary p-3 md:px-5 md:py-2.5 rounded-full font-bold text-sm hover:bg-primary hover:text-white transition-all shadow-sm active:scale-95">
              <span className="material-symbols-outlined">local_mall</span>
              <span className="hidden md:inline ml-2">Sacola</span>
            </button>
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 md:-top-2 md:-right-2 bg-error text-on-error text-xs font-black w-5 h-5 flex items-center justify-center rounded-full border-2 border-white shadow-sm">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>

      {/* Mobile Drawer */}
      {drawerOpen && (
        <div className="fixed inset-0 z-[100] flex md:hidden">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity" onClick={() => setDrawerOpen(false)} />
          <div className="relative flex flex-col w-4/5 max-w-[300px] h-full bg-surface-container-lowest p-6 shadow-2xl animate-in slide-in-from-left-full duration-300">
            <div className="flex justify-between items-center mb-6">
              <Link href="/" onClick={() => setDrawerOpen(false)} className="flex items-center gap-2">
                 <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow">
                   <span className="material-symbols-outlined text-white text-sm">agriculture</span>
                 </div>
                 <span className="font-black text-lg text-primary tracking-tight">Menu</span>
              </Link>
              <button onClick={() => setDrawerOpen(false)} className="p-2 text-on-surface hover:bg-surface-container rounded-full transition-colors active:scale-95">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            
            {/* Search in Drawer */}
            <div className="relative w-full mb-6">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
              <input className="w-full bg-surface-container border border-outline-variant/30 rounded-xl py-3 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-inner" placeholder="Buscar..." type="text" />
            </div>

            <nav className="flex flex-col gap-2">
              <Link onClick={() => setDrawerOpen(false)} className="text-on-surface hover:text-primary hover:bg-primary/10 font-bold p-3 rounded-xl flex items-center gap-3 transition-colors active:scale-95" href="/">
                <span className="material-symbols-outlined text-primary">home</span> Início
              </Link>
              <Link onClick={() => setDrawerOpen(false)} className="text-on-surface hover:text-primary hover:bg-primary/10 font-bold p-3 rounded-xl flex items-center gap-3 transition-colors active:scale-95" href="/categorias">
                <span className="material-symbols-outlined text-primary">grid_view</span> Categorias
              </Link>
              <Link onClick={() => setDrawerOpen(false)} className="text-on-surface hover:text-primary hover:bg-primary/10 font-bold p-3 rounded-xl flex items-center gap-3 transition-colors active:scale-95" href="/pedidos">
                <span className="material-symbols-outlined text-primary">receipt_long</span> Meus Pedidos
              </Link>
            </nav>
            
            <div className="mt-auto border-t border-outline-variant/20 pt-6">
               <p className="text-xs text-center text-on-surface-variant">Jone Wayne Rações © 2026</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
