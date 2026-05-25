import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low border-t border-outline-variant/30 py-16 px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Coluna 1: Info da Marca */}
          <div className="flex flex-col gap-4">
            <h2 className="font-headline-lg text-headline-lg text-primary font-bold tracking-tight">Jone Wayne Rações</h2>
            <p className="text-on-surface-variant text-body-md">
              A marca líder em nutrição animal de alto rendimento. Rações formuladas cientificamente para extrair a máxima performance do seu plantel.
            </p>
            <div className="flex gap-4 mt-2">
              <span className="material-symbols-outlined text-primary cursor-pointer hover:scale-110 transition-transform">share</span>
              <span className="material-symbols-outlined text-primary cursor-pointer hover:scale-110 transition-transform">location_on</span>
            </div>
          </div>

          {/* Coluna 2: Navegação */}
          <div className="flex flex-col gap-4">
            <span className="font-bold text-primary font-headline-lg text-lg">Navegação</span>
            <ul className="flex flex-col gap-2.5">
              <li><Link className="text-on-surface-variant hover:text-primary transition-colors text-body-md" href="/">Início</Link></li>
              <li><Link className="text-on-surface-variant hover:text-primary transition-colors text-body-md" href="/categorias">Categorias</Link></li>
              <li><Link className="text-on-surface-variant hover:text-primary transition-colors text-body-md" href="/pedidos">Meus Pedidos</Link></li>
              <li><Link className="text-on-surface-variant hover:text-primary transition-colors text-body-md" href="/carrinho">Carrinho de Compras</Link></li>
            </ul>
          </div>

          {/* Coluna 3: Atendimento */}
          <div className="flex flex-col gap-4">
            <span className="font-bold text-primary font-headline-lg text-lg">Atendimento</span>
            <ul className="flex flex-col gap-2.5">
              <li><a className="text-on-surface-variant hover:text-primary transition-colors text-body-md" href="#">Fale Conosco</a></li>
              <li><a className="text-on-surface-variant hover:text-primary transition-colors text-body-md" href="#">Rastreamento</a></li>
              <li><a className="text-on-surface-variant hover:text-primary transition-colors text-body-md" href="#">Políticas de Privacidade</a></li>
              <li><a className="text-on-surface-variant hover:text-primary transition-colors text-body-md" href="#">Termos e Condições</a></li>
            </ul>
          </div>

          {/* Coluna 4: Segurança e Selos */}
          <div className="flex flex-col gap-4">
            <span className="font-bold text-primary font-headline-lg text-lg">Segurança & Pagamento</span>
            <p className="text-on-surface-variant text-body-md mb-2">
              Seus dados estão protegidos sob criptografia de ponta a ponta.
            </p>
            <div className="flex flex-wrap gap-2.5 items-center">
              <span className="material-symbols-outlined text-3xl text-on-surface-variant/70" title="Pix">qr_code_2</span>
              <span className="material-symbols-outlined text-3xl text-on-surface-variant/70" title="Cartão de Crédito">credit_card</span>
              <span className="material-symbols-outlined text-3xl text-on-surface-variant/70" title="Boleto Bancário">receipt</span>
              <span className="material-symbols-outlined text-3xl text-primary" title="Compra 100% Segura">verified_user</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-outline-variant/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="font-label-sm text-label-sm text-on-surface-variant/70">
            © 2026 Jone Wayne Rações. Todos os direitos reservados.
          </p>
          <p className="font-label-sm text-label-sm text-on-surface-variant/60 flex items-center gap-1">
            Nutrição de Bruta Performance.
          </p>
        </div>
      </div>
    </footer>
  );
}
