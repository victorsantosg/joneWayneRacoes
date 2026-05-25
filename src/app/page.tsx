import Header from '../components/Header';
import Link from 'next/link';
import { supabase } from '../lib/supabase';

export const revalidate = 0;

export default async function Page() {
  const { data: produtos } = await supabase.from('produtos').select('*').order('criado_em', { ascending: false });

  return (
    <>
      <Header />
<main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8 mb-20 md:mb-0">
{/*  Hero Banner: Festival do Cavalo  */}
<section className="relative h-[350px] md:h-[400px] mb-12 rounded-xl overflow-hidden shadow-xl group bg-primary">
<div className="absolute inset-0 bg-[length:auto_100%] bg-right bg-no-repeat transition-transform duration-700 group-hover:scale-105 opacity-90" style={{ backgroundImage: "url('/4.jpg')" }}></div>
<div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/40 to-transparent"></div>
<div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-center max-w-2xl">
<span className="inline-block bg-secondary-container text-on-secondary-container px-4 py-1 rounded-full font-label-sm text-label-sm mb-4 w-fit">DESTAQUE RURAL</span>
<h2 className="font-display-lg text-display-lg text-white mb-4 leading-tight">Festival do Cavalo Raça Bruta</h2>
<p className="text-on-primary-container text-body-md mb-8 max-w-md">Descubra a linha premium de nutrição para equinos atletas. Performance superior, cascos inquebráveis e pelagem de campeão.</p>
<div className="flex gap-4">
<button className="bg-primary-fixed text-on-primary-fixed px-8 py-3 rounded font-bold hover:bg-primary-fixed-dim transition-all active:scale-95">Ver Ofertas</button>
<button className="border-2 border-white text-white px-8 py-3 rounded font-bold hover:bg-white/10 transition-all active:scale-95">Saiba Mais</button>
</div>
</div>
</section>
{/*  Category Selector  */}
<section className="mb-12">
<h3 className="font-headline-lg text-headline-lg text-primary mb-6 flex items-center gap-2">
<span className="material-symbols-outlined">grid_view</span>
                Navegação por Espécie
            </h3>
<div className="flex gap-4 overflow-x-auto pb-4 custom-scroll snap-x">
<button className="snap-start flex-none flex items-center gap-3 bg-secondary-container text-on-secondary-container px-8 py-4 rounded-full transition-all active:translate-x-1 shadow-md">
<span className="material-symbols-outlined">pets</span>
<span className="font-bold">Equinos</span>
</button>
<button className="snap-start flex-none flex items-center gap-3 bg-surface-container-high text-on-surface-variant px-8 py-4 rounded-full hover:bg-surface-container-highest transition-all">
<span className="material-symbols-outlined">bakery_dining</span>
<span className="font-bold">Aves</span>
</button>
<button className="snap-start flex-none flex items-center gap-3 bg-surface-container-high text-on-surface-variant px-8 py-4 rounded-full hover:bg-surface-container-highest transition-all">
<span className="material-symbols-outlined">egg</span>
<span className="font-bold">Suínos</span>
</button>
<button className="snap-start flex-none flex items-center gap-3 bg-surface-container-high text-on-surface-variant px-8 py-4 rounded-full hover:bg-surface-container-highest transition-all">
<span className="material-symbols-outlined">agriculture</span>
<span className="font-bold">Bovinos</span>
</button>
<button className="snap-start flex-none flex items-center gap-3 bg-surface-container-high text-on-surface-variant px-8 py-4 rounded-full hover:bg-surface-container-highest transition-all">
<span className="material-symbols-outlined">science</span>
<span className="font-bold">Suplementos</span>
</button>
</div>
</section>
{/*  Product Grid  */}
<section className="mb-16">
<div className="flex justify-between items-end mb-8">
<h3 className="font-headline-lg text-headline-lg text-primary">Nutrição de Alta Performance</h3>
<a className="text-secondary font-bold hover:underline font-label-sm text-label-sm uppercase tracking-widest" href="#">Ver Todos</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
{produtos?.map((produto) => (
<div key={produto.id} className="group bg-white border border-outline-variant p-6 flex flex-col relative transition-all hover:shadow-2xl hover:-translate-y-1">
<Link href={`/produtos/${produto.id}`} className="block relative mb-6 aspect-square overflow-hidden bg-surface-container-low flex items-center justify-center">
<img alt={produto.nome} className="h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src={produto.imagem_url} />
{produto.destaque_tag && (
<div className="absolute top-4 left-4 bg-primary-fixed text-on-primary-fixed px-3 py-1 text-xs font-bold rounded-full">
{produto.destaque_tag}
</div>
)}
<div className="absolute bottom-4 right-4 w-20 h-20 grain-window bg-surface shadow-inner overflow-hidden border-2 border-primary/20">
<div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=200')] bg-cover"></div>
</div>
</Link>
<div className="flex-1">
<div className="flex flex-wrap gap-2 mb-3">
{produto.tags?.map((tag: string, index: number) => (
<span key={index} className="bg-secondary-container text-on-secondary-container text-label-sm px-2 py-0.5 rounded font-bold">{tag}</span>
))}
</div>
<Link href={`/produtos/${produto.id}`} className="hover:underline">
<h4 className="font-headline-lg text-headline-lg text-primary mb-2">{produto.nome}</h4>
</Link>
<p className="text-on-surface-variant text-body-md mb-6 line-clamp-2">{produto.descricao}</p>
</div>
<div className="mt-auto pt-6 border-t border-outline-variant flex items-center justify-between">
<div className="flex flex-col">
{produto.preco_antigo && <span className="text-label-sm text-on-surface-variant line-through">R$ {Number(produto.preco_antigo).toFixed(2).replace('.', ',')}</span>}
<span className="text-headline-lg text-primary font-extrabold">R$ {Number(produto.preco).toFixed(2).replace('.', ',')}</span>
</div>
<Link href={`/produtos/${produto.id}`}>
<button className="bg-primary text-on-primary p-4 rounded hover:bg-tertiary transition-all active:scale-95 shadow-md">
<span className="material-symbols-outlined">add_shopping_cart</span>
</button>
</Link>
</div>
</div>
))}
</div>
</section>
{/*  Promotional Bento Grid  */}
<section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
<div className="md:col-span-2 bg-primary-container text-on-primary-container p-8 rounded-xl flex flex-col justify-center overflow-hidden relative min-h-[300px]">
<div className="z-10">
<h3 className="font-display-lg text-display-lg mb-2">Nutrição Científica</h3>
<p className="max-w-md text-on-primary-container/80 mb-6">Nossos laboratórios garantem a maior absorção de nutrientes do mercado nacional.</p>
<button className="bg-secondary-container text-on-secondary-container px-6 py-2 rounded-full font-bold hover:scale-105 transition-transform">Ver Laudos</button>
</div>
<span className="material-symbols-outlined absolute -bottom-10 -right-10 text-[200px] opacity-10">science</span>
</div>
<div className="bg-tertiary-container text-on-tertiary-container p-8 rounded-xl flex flex-col justify-end min-h-[300px]">
<h3 className="font-headline-lg text-headline-lg mb-4">Entrega Bruta</h3>
<p className="mb-6 opacity-80">Logística própria para garantir que sua ração chegue fresca e no prazo.</p>
<div className="flex items-center gap-2 font-bold underline cursor-pointer">
                    Rastrear Pedido <span className="material-symbols-outlined">local_shipping</span>
</div>
</div>
</section>
</main>
{/*  BottomNavBar (Mobile only)  */}
<nav className="md:hidden fixed bottom-0 w-full z-50 flex justify-around items-center px-4 py-2 bg-surface border-t border-outline-variant shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
<a className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-full px-4 py-1 transition-all active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
<span className="font-label-sm text-label-sm">Início</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-all" href="#">
<span className="material-symbols-outlined">grid_view</span>
<span className="font-label-sm text-label-sm">Categorias</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-all" href="#">
<span className="material-symbols-outlined">receipt_long</span>
<span className="font-label-sm text-label-sm">Pedidos</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-all" href="#">
<span className="material-symbols-outlined">person</span>
<span className="font-label-sm text-label-sm">Perfil</span>
</a>
</nav>
{/*  Footer  */}
<footer className="w-full px-margin-desktop py-12 flex flex-col md:flex-row justify-between items-center gap-gutter bg-surface-container-lowest border-t-2 border-primary/10">
<div className="flex flex-col items-center md:items-start">
<h2 className="font-headline-lg text-headline-lg text-primary font-bold mb-2">Jone Wayne Rações</h2>
<p className="font-label-sm text-label-sm text-on-surface-variant/70 text-center md:text-left">© 2024 Jone Wayne Rações - Nutrição de Bruta Performance.</p>
</div>
<div className="flex gap-8 mt-6 md:mt-0">
<a className="font-label-sm text-label-sm text-on-surface-variant/70 hover:text-primary underline transition-all" href="#">Privacidade</a>
<a className="font-label-sm text-label-sm text-on-surface-variant/70 hover:text-primary underline transition-all" href="#">Termos de Uso</a>
<a className="font-label-sm text-label-sm text-on-surface-variant/70 hover:text-primary underline transition-all" href="#">Rastreio</a>
<a className="font-label-sm text-label-sm text-on-surface-variant/70 hover:text-primary underline transition-all" href="#">Fale Conosco</a>
</div>
<div className="flex gap-4 mt-6 md:mt-0">
<span className="material-symbols-outlined text-primary cursor-pointer hover:scale-110 transition-transform">share</span>
<span className="material-symbols-outlined text-primary cursor-pointer hover:scale-110 transition-transform">location_on</span>
</div>
</footer>


    </>
  );
}
