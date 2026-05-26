import Link from 'next/link';
import { supabase } from '../lib/supabase';

export const revalidate = 0;

export default async function Page() {
  const { data: produtos } = await supabase.from('produtos').select('*').order('criado_em', { ascending: false });

  return (
    <>
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-10">
        {/*  Hero Banner: Festival do Cavalo  */}
        <section className="relative h-[450px] md:h-[500px] mb-12 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl group flex items-center">
          <div className="absolute inset-0 bg-black">
             <div className="absolute inset-0 bg-center md:bg-right bg-cover md:bg-contain bg-no-repeat transition-transform duration-1000 group-hover:scale-105 opacity-60 md:opacity-80" style={{ backgroundImage: "url('/4.jpg')" }}></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
          
          <div className="absolute inset-0 p-6 md:p-16 flex flex-col justify-end md:justify-center max-w-3xl pb-10">
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150 fill-mode-both">
              <span className="hidden md:inline-block bg-primary text-white px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-4 shadow-lg border border-primary/50">Lançamento</span>
              <h2 className="hidden md:block text-4xl md:text-6xl text-white mb-4 font-black leading-tight drop-shadow-md">Festival do Cavalo<br/>Raça Bruta</h2>
              <p className="hidden md:block text-white/90 text-sm md:text-lg mb-8 max-w-lg leading-relaxed drop-shadow-sm font-medium">A linha premium de nutrição para equinos atletas. Performance superior, energia explosiva e pelagem de campeão.</p>
              <div className="flex flex-row gap-3 w-full sm:w-auto mt-4 md:mt-0">
                <a href="#produtos" className="flex-1 sm:flex-none bg-white text-primary px-4 sm:px-8 py-3 sm:py-4 rounded-xl font-black text-sm sm:text-base text-center transition-all hover:bg-gray-100 hover:scale-105 shadow-xl flex items-center justify-center">Comprar Agora</a>
                <Link href="/categorias" className="flex-1 sm:flex-none bg-black/30 backdrop-blur-md border border-white/30 text-white px-4 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base text-center transition-all hover:bg-white/20 flex items-center justify-center">Conhecer Linha</Link>
              </div>
            </div>
          </div>
        </section>

        {/*  Trust Badges: Vantagens Rural  */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-16">
          <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-2 md:gap-4 bg-surface-container-low p-3 md:p-5 rounded-xl border border-outline-variant/30">
            <span className="material-symbols-outlined text-3xl md:text-4xl text-primary">local_shipping</span>
            <div>
              <h4 className="font-bold text-primary font-headline-lg text-xs md:text-base mb-0.5 md:mb-0">Logística Própria</h4>
              <p className="text-on-surface-variant text-[10px] md:text-sm leading-tight">Entrega rápida na sua fazenda.</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-2 md:gap-4 bg-surface-container-low p-3 md:p-5 rounded-xl border border-outline-variant/30">
            <span className="material-symbols-outlined text-3xl md:text-4xl text-primary">credit_card</span>
            <div>
              <h4 className="font-bold text-primary font-headline-lg text-xs md:text-base mb-0.5 md:mb-0">Facilidade no Pagamento</h4>
              <p className="text-on-surface-variant text-[10px] md:text-sm leading-tight">Pix ou Cartão em até 12x.</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-2 md:gap-4 bg-surface-container-low p-3 md:p-5 rounded-xl border border-outline-variant/30">
            <span className="material-symbols-outlined text-3xl md:text-4xl text-primary">support_agent</span>
            <div>
              <h4 className="font-bold text-primary font-headline-lg text-xs md:text-base mb-0.5 md:mb-0">Zootecnista de Plantão</h4>
              <p className="text-on-surface-variant text-[10px] md:text-sm leading-tight">Suporte gratuito na formulação.</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-2 md:gap-4 bg-surface-container-low p-3 md:p-5 rounded-xl border border-outline-variant/30">
            <span className="material-symbols-outlined text-3xl md:text-4xl text-primary">workspace_premium</span>
            <div>
              <h4 className="font-bold text-primary font-headline-lg text-xs md:text-base mb-0.5 md:mb-0">Qualidade Garantida</h4>
              <p className="text-on-surface-variant text-[10px] md:text-sm leading-tight">Produtos registrados no MAPA.</p>
            </div>
          </div>
        </section>

        {/*  Category Selector  */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-6">
             <h3 className="text-2xl font-black text-on-surface">Explorar Linhas</h3>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-6 -mx-4 px-4 md:mx-0 md:px-0 custom-scroll snap-x">
            <button className="snap-start flex-none flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-2xl transition-all shadow-lg shadow-primary/30">
              <span className="material-symbols-outlined text-2xl">pets</span>
              <span className="font-bold">Equinos</span>
            </button>
            <button className="snap-start flex-none flex items-center gap-3 bg-surface-container-low text-on-surface border border-outline-variant/30 px-8 py-4 rounded-2xl hover:bg-surface-container hover:shadow-md transition-all">
              <span className="material-symbols-outlined text-2xl text-primary">bakery_dining</span>
              <span className="font-bold">Aves</span>
            </button>
            <button className="snap-start flex-none flex items-center gap-3 bg-surface-container-low text-on-surface border border-outline-variant/30 px-8 py-4 rounded-2xl hover:bg-surface-container hover:shadow-md transition-all">
              <span className="material-symbols-outlined text-2xl text-primary">egg</span>
              <span className="font-bold">Suínos</span>
            </button>
            <button className="snap-start flex-none flex items-center gap-3 bg-surface-container-low text-on-surface border border-outline-variant/30 px-8 py-4 rounded-2xl hover:bg-surface-container hover:shadow-md transition-all">
              <span className="material-symbols-outlined text-2xl text-primary">agriculture</span>
              <span className="font-bold">Bovinos</span>
            </button>
            <button className="snap-start flex-none flex items-center gap-3 bg-surface-container-low text-on-surface border border-outline-variant/30 px-8 py-4 rounded-2xl hover:bg-surface-container hover:shadow-md transition-all">
              <span className="material-symbols-outlined text-2xl text-primary">science</span>
              <span className="font-bold">Suplementos</span>
            </button>
          </div>
        </section>

        {/*  Product Grid  */}
        <section id="produtos" className="mb-16">
          <div className="flex justify-between items-end mb-8">
            <h3 className="text-3xl font-black text-on-surface">Nutrição de Alta Performance</h3>
            <a className="text-primary font-bold hover:underline text-sm tracking-wide hidden sm:block" href="#">VER TUDO</a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {produtos?.map((produto) => {
              const desconto = produto.preco_antigo ? Math.round(((produto.preco_antigo - produto.preco) / produto.preco_antigo) * 100) : 0;
              return (
                <div key={produto.id} className="group bg-surface-container-lowest border border-outline-variant/40 flex flex-col transition-all duration-300 hover:shadow-xl hover:border-primary/20 rounded-2xl overflow-hidden">
                  <Link href={`/produtos/${produto.id}`} className="block relative aspect-[4/3] overflow-hidden bg-gray-50 flex items-center justify-center">
                    <img alt={produto.nome} className="h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700" src={produto.imagem_url} />
                    {produto.destaque_tag && (
                      <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 text-xs font-black rounded-lg shadow uppercase tracking-wider">
                        {produto.destaque_tag}
                      </div>
                    )}
                    {desconto > 0 && (
                      <div className="absolute top-4 right-4 bg-error text-white px-3 py-1 text-xs font-black rounded-lg shadow-sm">
                        -{desconto}%
                      </div>
                    )}
                  </Link>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {produto.tags?.map((tag: string, index: number) => (
                         <span key={index} className="text-primary text-[10px] uppercase font-bold tracking-wider">{tag}</span>
                      ))}
                    </div>
                    <Link href={`/produtos/${produto.id}`}>
                      <h4 className="font-bold text-lg text-on-surface mb-2 hover:text-primary transition-colors line-clamp-2">{produto.nome}</h4>
                    </Link>
                    <p className="text-on-surface-variant text-sm mb-6 line-clamp-2">{produto.descricao}</p>
                    
                    <div className="mt-auto pt-4 flex flex-col gap-4">
                      <div className="flex flex-col">
                        {produto.preco_antigo && <span className="text-xs text-on-surface-variant line-through mb-1">R$ {Number(produto.preco_antigo).toFixed(2).replace('.', ',')}</span>}
                        <span className="text-3xl font-black text-primary">R$ {Number(produto.preco).toFixed(2).replace('.', ',')}</span>
                        <span className="text-xs text-on-surface-variant mt-1">no Pix ou Boleto</span>
                      </div>
                      <Link href={`/produtos/${produto.id}`} className="w-full">
                        <button className="w-full bg-primary/10 text-primary font-bold py-3.5 rounded-xl hover:bg-primary hover:text-white transition-all active:scale-95 flex items-center justify-center gap-2 border border-primary/20">
                          <span className="material-symbols-outlined text-[20px]">local_mall</span> Comprar
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-8 text-center sm:hidden">
             <a className="text-primary font-bold hover:underline text-sm tracking-wide inline-block py-2" href="#">VER TODOS OS PRODUTOS</a>
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
