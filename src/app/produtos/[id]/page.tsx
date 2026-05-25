
import { supabase } from '../../../lib/supabase';
import { notFound } from 'next/navigation';
import AddToCartClient from './AddToCartClient';

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  const { data: produto } = await supabase.from('produtos').select('*').eq('id', id).single();

  if (!produto) return notFound();

  return (
    <>

      <main className="max-w-container-max mx-auto px-4 md:px-margin-desktop py-8 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-7 flex flex-col gap-4">
            <div className="aspect-square bg-surface-container rounded-xl overflow-hidden shadow-sm relative group cursor-zoom-in">
              <img alt={produto.nome} className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-500" src={produto.imagem_url} />
              {produto.destaque_tag && (
                <div className="absolute top-4 right-4 bg-secondary-container text-on-secondary-container px-4 py-1 rounded-full font-label-sm text-label-sm">
                  {produto.destaque_tag}
                </div>
              )}
            </div>
          </div>
          
          <div className="md:col-span-5 flex flex-col gap-6">
            <div className="space-y-2">
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">{produto.categoria}</span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface leading-tight">{produto.nome}</h2>
            </div>
            <div className="py-6 border-y border-outline-variant/30">
              <div className="flex items-baseline gap-2">
                <span className="font-label-sm text-label-sm text-on-surface-variant">R$</span>
                <span className="font-display-lg text-display-lg text-primary">{Number(produto.preco).toFixed(2).replace('.', ',')}</span>
              </div>
              {produto.preco_antigo && (
                <p className="font-label-sm text-label-sm text-on-surface-variant mt-1 line-through">
                  De R$ {Number(produto.preco_antigo).toFixed(2).replace('.', ',')}
                </p>
              )}
            </div>
            
            <AddToCartClient produto={produto} />
            
            <div className="space-y-4 mt-6">
              <div className="group border-b border-outline-variant pb-4">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">assignment_ind</span>
                  <h3 className="font-body-md text-body-md font-semibold">Descrição</h3>
                </div>
                <p className="mt-2 text-on-surface-variant font-body-md text-body-md pl-9">
                  {produto.descricao}
                </p>
              </div>
              {produto.tags && produto.tags.length > 0 && (
                <div className="group border-b border-outline-variant pb-4">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">science</span>
                    <h3 className="font-body-md text-body-md font-semibold">Destaques</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3 pl-9">
                    {produto.tags.map((tag: string, idx: number) => (
                      <span key={idx} className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full font-label-sm text-label-sm">{tag}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
