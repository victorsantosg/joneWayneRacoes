'use client';

import Link from 'next/link';
import { useCartStore } from '../../store/useCartStore';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

// Usando os dados exatos do banco (seed.sql) para simular produtos reais
const mockProdutos = {
  p1: {
    id: '11111111-1111-1111-1111-111111111111',
    nome: 'SM Raça Bruta 40kg',
    preco: 164.90,
    imagem_url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFbYJSsn4AmJ26DKw7uyGsYBg46mrVldXsmwM11DEfq1cZ48Qf-gihFUhtU-tucgN7sX0ZF75L8KfJeLEsRivQdOi62fnVeVaTkW9n7iD_BDseTcvM97df9yxVuNjAyQNHusObmuwIo3nLmf9aI_ynbSXtLrrwmS--zoEj1EDGAntVYiKw0qsBRJ2aFkqjq4OOs673aaayfUWLZCEBDV0_DpYNdKg0T9rAiGaOO1aTyM87nwt1X34oz-imUelAkyGL6orFfHF4d_A',
  },
  p4: {
    id: '44444444-4444-4444-4444-444444444444',
    nome: 'Postura Bruta 20kg',
    preco: 79.90,
    imagem_url: 'https://images.unsplash.com/photo-1563214539-7756fdf19623?w=500&auto=format&fit=crop',
  },
  p6: {
    id: '66666666-6666-6666-6666-666666666666',
    nome: 'Bovino Leite Elite 40kg',
    preco: 115.50,
    imagem_url: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=500&auto=format&fit=crop',
  }
};

const pedidos = [
  {
    id: '#JW-4592',
    data: '24 Mai 2026',
    status: 'Em Rota de Entrega',
    statusColor: 'bg-primary-container text-on-primary-container',
    total: 'R$ 445,30',
    itens: [
      { product: mockProdutos.p1, quantity: 2 },
      { product: mockProdutos.p6, quantity: 1 }
    ],
    endereco: 'Fazenda Bela Vista, KM 45 - Zona Rural, Uberaba/MG',
    pagamento: 'PIX à Vista'
  },
  {
    id: '#JW-4011',
    data: '10 Mai 2026',
    status: 'Entregue',
    statusColor: 'bg-surface-container-high text-on-surface-variant',
    total: 'R$ 799,00',
    itens: [
      { product: mockProdutos.p4, quantity: 10 }
    ],
    endereco: 'Av. das Indústrias, 1000 - Distrito Industrial, Maracanaú/CE',
    pagamento: 'Cartão de Crédito (3x)'
  }
];

export default function PedidosPage() {
  const { addItem } = useCartStore();
  const router = useRouter();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleComprarNovamente = (itens: any[]) => {
    itens.forEach(item => {
      addItem(item.product, item.quantity);
    });
    router.push('/carrinho');
  };

  const toggleDetails = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <>

      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 min-h-[70vh]">
        <div className="flex justify-between items-end mb-8">
          <h1 className="font-display-lg text-display-lg text-primary">Meus Pedidos</h1>
          <Link href="/#produtos" className="text-secondary font-bold hover:underline font-label-sm text-label-sm uppercase tracking-widest">
            Fazer Novo Pedido
          </Link>
        </div>
        
        <div className="flex flex-col gap-6">
          {pedidos.map(pedido => {
            const isExpanded = expandedId === pedido.id;
            
            return (
              <div key={pedido.id} className="bg-white border border-outline-variant p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-outline-variant/50">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-headline-lg text-headline-lg text-primary">{pedido.id}</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${pedido.statusColor}`}>
                        {pedido.status}
                      </span>
                    </div>
                    <span className="text-on-surface-variant text-sm">Realizado em {pedido.data}</span>
                  </div>
                  <div className="text-left md:text-right">
                    <span className="block text-on-surface-variant text-sm mb-1 uppercase tracking-widest">Total</span>
                    <span className="font-display-lg text-primary leading-none text-2xl">{pedido.total}</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <span className="font-label-sm text-on-surface-variant uppercase tracking-wider mb-2 block">Itens do Pedido</span>
                  {pedido.itens.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-on-surface">
                      <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                      {item.product.nome} (x{item.quantity})
                    </div>
                  ))}
                </div>

                {isExpanded && (
                  <div className="mt-6 pt-6 border-t border-outline-variant/50 grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-top-4 duration-300">
                    <div>
                      <span className="font-label-sm text-on-surface-variant uppercase tracking-wider mb-2 block">Endereço de Entrega</span>
                      <p className="text-on-surface text-body-md">{pedido.endereco}</p>
                    </div>
                    <div>
                      <span className="font-label-sm text-on-surface-variant uppercase tracking-wider mb-2 block">Método de Pagamento</span>
                      <p className="text-on-surface text-body-md">{pedido.pagamento}</p>
                    </div>
                    <div className="md:col-span-2 pt-4">
                      <span className="font-label-sm text-on-surface-variant uppercase tracking-wider mb-2 block">Status Logístico</span>
                      <div className="w-full bg-surface-container-highest rounded-full h-2.5 mb-2">
                        <div className="bg-primary h-2.5 rounded-full" style={{ width: pedido.status === 'Entregue' ? '100%' : '60%' }}></div>
                      </div>
                      <p className="text-xs text-on-surface-variant">
                        {pedido.status === 'Entregue' ? 'Pedido concluído com sucesso.' : 'O motorista está a caminho do seu endereço.'}
                      </p>
                    </div>
                  </div>
                )}
                
                <div className="mt-6 flex gap-4">
                  <button 
                    onClick={() => toggleDetails(pedido.id)}
                    className="px-6 py-2 border-2 border-primary text-primary rounded font-bold hover:bg-primary-container transition-all active:scale-95 flex items-center gap-2"
                  >
                    {isExpanded ? 'Esconder Detalhes' : 'Ver Detalhes'}
                    <span className="material-symbols-outlined text-sm">{isExpanded ? 'expand_less' : 'expand_more'}</span>
                  </button>
                  <button 
                    onClick={() => handleComprarNovamente(pedido.itens)}
                    className="px-6 py-2 bg-primary text-on-primary rounded font-bold hover:bg-tertiary transition-all active:scale-95"
                  >
                    Comprar Novamente
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}
