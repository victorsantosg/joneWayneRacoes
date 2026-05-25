'use client';
import { useState } from 'react';
import { useCartStore, Product } from '../../../store/useCartStore';
import { useRouter } from 'next/navigation';

export default function AddToCartClient({ produto }: { produto: Product }) {
  const [qty, setQty] = useState(1);
  const addItem = useCartStore(state => state.addItem);
  const router = useRouter();

  const handleAdd = () => {
    addItem(produto, qty);
    // Visual feedback could be added here
  };

  return (
    <>
      <div className="space-y-6">
        <div>
          <label className="font-label-sm text-label-sm text-on-surface-variant block mb-3 uppercase">Quantidade</label>
          <div className="flex items-center w-32 border border-outline rounded-lg bg-surface">
            <button onClick={() => setQty(Math.max(1, qty - 1))} className="p-3 text-on-surface hover:bg-surface-container-high transition-colors">
              <span className="material-symbols-outlined text-sm">remove</span>
            </button>
            <input className="w-full text-center border-none bg-transparent font-body-md text-body-md focus:ring-0" readOnly type="number" value={qty} />
            <button onClick={() => setQty(qty + 1)} className="p-3 text-on-surface hover:bg-surface-container-high transition-colors">
              <span className="material-symbols-outlined text-sm">add</span>
            </button>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-surface-container-lowest border-t-2 border-primary/10 p-4 md:px-margin-desktop md:py-6 z-[110] shadow-[0_-8px_30px_rgb(0,0,0,0.06)]">
        <div className="max-w-container-max mx-auto flex flex-col md:flex-row gap-4 items-center">
          <div className="hidden md:flex flex-col flex-grow">
            <span className="font-label-sm text-label-sm text-on-surface-variant">{produto.nome}</span>
            <span className="font-headline-lg text-headline-lg text-primary">R$ {Number(produto.preco).toFixed(2).replace('.', ',')}</span>
          </div>
          <div className="grid grid-cols-1 md:flex gap-3 w-full md:w-auto">
            <button onClick={() => { handleAdd(); alert('Adicionado ao carrinho'); }} className="md:min-w-[240px] px-8 py-4 border-2 border-primary text-primary font-bold hover:bg-primary/5 transition-all rounded-lg active:scale-95 duration-150 uppercase tracking-wider flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">shopping_basket</span>
              Adicionar ao Carrinho
            </button>
            <button onClick={() => { handleAdd(); router.push('/carrinho'); }} className="md:min-w-[240px] px-8 py-4 bg-primary text-on-primary font-bold hover:bg-tertiary transition-all rounded-lg active:scale-95 duration-150 uppercase tracking-wider shadow-lg flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">bolt</span>
              Comprar Agora
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
