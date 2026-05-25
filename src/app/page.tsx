import Link from 'next/link';
import { supabase } from '../lib/supabase';

export const revalidate = 0;

export default async function Page() {
  const { data: produtos } = await supabase.from('produtos').select('*').order('criado_em', { ascending: false });

  return (
    <>
      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8">
        {/*  Hero Banner: Festival do Cavalo  */}
        <section className="relative min-h-[400px] mb-12 rounded-xl overflow-hidden shadow-xl group bg-primary flex items-center">
          <div className="absolute inset-0 bg-[length:auto_100%] bg-right bg-no-repeat transition-transform duration-700 group-hover:scale-105 opacity-90" style={{ backgroundImage: "url('/4.jpg')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/50 to-transparent"></div>
          <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-center max-w-2xl">
            <span className="inline-block bg-secondary-container text-on-secondary-container px-4 py-1 rounded-full font-label-sm text-label-sm mb-4 w-fit">DESTAQUE RURAL</span>
            <h2 className="font-display-lg text-display-lg text-white mb-4 leading-tight">Festival do Cavalo Raça Bruta</h2>
            <p className="text-on-primary-container text-body-md mb-8 max-w-md">Descubra a linha premium de nutrição para equinos atletas. Performance superior, cascos inquebráveis e pelagem de campeão.</p>
            <div className="flex flex-wrap gap-4">
              <a href="#produtos" className="bg-primary-fixed text-on-primary-fixed px-8 py-3 rounded font-bold hover:bg-primary-fixed-dim transition-all active:scale-95 text-center flex-1 md:flex-none">Ver Ofertas</a>
              <Link href="/categorias" className="border-2 border-white text-white px-8 py-3 rounded font-bold hover:bg-white/10 transition-all active:scale-95 text-center flex-1 md:flex-none">Saiba Mais</Link>
            </div>
          </div>
        </section>

        {/*  Trust Badges: Vantagens Rural  */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="flex items-center gap-4 bg-surface-container-low p-5 rounded-xl border border-outline-variant/30">
            <span className="material-symbols-outlined text-4xl text-primary">local_shipping</span>
            <div>
              <h4 className="font-bold text-primary font-headline-lg text-base">Logística Própria</h4>
              <p className="text-on-surface-variant text-sm">Entrega rápida na sua fazenda.</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-surface-container-low p-5 rounded-xl border border-outline-variant/30">
            <span className="material-symbols-outlined text-4xl text-primary">credit_card</span>
            <div>
              <h4 className="font-bold text-primary font-headline-lg text-base">Facilidade no Pagamento</h4>
              <p className="text-on-surface-variant text-sm">Pix ou Cartão em até 12x.</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-surface-container-low p-5 rounded-xl border border-outline-variant/30">
            <span className="material-symbols-outlined text-4xl text-primary">support_agent</span>
            <div>
              <h4 className="font-bold text-primary font-headline-lg text-base">Zootecnista de Plantão</h4>
              <p className="text-on-surface-variant text-sm">Suporte gratuito na formulação.</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-surface-container-low p-5 rounded-xl border border-outline-variant/30">
            <span className="material-symbols-outlined text-4xl text-primary">workspace_premium</span>
            <div>
              <h4 className="font-bold text-primary font-headline-lg text-base">Qualidade Garantida</h4>
              <p className="text-on-surface-variant text-sm">Produtos registrados no MAPA.</p>
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
        <section id="produtos" className="mb-16">
          <div className="flex justify-between items-end mb-8">
            <h3 className="font-headline-lg text-headline-lg text-primary">Nutrição de Alta Performance</h3>
            <a className="text-secondary font-bold hover:underline font-label-sm text-label-sm uppercase tracking-widest" href="#">Ver Todos</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {produtos?.map((produto) => {
              const desconto = produto.preco_antigo ? Math.round(((produto.preco_antigo - produto.preco) / produto.preco_antigo) * 100) : 0;
              return (
                <div key={produto.id} className="group bg-white border border-outline-variant p-6 flex flex-col relative transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 rounded-xl">
                  <Link href={`/produtos/${produto.id}`} className="block relative mb-6 aspect-square overflow-hidden bg-surface-container-low flex items-center justify-center rounded-lg">
                    <img alt={produto.nome} className="h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500" src={produto.imagem_url} />
                    {produto.destaque_tag && (
                      <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 text-xs font-bold rounded-full shadow">
                        {produto.destaque_tag}
                      </div>
                    )}
                    {desconto > 0 && (
                      <div className="absolute top-4 right-4 bg-error text-on-error px-2.5 py-1 text-xs font-bold rounded-lg shadow-sm">
                        -{desconto}%
                      </div>
                    )}
                  </Link>
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {produto.tags?.map((tag: string, index: number) => (
                        <span key={index} className="bg-secondary-container text-on-secondary-container text-xs px-2.5 py-1 rounded font-bold">{tag}</span>
                      ))}
                    </div>
                    <Link href={`/produtos/${produto.id}`} className="hover:underline">
                      <h4 className="font-headline-lg text-headline-lg text-primary mb-2 hover:text-secondary transition-colors">{produto.nome}</h4>
                    </Link>
                    <p className="text-on-surface-variant text-body-md mb-6 line-clamp-2">{produto.descricao}</p>
                  </div>
                  <div className="mt-auto pt-6 border-t border-outline-variant/50 flex items-center justify-between">
                    <div className="flex flex-col">
                      {produto.preco_antigo && <span className="text-label-sm text-on-surface-variant line-through">R$ {Number(produto.preco_antigo).toFixed(2).replace('.', ',')}</span>}
                      <span className="text-headline-lg text-primary font-extrabold text-2xl">R$ {Number(produto.preco).toFixed(2).replace('.', ',')}</span>
                    </div>
                    <Link href={`/produtos/${produto.id}`}>
                      <button className="bg-primary text-on-primary p-4 rounded-xl hover:bg-secondary hover:text-on-secondary transition-all active:scale-95 shadow-md flex items-center justify-center">
                        <span className="material-symbols-outlined">add_shopping_cart</span>
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/*  Promotional Bento Grid  */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="md:col-span-2 bg-primary-container text-on-primary-container p-8 rounded-xl flex flex-col justify-center overflow-hidden relative min-h-[300px]">
            <div className="z-10">
              <h3 className="font-display-lg text-display-lg mb-2 text-3xl md:text-4xl text-white font-bold">Nutrição Científica</h3>
              <p className="max-w-md text-on-primary-container/80 mb-6">Nossos laboratórios garantem a maior absorção de nutrientes do mercado nacional.</p>
              <button className="bg-secondary-container text-on-secondary-container px-6 py-2.5 rounded-full font-bold hover:scale-105 transition-all shadow">Ver Laudos</button>
            </div>
            <span className="material-symbols-outlined absolute -bottom-10 -right-10 text-[200px] opacity-10 pointer-events-none">science</span>
          </div>
          <div className="bg-tertiary-container text-on-tertiary-container p-8 rounded-xl flex flex-col justify-end min-h-[300px] relative overflow-hidden">
            <h3 className="font-headline-lg text-headline-lg mb-4 text-white">Entrega Bruta</h3>
            <p className="mb-6 opacity-80">Logística própria para garantir que sua ração chegue fresca e no prazo.</p>
            <div className="flex items-center gap-2 font-bold underline cursor-pointer hover:text-secondary-container transition-colors">
              Rastrear Pedido <span className="material-symbols-outlined">local_shipping</span>
            </div>
          </div>
        </section>

        {/*  Testimonials: Prova Social  */}
        <section className="mb-16 bg-surface-container-lowest p-8 md:p-12 rounded-2xl border border-outline-variant/20">
          <div className="text-center mb-10">
            <span className="inline-block bg-secondary-container text-on-secondary-container px-4 py-1 rounded-full font-label-sm text-label-sm mb-3">DEPOIMENTOS</span>
            <h3 className="font-headline-lg text-headline-lg text-primary">Quem Usa, Comprova o Resultado</h3>
            <p className="text-on-surface-variant max-w-lg mx-auto mt-2">Veja os depoimentos de criadores e zootecnistas que transformaram o desempenho do seu plantel com a nossa nutrição.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/20 relative flex flex-col justify-between">
              <div className="flex gap-1 text-secondary mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined fill-1 text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <p className="text-on-surface-variant italic mb-6">"O ganho de carcaça e a definição da musculatura dos meus cavalos crioulos após iniciar o Festival do Cavalo foi absurda. Pelagem brilhosa e cascos fortes."</p>
              <div>
                <span className="font-bold text-primary block">Carlos Eduardo Andrade</span>
                <span className="text-on-surface-variant text-sm">Haras Andrade - RS</span>
              </div>
            </div>
            <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/20 relative flex flex-col justify-between">
              <div className="flex gap-1 text-secondary mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined fill-1 text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <p className="text-on-surface-variant italic mb-6">"Uso a ração de postura deles nas minhas granjas. A casca do ovo ficou muito mais resistente e a taxa de postura subiu 15% em 3 meses. Recomendo muito!"</p>
              <div>
                <span className="font-bold text-primary block">Geraldo Guimarães</span>
                <span className="text-on-surface-variant text-sm">Granja Guimarães - SP</span>
              </div>
            </div>
            <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/20 relative flex flex-col justify-between">
              <div className="flex gap-1 text-secondary mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined fill-1 text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <p className="text-on-surface-variant italic mb-6">"Excelente custo-benefício. A logística de entrega deles é fantástica, descarregam direto no meu galpão com muito cuidado. Rações sempre frescas."</p>
              <div>
                <span className="font-bold text-primary block">Maurício Albuquerque</span>
                <span className="text-on-surface-variant text-sm">Fazenda Capão Alto - MG</span>
              </div>
            </div>
          </div>
        </section>

        {/*  Newsletter Section  */}
        <section className="bg-primary text-on-primary p-8 md:p-12 rounded-2xl relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary-container opacity-40"></div>
          <div className="z-10 text-center md:text-left max-w-lg">
            <h3 className="font-display-lg text-display-lg text-white mb-2 text-2xl md:text-3xl">Nutrição e Ofertas no seu E-mail</h3>
            <p className="text-on-primary-container text-body-md">Cadastre-se na nossa newsletter rural e ganhe 10% de desconto na primeira compra de nutrição premium.</p>
          </div>
          <div className="z-10 w-full md:w-auto flex flex-col sm:flex-row gap-3">
            <input className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 text-body-md focus:outline-none focus:ring-2 focus:ring-secondary-container focus:bg-white/20 w-full sm:w-64 transition-all" placeholder="Seu melhor e-mail..." type="email" />
            <button className="bg-secondary-container text-on-secondary-container px-6 py-3 rounded-lg font-bold hover:bg-secondary transition-all active:scale-95 text-center whitespace-nowrap">Cadastrar</button>
          </div>
        </section>
      </main>
    </>
  );
}
