import React from 'react';
import './style.css'; // Certifique-se de importar o CSS correto

const CheckoutPage = () => {
  return (
    <div className="checkout-page">
      {/* Cabeçalho */}
      <div className="container">
        <div className="header">
          <img
            src="https://via.placeholder.com/150x50?text=KMG+Shop"
            alt="KMG Shop Logo"
          />
          <span className="secure-purchase">COMPRA SEGURA 🔒</span>
        </div>

        <h1 className="title">Finalizar Compra</h1>

        {/* Blocos lado a lado */}
        <div className="grid grid-2">
          {/* Forma de Entrega (lado esquerdo) */}
          <div className="card">
            <h2 className="subtitle">Forma de Entrega</h2>
            <div className="space-y-4">
              <div className="radio-group">
                <div className="flex items-center">
                  <input type="radio" name="entrega" id="normal" />
                  <label htmlFor="normal">Normal</label>
                </div>
                <span>R$ 28,00</span>
              </div>
              <div className="radio-group">
                <div className="flex items-center">
                  <input type="radio" name="entrega" id="sedex" />
                  <label htmlFor="sedex">Sedex</label>
                </div>
                <span>R$ 60,00</span>
              </div>
              <div className="radio-group">
                <div className="flex items-center">
                  <input type="radio" name="entrega" id="pac" />
                  <label htmlFor="pac">Pac</label>
                </div>
                <span>R$ 15,00</span>
              </div>
            </div>
          </div>

          {/* Informações de Entrega (lado direito) */}
          <div className="card">
            <h2 className="subtitle">Informações de Entrega</h2>
            <form className="space-y-6">
              <div className="form-group">
                <label>Endereço:</label>
                <input type="text" placeholder="Digite o endereço" />
              </div>
              <div className="grid grid-2">
                <div className="form-group">
                  <label>Número:</label>
                  <input type="text" placeholder="Número" />
                </div>
                <div className="form-group">
                  <label>Ponto de Referência:</label>
                  <input type="text" placeholder="Opcional" />
                </div>
              </div>
              <div className="form-group">
                <label>Destinatário:</label>
                <input type="text" placeholder="Nome do destinatário" />
              </div>
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
          <div className="summary-item">
            <img
              src="https://via.placeholder.com/100"
              alt="Produto"
              className="product-image"
            />
            <div className="summary-product">
              <p className="font-semibold">Camiseta básica preta</p>
              <p className="text-gray-400 text-sm">Ref: 293843</p>
            </div>
          </div>
          <div className="space-y-2">
            <p className="summary-item">
              <span>Cupom</span> <span>R$ 10,00</span>
            </p>
            <p className="summary-item">
              <span>Subtotal</span> <span>R$ 39,99</span>
            </p>
            <hr />
            <p className="summary-item font-bold">
              <span>Total</span> <span>R$ 39,99</span>
            </p>
          </div>

          {/* Botão de Finalizar Pedido */}
          <div className="text-center">
            <button className="btn">Finalizar Pedido</button>
          </div>
        </div>
      </div>

      {/* Rodapé */}
      <footer className="footer">
        <img
          src="https://via.placeholder.com/150x50?text=KMG+Shop"
          alt="KMG Shop Logo"
        />
        <div className="payment-icons">
          <img src="https://via.placeholder.com/50x30?text=Visa" alt="Visa" />
          <img
            src="https://via.placeholder.com/50x30?text=Mastercard"
            alt="Mastercard"
          />
          <img src="https://via.placeholder.com/50x30?text=Elo" alt="Elo" />
        </div>
      </footer>
    </div>
  );
};

export default CheckoutPage;
