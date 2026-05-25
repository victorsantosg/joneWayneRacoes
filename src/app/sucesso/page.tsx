import Link from 'next/link';

export default function Page() {
  return (
    <>
      
{/*  TopAppBar Navigation Shell is suppressed for Success Screen to prioritize focus  */}
<main className="flex-grow flex items-center justify-center px-4 py-12 md:px-margin-desktop">
<div className="max-w-3xl w-full">
{/*  Success Hero Section  */}
<div className="text-center mb-12">
<div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-secondary-container text-on-secondary-container mb-6 success-animation shadow-lg shadow-secondary-container/20">
<span className="material-symbols-outlined !text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
</div>
<h1 className="font-headline-lg text-headline-lg md:text-display-lg text-primary mb-2">Pedido #1234 Realizado!</h1>
<p className="text-on-surface-variant max-w-md mx-auto">A nutrição de força bruta está a caminho. Prepare seu plantel para a máxima performance.</p>
</div>
{/*  Content Grid: Bento Style  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
{/*  Order Summary Card  */}
<div className="md:col-span-8 bg-surface-container-low border border-outline-variant p-8 rounded-xl">
<div className="flex items-center gap-4 mb-6">
<span className="material-symbols-outlined text-primary">local_shipping</span>
<h2 className="font-headline-lg text-headline-lg text-primary">Resumo da Entrega</h2>
</div>
<div className="space-y-6">
<div className="flex justify-between items-start border-b border-outline-variant pb-4">
<div>
<p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Endereço de Entrega</p>
<p className="text-on-surface font-medium">Fazenda Bela Vista, KM 45</p>
<p className="text-on-surface-variant">Zona Rural, Uberaba - MG</p>
</div>
<div className="text-right">
<p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Previsão</p>
<p className="text-on-surface font-bold">2 a 4 dias úteis</p>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div>
<p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Método de Pagamento</p>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary">payments</span>
<p className="text-on-surface font-medium">PIX à Vista</p>
</div>
</div>
<div>
<p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Status</p>
<div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed text-sm font-bold">
                                    Aguardando Processamento
                                </div>
</div>
</div>
</div>
</div>
{/*  QR Code / Quick Contact Side Card  */}
<div className="md:col-span-4 flex flex-col gap-gutter">
<div className="bg-primary text-on-primary p-6 rounded-xl flex flex-col items-center justify-center text-center">
<div className="w-32 h-32 bg-white p-2 rounded-lg mb-4">
<img alt="QR Code WhatsApp" className="w-full h-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIxjD-c2T0upyPHi1RkDvPxvbAvblunNl2cVu3gwPx4Ql1pAAQyPAHHFS1gn8cacvvv2fdQlQrHcwmynogW82B8HItslaa0ey4TlXdysvYyIMFUKREu5xZvyu651kAPBn1lvDQ6wH3JIT05-bID7aqelqGSDgSkgfoeASbjuGON78sd4VyJJwckYirvteCA4FYaKo6icBV2dM9zXXN7UohNR2qNf-4p69kCGsBk1NlUpwf2-nkz-5fCWKnDOCx99R-9Ok28dNLq_M" />
</div>
<p className="font-label-sm text-label-sm text-on-primary-container mb-2 uppercase tracking-widest">Acesso Rápido</p>
<p className="font-headline-lg text-[20px] mb-4">Dúvidas sobre a carga?</p>
<a className="w-full py-3 bg-secondary-container text-on-secondary-container rounded-full font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform active:scale-95" href="https://wa.me/5500000000000">
<span className="material-symbols-outlined">chat</span>
                            WhatsApp
                        </a>
</div>
</div>
{/*  Actions Banner  */}
<div className="md:col-span-12 flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
<Link href="/" className="w-full sm:w-auto px-8 py-4 border-2 border-primary text-primary rounded-full font-bold hover:bg-primary-container hover:text-on-primary-container transition-all flex items-center justify-center gap-2" >
<span className="material-symbols-outlined">arrow_back</span>
                        Voltar para a Loja
                    </Link>
<button className="w-full sm:w-auto px-8 py-4 bg-primary text-on-primary rounded-full font-bold shadow-lg hover:bg-primary-container transition-all flex items-center justify-center gap-2">
<span className="material-symbols-outlined">receipt_long</span>
                        Ver Detalhes do Pedido
                    </button>
</div>
</div>
{/*  Branding Reinforcement  */}
<div className="mt-16 text-center opacity-50">
<p className="font-headline-lg text-headline-lg text-primary grayscale contrast-125 mb-2">Jone Wayne Rações</p>
<p className="font-label-sm text-label-sm uppercase tracking-tighter">Nutrição de Bruta Performance</p>
</div>
</div>
</main>
{/*  Footer as per JSON specifications  */}
<footer className="w-full px-margin-desktop py-12 flex flex-col md:flex-row justify-between items-center gap-gutter border-t-2 border-primary/10 bg-surface-container-lowest">
<div className="mb-6 md:mb-0">
<p className="font-headline-lg text-headline-lg text-primary">Jone Wayne Rações</p>
<p className="font-label-sm text-label-sm text-on-surface-variant/70">© 2024 Jone Wayne Rações - Nutrição de Bruta Performance.</p>
</div>
<div className="flex flex-wrap justify-center gap-6">
<a className="font-label-sm text-label-sm text-on-surface-variant/70 hover:text-primary underline transition-all" href="#">Privacidade</a>
<a className="font-label-sm text-label-sm text-on-surface-variant/70 hover:text-primary underline transition-all" href="#">Termos de Uso</a>
<a className="font-label-sm text-label-sm text-on-surface-variant/70 hover:text-primary underline transition-all" href="#">Rastreio</a>
<a className="font-label-sm text-label-sm text-on-surface-variant/70 hover:text-primary underline transition-all" href="#">Fale Conosco</a>
</div>
</footer>
{/*  Aesthetic Decorative Element: Blurred background texture  */}
<div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
<div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-primary-fixed opacity-10 blur-[120px]"></div>
<div className="absolute bottom-[5%] right-[5%] w-[30%] h-[30%] rounded-full bg-secondary-container opacity-10 blur-[100px]"></div>
</div>


    </>
  );
}
