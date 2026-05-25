'use client';
import { useCartStore } from '../../store/useCartStore';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Page() {
  const { items, updateQuantity, removeItem, getTotal } = useCartStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <>

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12 min-h-[70vh]">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-black text-on-surface mb-2">Seu Carrinho</h2>
          <div className="flex items-center gap-2 text-on-surface-variant text-sm font-medium">
            <Link href="/" className="hover:text-primary transition-colors">Início</Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-primary font-bold">Carrinho</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-2xl p-6 md:p-8 shadow-sm">
              <div className="hidden md:grid grid-cols-6 gap-4 border-b border-outline-variant/30 pb-4 mb-6 text-xs uppercase tracking-wider font-bold text-on-surface-variant">
                <div className="col-span-3">PRODUTO</div>
                <div className="text-center">PREÇO</div>
                <div className="text-center">QTD</div>
                <div className="text-right">SUBTOTAL</div>
              </div>

              {!mounted || items.length === 0 ? (
                <div className="text-center py-8 text-on-surface-variant">Seu carrinho está vazio.</div>
              ) : (
                items.map((item) => (
                  <div key={item.product.id} className="grid grid-cols-1 md:grid-cols-6 gap-6 items-center border-b border-outline-variant/30 pb-6 mb-6">
                    <div className="col-span-3 flex items-center gap-6">
                      <div className="relative w-24 h-24 md:w-32 md:h-32 bg-surface-container overflow-hidden rounded-lg border border-outline-variant">
                        <img alt={item.product.nome} className="w-full h-full object-cover" src={item.product.imagem_url} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] text-primary uppercase font-bold tracking-wider mb-1">{item.product.categoria}</span>
                        <Link href={`/produtos/${item.product.id}`}>
                          <h3 className="text-lg md:text-xl font-bold text-on-surface hover:text-primary transition-colors">{item.product.nome}</h3>
                        </Link>
                        <button onClick={() => removeItem(item.product.id)} className="mt-2 text-error text-xs font-bold flex items-center gap-1 hover:underline w-fit">
                          <span className="material-symbols-outlined text-[16px]">delete</span> Remover
                        </button>
                      </div>
                    </div>
                    <div className="flex md:block justify-between items-center text-center">
                      <span className="md:hidden font-label-sm text-label-sm text-on-surface-variant">Preço:</span>
                      <span className="font-label-sm text-label-sm font-bold text-on-surface">R$ {item.product.preco.toFixed(2).replace('.', ',')}</span>
                    </div>
                    <div className="flex md:block justify-between items-center text-center">
                      <span className="md:hidden font-label-sm text-label-sm text-on-surface-variant">Quantidade:</span>
                      <div className="inline-flex items-center border border-outline-variant rounded-full overflow-hidden">
                        <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="p-2 hover:bg-surface-container-high transition-colors">
                          <span className="material-symbols-outlined text-[18px]">remove</span>
                        </button>
                        <input className="w-12 text-center bg-transparent border-none focus:ring-0 font-bold font-label-sm text-label-sm" min="1" readOnly type="number" value={item.quantity} />
                        <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="p-2 hover:bg-surface-container-high transition-colors">
                          <span className="material-symbols-outlined text-[18px]">add</span>
                        </button>
                      </div>
                    </div>
                    <div className="flex md:block justify-between items-center text-right">
                      <span className="md:hidden text-sm font-bold text-on-surface-variant">Subtotal:</span>
                      <span className="text-xl font-black text-primary">R$ {(item.product.preco * item.quantity).toFixed(2).replace('.', ',')}</span>
                    </div>
                  </div>
                ))
              )}

              <div className="mt-8 flex flex-col md:flex-row gap-4 items-center justify-between">
                <Link className="flex items-center gap-2 text-primary hover:underline font-label-sm text-label-sm font-bold" href="/">
                  <span className="material-symbols-outlined">arrow_back</span>
                  Continuar Comprando
                </Link>
                {items.length > 0 && (
                  <div className="px-4 py-1 bg-secondary-container text-on-secondary-container rounded-full font-label-sm text-label-sm flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px]">verified</span>
                    Frete Grátis Ativado
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-2xl shadow-lg p-6 md:p-8 sticky top-28">
              <h3 className="text-xl text-on-surface font-black mb-6">Resumo do Pedido</h3>
              <div className="space-y-4 border-b border-outline-variant/30 pb-6 mb-6">
                <div className="flex justify-between text-sm text-on-surface-variant">
                  <span>Subtotal</span>
                  <span className="font-bold text-on-surface">R$ {mounted ? getTotal().toFixed(2).replace('.', ',') : '0,00'}</span>
                </div>
                <div className="flex justify-between text-sm text-on-surface-variant">
                  <span>Frete</span>
                  <span className="text-primary font-black uppercase tracking-wider text-xs">Grátis</span>
                </div>
              </div>
              <div className="flex justify-between items-end mb-8">
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Total</span>
                </div>
                <span className="text-3xl text-primary font-black tracking-tight leading-none">R$ {mounted ? getTotal().toFixed(2).replace('.', ',') : '0,00'}</span>
              </div>
              <Link href={mounted && items.length > 0 ? "/checkout" : "#"}>
                <button 
                  disabled={!mounted || items.length === 0}
                  className="w-full py-4 bg-primary disabled:opacity-50 text-white font-bold text-lg hover:bg-tertiary transition-all active:scale-[0.98] duration-150 flex items-center justify-center gap-3 rounded-xl shadow-md">
                  Fechar Pedido
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
