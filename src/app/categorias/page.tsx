import Header from '../../components/Header';
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
      <Header />
      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 min-h-[70vh]">
        <h1 className="font-display-lg text-display-lg text-primary mb-8">Nossas Categorias</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categorias.map(cat => (
            <Link key={cat.id} href="/#produtos" className="group p-8 rounded-xl bg-surface-container-low border border-outline-variant hover:border-primary hover:shadow-xl transition-all cursor-pointer">
              <div className="w-16 h-16 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">{cat.icon}</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-primary mb-2">{cat.nome}</h2>
              <p className="text-on-surface-variant mb-6">{cat.desc}</p>
              <div className="flex items-center gap-2 text-secondary font-bold text-label-sm uppercase tracking-wider group-hover:translate-x-2 transition-transform">
                Explorar <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
