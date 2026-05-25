'use client';
import { useCartStore } from '../../store/useCartStore';
import Header from '../../components/Header';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Page() {
  const { items, getTotal, clearCart } = useCartStore();
  const [mounted, setMounted] = useState(false);
  const [deliveryMethod, setDeliveryMethod] = useState<'pickup' | 'home'>('pickup');
  const router = useRouter();

  // Address states
  const [cep, setCep] = useState('');
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [isFetchingCep, setIsFetchingCep] = useState(false);

  useEffect(() => setMounted(true), []);

  const handleCepChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 8) value = value.slice(0, 8);
    
    // Formatting as XXXXX-XXX
    let formattedValue = value;
    if (value.length > 5) {
      formattedValue = `${value.slice(0, 5)}-${value.slice(5)}`;
    }
    setCep(formattedValue);

    if (value.length === 8) {
      setIsFetchingCep(true);
      try {
        const response = await fetch(`https://viacep.com.br/ws/${value}/json/`);
        const data = await response.json();
        
        if (!data.erro) {
          setRua(data.logradouro || '');
          setBairro(data.bairro || '');
          setCidade(data.localidade || '');
          setEstado(data.uf || '');
          // Focus on numero field
          document.getElementById('numero')?.focus();
        }
      } catch (error) {
        console.error('Erro ao buscar CEP', error);
      } finally {
        setIsFetchingCep(false);
      }
    }
  };

  const handleFinish = () => {
    clearCart();
    router.push('/sucesso');
  };

  return (
    <>
      <Header />
<main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
{/*  Left Column: Checkout Sections  */}
<div className="lg:col-span-8 space-y-gutter">
<h1 className="font-display-lg text-display-lg text-primary mb-8">Checkout Unificado</h1>
{/*  Section 1: Dados do Cliente  */}
<section className="bg-surface-container-low border border-outline-variant p-8 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10">
<span className="material-symbols-outlined text-[80px]">person</span>
</div>
<div className="flex items-center gap-3 mb-6">
<span className="bg-primary text-on-primary w-8 h-8 flex items-center justify-center rounded-full font-label-sm">1</span>
<h2 className="font-headline-lg text-headline-lg text-primary">Dados do Cliente</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="flex flex-col gap-2">
<label className="font-label-sm text-label-sm text-on-surface-variant">Nome Completo</label>
<input className="bg-surface border border-outline p-4 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:opacity-50" placeholder="Ex: João da Silva" type="text" />
</div>
<div className="flex flex-col gap-2">
<label className="font-label-sm text-label-sm text-on-surface-variant">WhatsApp</label>
<input className="bg-surface border border-outline p-4 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:opacity-50" placeholder="(85) 99999-9999" type="tel" />
</div>
<div className="flex flex-col gap-2 md:col-span-2">
<label className="font-label-sm text-label-sm text-on-surface-variant">CPF</label>
<input className="bg-surface border border-outline p-4 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:opacity-50 max-w-md" placeholder="000.000.000-00" type="text" />
</div>
</div>
</section>
{/*  Section 2: Entrega  */}
<section className="bg-surface-container-low border border-outline-variant p-8">
<div className="flex items-center gap-3 mb-6">
<span className="bg-primary text-on-primary w-8 h-8 flex items-center justify-center rounded-full font-label-sm">2</span>
<h2 className="font-headline-lg text-headline-lg text-primary">Entrega</h2>
</div>
<div className="flex flex-wrap gap-4 mb-8">
<button onClick={() => setDeliveryMethod('pickup')} className={`flex-1 min-w-[200px] flex flex-col items-center gap-2 p-6 border-2 transition-all active:scale-95 ${deliveryMethod === 'pickup' ? 'border-primary bg-primary text-on-primary' : 'border-outline text-on-surface-variant hover:border-primary'}`}>
<span className="material-symbols-outlined">storefront</span>
<span className="font-label-sm">Retirada Maracanaú/Fortaleza</span>
</button>
<button onClick={() => setDeliveryMethod('home')} className={`flex-1 min-w-[200px] flex flex-col items-center gap-2 p-6 border-2 transition-all active:scale-95 ${deliveryMethod === 'home' ? 'border-primary bg-primary text-on-primary' : 'border-outline text-on-surface-variant hover:border-primary'}`}>
<span className="material-symbols-outlined">local_shipping</span>
<span className="font-label-sm">Entrega em Domicílio</span>
</button>
</div>
<div className={`${deliveryMethod === 'home' ? 'block' : 'hidden'} animate-in fade-in slide-in-from-top-4 duration-300`} id="delivery-fields">
<div className="grid grid-cols-1 md:grid-cols-12 gap-4">
<div className="flex flex-col gap-2 md:col-span-4">
<label className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-2">
  CEP {isFetchingCep && <span className="material-symbols-outlined animate-spin text-sm">refresh</span>}
</label>
<input 
  value={cep} 
  onChange={handleCepChange} 
  className="bg-surface border border-outline p-4 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" 
  placeholder="00000-000" 
  type="text" 
  maxLength={9}
/>
</div>
<div className="flex flex-col gap-2 md:col-span-8">
<label className="font-label-sm text-label-sm text-on-surface-variant">Rua/Avenida</label>
<input value={rua} onChange={e => setRua(e.target.value)} className="bg-surface border border-outline p-4 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Nome da rua" type="text" />
</div>

<div className="flex flex-col gap-2 md:col-span-4">
<label className="font-label-sm text-label-sm text-on-surface-variant">Número</label>
<input id="numero" value={numero} onChange={e => setNumero(e.target.value)} className="bg-surface border border-outline p-4 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="123" type="text" />
</div>
<div className="flex flex-col gap-2 md:col-span-8">
<label className="font-label-sm text-label-sm text-on-surface-variant">Complemento (Opcional)</label>
<input value={complemento} onChange={e => setComplemento(e.target.value)} className="bg-surface border border-outline p-4 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Apto, Bloco, etc." type="text" />
</div>

<div className="flex flex-col gap-2 md:col-span-5">
<label className="font-label-sm text-label-sm text-on-surface-variant">Bairro</label>
<input value={bairro} onChange={e => setBairro(e.target.value)} className="bg-surface border border-outline p-4 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Bairro" type="text" />
</div>
<div className="flex flex-col gap-2 md:col-span-5">
<label className="font-label-sm text-label-sm text-on-surface-variant">Cidade</label>
<input value={cidade} onChange={e => setCidade(e.target.value)} className="bg-surface border border-outline p-4 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Cidade" type="text" />
</div>
<div className="flex flex-col gap-2 md:col-span-2">
<label className="font-label-sm text-label-sm text-on-surface-variant">UF</label>
<input value={estado} onChange={e => setEstado(e.target.value)} className="bg-surface border border-outline p-4 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all uppercase" placeholder="CE" maxLength={2} type="text" />
</div>
</div>
</div>
</section>
{/*  Section 3: Pagamento  */}
<section className="bg-surface-container-low border border-outline-variant p-8">
<div className="flex items-center gap-3 mb-6">
<span className="bg-primary text-on-primary w-8 h-8 flex items-center justify-center rounded-full font-label-sm">3</span>
<h2 className="font-headline-lg text-headline-lg text-primary">Pagamento</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
<label className="cursor-pointer relative">
<input defaultChecked className="peer sr-only" name="payment"  type="radio" value="pix" />
<div className="p-4 border-2 border-outline peer-defaultChecked:border-primary peer-defaultChecked:bg-primary-container/10 flex flex-col items-center gap-2 text-on-surface-variant peer-defaultChecked:text-primary transition-all">
<span className="material-symbols-outlined">qr_code_2</span>
<span className="font-label-sm">PIX</span>
</div>
</label>
<label className="cursor-pointer relative">
<input className="peer sr-only" name="payment"  type="radio" value="card" />
<div className="p-4 border-2 border-outline peer-defaultChecked:border-primary peer-defaultChecked:bg-primary-container/10 flex flex-col items-center gap-2 text-on-surface-variant peer-defaultChecked:text-primary transition-all">
<span className="material-symbols-outlined">credit_card</span>
<span className="font-label-sm">Cartão</span>
</div>
</label>
<label className="cursor-pointer relative">
<input className="peer sr-only" name="payment"  type="radio" value="delivery" />
<div className="p-4 border-2 border-outline peer-defaultChecked:border-primary peer-defaultChecked:bg-primary-container/10 flex flex-col items-center gap-2 text-on-surface-variant peer-defaultChecked:text-primary transition-all">
<span className="material-symbols-outlined">payments</span>
<span className="font-label-sm">Pagar na Entrega</span>
</div>
</label>
</div>
{/*  Payment Content Area  */}
<div className="block space-y-6 text-center py-8 bg-surface border border-dashed border-outline rounded-lg" id="payment-pix">
<div className="mx-auto w-48 h-48 bg-white p-4 border border-outline-variant">
<img alt="QR Code" className="w-full h-full grayscale" data-alt="A clean, high-contrast QR code centered on a crisp white background within a professional UI. The scene is illuminated by neutral laboratory lighting, emphasizing the digital precision. The surrounding container uses a subtle dark green border reflecting the brand's primary color." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB13sons-MUcHevQl7J1NdRaHbeoga3gi4D7VFsns_oz7y5xM8zRCahHhVZorlxvplsfUXZuZ20xz2mi3DCEUEnUNCoAlnCrftZ3SeM9ZW3whPczrd-M_FTEphGnBe7nxDh_SuK_THOJli8tbC4XIvol20tmXaGbnje746XPEQ9T1U-9pDrfQza5KFtVWM1DQWrZHxqmkMgF6d4EXyfZu0-Rp3mtlWQHyYuKQKqrRY5q-wEyo4pVSP0YczQ446zQzjFD-Wj3eLcJIg" />
</div>
<div className="space-y-2">
<p className="font-label-sm text-primary font-bold">Escaneie para pagar com PIX</p>
<p className="text-on-surface-variant text-sm">O pedido será processado após a confirmação.</p>
</div>
<button className="mx-auto flex items-center gap-2 text-primary font-bold hover:underline">
<span className="material-symbols-outlined text-sm">content_copy</span>
                            Copia e Cola
                        </button>
</div>
<div className="hidden space-y-4 animate-in fade-in duration-300" id="payment-card">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="flex flex-col gap-2 md:col-span-2">
<label className="font-label-sm text-label-sm text-on-surface-variant">Número do Cartão</label>
<input className="bg-surface border border-outline p-4 outline-none transition-all" placeholder="0000 0000 0000 0000" type="text" />
</div>
<div className="flex flex-col gap-2">
<label className="font-label-sm text-label-sm text-on-surface-variant">Validade</label>
<input className="bg-surface border border-outline p-4 outline-none transition-all" placeholder="MM/AA" type="text" />
</div>
<div className="flex flex-col gap-2">
<label className="font-label-sm text-label-sm text-on-surface-variant">CVV</label>
<input className="bg-surface border border-outline p-4 outline-none transition-all" placeholder="123" type="text" />
</div>
</div>
</div>
<div className="hidden p-6 bg-secondary-container/20 border border-secondary text-on-secondary-container rounded-lg animate-in fade-in duration-300" id="payment-delivery">
<div className="flex items-start gap-4">
<span className="material-symbols-outlined">info</span>
<div>
<p className="font-bold">Pagamento na entrega habilitado</p>
<p className="text-sm opacity-80">Leve o valor exato ou informe se precisará de troco no WhatsApp após finalizar o pedido.</p>
</div>
</div>
</div>
</section>
</div>
{/*  Right Column: Summary Card  */}
<aside className="lg:col-span-4 sticky top-28">
<div className="bg-white border-2 border-primary p-8 shadow-xl relative grain-texture">
<div className="absolute -top-4 -right-4 bg-secondary-container text-on-secondary-container font-label-sm px-4 py-1 font-bold shadow-md transform rotate-3">
                        BRUTA PERFORMANCE
                    </div>
<h3 className="font-headline-lg text-headline-lg text-primary mb-6 border-b-2 border-primary/10 pb-4">Resumo</h3>
<div className="space-y-4 mb-8">
{!mounted ? null : items.map((item) => (
<div key={item.product.id} className="flex justify-between items-center">
<span className="text-on-surface-variant truncate pr-4">{item.product.nome} (x{item.quantity})</span>
<span className="font-bold text-primary whitespace-nowrap">R$ {(item.product.preco * item.quantity).toFixed(2).replace('.', ',')}</span>
</div>
))}
<div className="flex justify-between items-center pt-4 border-t border-outline-variant/30">
<span className="text-on-surface-variant">Frete</span>
<span className="font-bold text-secondary" id="shipping-cost">Grátis</span>
</div>
</div>
<div className="flex justify-between items-end mb-8">
<div>
<p className="font-label-sm text-on-surface-variant uppercase">Total do Pedido</p>
<p className="font-display-lg text-display-lg text-primary leading-none">R$ {mounted ? getTotal().toFixed(2).replace('.', ',') : '0,00'}</p>
</div>
</div>
<button onClick={handleFinish} disabled={!mounted || items.length === 0} className="w-full bg-primary disabled:opacity-50 text-on-primary py-6 font-bold text-headline-lg-mobile md:text-headline-lg flex items-center justify-center gap-3 hover:bg-tertiary transition-all active:scale-95 shadow-lg group">
FINALIZAR PEDIDO
<span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
</button>
<div className="mt-6 flex items-center justify-center gap-2 text-on-surface-variant opacity-60">
<span className="material-symbols-outlined text-sm">lock</span>
<span className="text-xs uppercase font-label-sm tracking-widest">Ambiente 100% Seguro</span>
</div>
</div>
{/*  Grain Detail Widget  */}
<div className="mt-8 bg-surface-container-highest border border-outline-variant p-6 flex items-center gap-4">
<div className="w-16 h-16 rounded-full border-2 border-primary overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover" data-alt="Extreme macro shot of high-quality animal feed grains showing intricate textures and golden hues. The lighting is harsh and direct, highlighting the 'brute strength' of the natural ingredients. The image is cropped into a circular portal, revealing the raw nutritional quality of the product." src="https://lh3.googleusercontent.com/aida-public/AB6AXuABuND81m1Xq8wZJBkppmWHm42UcfXjGN0iPmtN9HSRNfzdhedxXciIeVGyCgSWFfZmKf0pZqyCJUe86OvoM6vsTGhEnc1bxI9MA1OZTP7Gu94mUqlmAIJPF1LXgvN7p47SmJWVRd3kBr5nqgPGssorrWud6q6ESzdR3W8NtXthmeTRUulsAe3gb4IsByea4Xua1rcY10_rvYF5D0bw64m9ObxW4Um1e1i4OURMm2eT8Ak-wAPeq-F-jscPiEnkSOxlZroacBF30P8" />
</div>
<div>
<p className="font-bold text-primary">Qualidade Garantida</p>
<p className="text-xs text-on-surface-variant italic">Nutrição de bruta performance para seu plantel.</p>
</div>
</div>
</aside>
</div>
</main>
{/*  Footer  */}
<footer className="bg-surface-container-lowest dark:bg-surface-dim border-t-2 border-primary/10 w-full px-margin-mobile md:px-margin-desktop py-12">
<div className="max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-gutter">
<div className="flex flex-col items-center md:items-start gap-2">
<span className="font-headline-lg text-headline-lg text-primary">Jone Wayne Rações</span>
<p className="font-label-sm text-label-sm text-on-surface-variant/70 text-center md:text-left">© 2024 Jone Wayne Rações - Nutrição de Bruta Performance.</p>
</div>
<div className="flex flex-wrap justify-center gap-8">
<a className="text-on-surface-variant/70 hover:text-primary underline transition-all font-label-sm text-label-sm" href="#">Privacidade</a>
<a className="text-on-surface-variant/70 hover:text-primary underline transition-all font-label-sm text-label-sm" href="#">Termos de Uso</a>
<a className="text-on-surface-variant/70 hover:text-primary underline transition-all font-label-sm text-label-sm" href="#">Rastreio</a>
<a className="text-on-surface-variant/70 hover:text-primary underline transition-all font-label-sm text-label-sm" href="#">Fale Conosco</a>
</div>
</div>
</footer>
{/*  Mobile Navigation  */}
<nav className="md:hidden fixed bottom-0 w-full z-50 flex justify-around items-center px-4 py-2 border-t border-outline-variant bg-surface dark:bg-surface-container shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
<div className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-all">
<span className="material-symbols-outlined">home</span>
<span className="font-label-sm text-label-sm">Início</span>
</div>
<div className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-all">
<span className="material-symbols-outlined">grid_view</span>
<span className="font-label-sm text-label-sm">Categorias</span>
</div>
<div className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-full px-4 py-1 active:scale-90 duration-200">
<span className="material-symbols-outlined">shopping_cart</span>
<span className="font-label-sm text-label-sm">Checkout</span>
</div>
<div className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-all">
<span className="material-symbols-outlined">person</span>
<span className="font-label-sm text-label-sm">Perfil</span>
</div>
</nav>


    </>
  );
}
