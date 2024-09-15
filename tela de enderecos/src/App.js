import React from 'react';
import './style.css';

// Função principal da página de Checkout
const CheckoutPage = () => {
  return (
    <div className="checkout-page">
      {/* Cabeçalho */}
      <div className="container">
        {/* Seção do cabeçalho com logo e mensagem de compra segura */}
        <div className="header">
          {/* Logo da loja */}
          <img src="/images/logo.jpeg" alt="KMG Shop" />

          {/* Mensagem de segurança para o cliente */}
          <span className="secure-purchase">COMPRA SEGURA 🔒</span>
        </div>

        {/* Título da página de checkout */}
        <h2 className="title">Finalizar Compra</h2>

        {/* Blocos lado a lado: Forma de entrega e Informações de entrega */}
        <div className="grid grid-2">
          {/* Forma de Entrega (lado esquerdo) */}
          <div className="card">
            <h2 className="subtitle">Forma de Entrega</h2>
            {/* Opções de forma de entrega */}
            <div className="space-y-4">
              <div className="radio-group">
                <div className="flex items-center">
                  {/* Opção de entrega "Normal" */}
                  <input type="radio" name="entrega" id="normal" />
                  <label htmlFor="normal">Normal</label>
                </div>
                <span>R$ 28,00</span>
              </div>
              <div className="radio-group">
                <div className="flex items-center">
                  {/* Opção de entrega "Sedex" */}
                  <input type="radio" name="entrega" id="sedex" />
                  <label htmlFor="sedex">Sedex</label>
                </div>
                <span>R$ 60,00</span>
              </div>
              <div className="radio-group">
                <div className="flex items-center">
                  {/* Opção de entrega "Pac" */}
                  <input type="radio" name="entrega" id="pac" />
                  <label htmlFor="pac">Pac</label>
                </div>
                <span>R$ 15,00</span>
              </div>
            </div>
          </div>

          {/* Informações de Entrega (lado direito) */}
          <div className="card delivery-info">
            <h2 className="subtitle">Informações de Entrega</h2>
            {/* Formulário para informações de entrega */}
            <form className="space-y-6">
              {/* Campo para endereço */}
              <div className="form-group">
                <label>Endereço:</label>
                <input type="text" placeholder="Digite o endereço" />
              </div>
              <div className="grid grid-2">
                {/* Campos para número e ponto de referência */}
                <div className="form-group">
                  <label>Número:</label>
                  <input type="text" placeholder="Número" />
                </div>
                <div className="form-group">
                  <label>Ponto de Referência:</label>
                  <input type="text" placeholder="Opcional" />
                </div>
              </div>
              {/* Campo para destinatário */}
              <div className="form-group">
                <label>Destinatário:</label>
                <input type="text" placeholder="Nome do destinatário" />
              </div>
              {/* Opção para salvar como endereço padrão */}
              <div className="checkbox-group">
                <input type="checkbox" id="defaultAddress" />
                <label htmlFor="defaultAddress">Salvar como Endereço Padrão</label>
              </div>
            </form>
          </div>
        </div>

        {/* Resumo do Pedido */}
        <div className="summary card">
          <h2 className="subtitle">Resumo do Pedido</h2>
          {/* Exibição de um produto no resumo */}
          <div className="summary-item">
            {/* Imagem do produto */}
            <img src="/images/camiseta_preta.png" alt="Camiseta preta básica" style={{ width: '100px', height: 'auto' }} />

            <div className="summary-product">
              {/* Nome e referência do produto */}
              <p className="font-semibold">Camiseta básica preta</p>
              <p className="text-gray-400 text-sm">Ref: 293843</p>
            </div>
          </div>
          <div className="space-y-2">
            {/* Informações do cupom e subtotal */}
            <p className="summary-item">
              <span>Cupom</span> <span>R$ 10,00</span>
            </p>
            <p className="summary-item">
              <span>Subtotal</span> <span>R$ 39,99</span>
            </p>
            <hr />
            {/* Total do pedido */}
            <p className="summary-item font-bold">
              <span>Total</span> <span>R$ 39,99</span>
            </p>
          </div>

          {/* Botão para finalizar o pedido */}
          <div className="text-center">
            <button className="btn">Finalizar Pedido</button>
          </div>
        </div>
      </div>

      {/* Rodapé */}
      <footer className="footer">
        {/* Logo do rodapé */}
        <img src="/images/logo.jpeg" alt="KMG Shop" />

        {/* Ícones de pagamento no rodapé */}
        <div className="payment-icons">
          <img src="/images/visa.png" alt="Visa" style={{ width: '80px', height: 'auto' }} />
          <img src="/images/mastercard.png" alt="Mastercard" style={{ width: '80px', height: 'auto' }} />
          <img src="/images/elo.png" alt="Elo" style={{ width: '80px ', height: 'auto' }}/>
          </div>
      </footer>
    </div>
  );
};

export default CheckoutPage;
