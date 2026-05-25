'use client';
import { useCartStore } from '../../store/useCartStore';
import Header from '../../components/Header';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Page() {
  const { items, updateQuantity, removeItem, getTotal } = useCartStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <>
      <Header />
      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12">
        <div className="mb-8">
          <h2 className="font-display-lg text-display-lg text-primary mb-2">Seu Carrinho</h2>
          <div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
            <Link href="/">Início</Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-secondary font-bold">Carrinho</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          <div className="lg:col-span-8">
            <div className="bg-surface-container-lowest border border-outline-variant p-6 md:p-8">
              <div className="hidden md:grid grid-cols-6 gap-4 border-b border-outline-variant pb-4 mb-6 font-label-sm text-label-sm text-on-surface-variant">
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
                        <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-1">{item.product.categoria}</span>
                        <Link href={`/produtos/${item.product.id}`}>
                          <h3 className="font-headline-lg-mobile text-on-surface text-lg md:text-xl font-bold">{item.product.nome}</h3>
                        </Link>
                        <button onClick={() => removeItem(item.product.id)} className="mt-2 text-error font-label-sm text-label-sm flex items-center gap-1 hover:underline w-fit">
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
                      <span className="md:hidden font-label-sm text-label-sm text-on-surface-variant">Subtotal:</span>
                      <span className="font-headline-lg-mobile text-primary text-xl font-bold">R$ {(item.product.preco * item.quantity).toFixed(2).replace('.', ',')}</span>
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
            <div className="bg-surface-container-low border border-outline-variant p-6 md:p-8 sticky top-28">
              <h3 className="font-headline-lg-mobile text-on-surface font-bold mb-6">Resumo do Pedido</h3>
              <div className="space-y-4 border-b border-outline-variant/30 pb-6 mb-6">
                <div className="flex justify-between font-body-md text-on-surface-variant">
                  <span>Subtotal</span>
                  <span className="font-bold">R$ {mounted ? getTotal().toFixed(2).replace('.', ',') : '0,00'}</span>
                </div>
                <div className="flex justify-between font-body-md text-on-surface-variant">
                  <span>Frete</span>
                  <span className="text-primary font-bold">Grátis</span>
                </div>
              </div>
              <div className="flex justify-between items-end mb-8">
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm text-on-surface-variant">VALOR TOTAL</span>
                </div>
                <span className="font-display-lg text-primary text-3xl font-extrabold tracking-tight">R$ {mounted ? getTotal().toFixed(2).replace('.', ',') : '0,00'}</span>
              </div>
              <Link href={mounted && items.length > 0 ? "/checkout" : "#"}>
                <button 
                  disabled={!mounted || items.length === 0}
                  className="w-full py-5 bg-primary disabled:opacity-50 text-on-primary font-bold text-lg hover:bg-tertiary hover:shadow-xl transition-all active:scale-[0.98] duration-150 flex items-center justify-center gap-3 rounded-xl">
                  Avançar para o Pagamento
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
