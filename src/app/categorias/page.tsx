
import Link from 'next/link';

export default function CategoriasPage() {
  const categorias = [
    { id: 'equinos', nome: 'Equinos', icon: 'pets', desc: 'Rações e suplementos para cavalos de alta performance.' },
    { id: 'aves', nome: 'Aves', icon: 'bakery_dining', desc: 'Nutrição completa para postura e corte.' },
    { id: 'suinos', nome: 'Suínos', icon: 'egg', desc: 'Engorda rápida e com saúde garantida.' },
    { id: 'bovinos', nome: 'Bovinos', icon: 'agriculture', desc: 'Misturas e sais minerais para gado de corte e leite.' },
    { id: 'suplementos', nome: 'Suplementos', icon: 'science', desc: 'Vitaminas e minerais isolados para formulação própria.' }
  ];

  return (
    <>

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12 min-h-[70vh]">
        <h1 className="text-3xl md:text-4xl font-black text-on-surface mb-8">Nossas Categorias</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categorias.map(cat => (
            <Link key={cat.id} href="/#produtos" className="group p-8 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 hover:border-primary/30 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-4xl">{cat.icon}</span>
              </div>
              <h2 className="text-2xl font-black text-on-surface mb-3 group-hover:text-primary transition-colors">{cat.nome}</h2>
              <p className="text-on-surface-variant text-sm mb-6">{cat.desc}</p>
              <div className="flex items-center gap-2 text-primary font-bold text-sm tracking-wide mt-auto group-hover:translate-x-2 transition-transform">
                Explorar Linha <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
