import React from 'react'; 
import './Cartpage.css'; // Importe o CSS específico para a página do carrinho

// Componente principal que renderiza a página do carrinho de compras
const Cartpage = () => {
  return (
    <div className="cart-page">
      
      {/* Cabeçalho da página com o logotipo e título */}
      <header className="header">

        {/* Logotipo da loja */}
        <img src="/images/logo.jpeg" 
        alt="KMG Shop"  
        />
        
        <div className="header-title">
          {/* Título da página */}
          <h1>Carrinho de Compras</h1>
        </div>
        {/* Texto de compra segura */}
        <span className="secure-purchase">COMPRA SEGURA 🔒</span>
      </header>

      {/* Container principal da página */}
      <div className="container">

      <div className="cart-layout">

        {/* Lista de itens do carrinho */}
        
        <div className="cart-items">

          {/* Cada item do carrinho é representado por um bloco "cart-item" */}
          {/* Item 1 */}
          <div className="cart-item">
            {/* Imagem do produto */}
            <img
              src="https://via.placeholder.com/100"
              alt="Produto 1"
              className="cart-item-image"
            />
            <div className="cart-item-details">
              {/* Nome do produto */}
              <p className="font-semibold">Camiseta básica preta</p>
              {/* Referência do produto */}
              <p className="text-gray-400 text-sm">Ref: 293843</p>
              {/* Preço do produto */}
              <p>R$ 39,99</p>
              {/* Botão para remover o item do carrinho */}
              <button className="btn-remove">Remover</button>
            </div>
          </div>

          {/* Item 2 */}
          <div className="cart-item">
            <img
              src="https://via.placeholder.com/100"
              alt="Produto 2"
              className="cart-item-image"
            />
            <div className="cart-item-details">
              <p className="font-semibold">Calça jeans azul</p>
              <p className="text-gray-400 text-sm">Ref: 293844</p>
              <p>R$ 89,99</p>
              <button className="btn-remove">Remover</button>
            </div>
          </div>

          {/* Item 3 */}
          <div className="cart-item">
            <img
              src="https://via.placeholder.com/100"
              alt="Produto 3"
              className="cart-item-image"
            />
            <div className="cart-item-details">
              <p className="font-semibold">Tênis esportivo</p>
              <p className="text-gray-400 text-sm">Ref: 293845</p>
              <p>R$ 129,99</p>
              <button className="btn-remove">Remover</button>
            </div>
          </div>

          {/* Item 4 */}
          <div className="cart-item">
            <img
              src="https://via.placeholder.com/100"
              alt="Produto 4"
              className="cart-item-image"
            />
            <div className="cart-item-details">
              <p className="font-semibold">Blusa de lã cinza</p>
              <p className="text-gray-400 text-sm">Ref: 293846</p>
              <p>R$ 79,99</p>
              <button className="btn-remove">Remover</button>
            </div>
          </div>

          {/* Item 5 */}
          <div className="cart-item">
            <img
              src="https://via.placeholder.com/100"
              alt="Produto 5"
              className="cart-item-image"
            />
            <div className="cart-item-details">
              <p className="font-semibold">Jaqueta de couro</p>
              <p className="text-gray-400 text-sm">Ref: 293847</p>
              <p>R$ 199,99</p>
              <button className="btn-remove">Remover</button>
            </div>
          </div>

          {/* Item 6 */}
          <div className="cart-item">
            <img
              src="https://via.placeholder.com/100"
              alt="Produto 6"
              className="cart-item-image"
            />
            <div className="cart-item-details">
              <p className="font-semibold">Óculos de sol</p>
              <p className="text-gray-400 text-sm">Ref: 293848</p>
              <p>R$ 149,99</p>
              <button className="btn-remove">Remover</button>
            </div>
          </div>

          {/* Item 7 */}
          <div className="cart-item">
            <img
              src="https://via.placeholder.com/100"
              alt="Produto 7"
              className="cart-item-image"
            />
            <div className="cart-item-details">
              <p className="font-semibold">Chapéu de palha</p>
              <p className="text-gray-400 text-sm">Ref: 293849</p>
              <p>R$ 59,99</p>
              <button className="btn-remove">Remover</button>
            </div>
          </div>

          {/* Item 8 */}
          <div className="cart-item">
            <img
              src="https://via.placeholder.com/100"
              alt="Produto 8"
              className="cart-item-image"
            />
            <div className="cart-item-details">
              <p className="font-semibold">Bolsa de mão</p>
              <p className="text-gray-400 text-sm">Ref: 293850</p>
              <p>R$ 119,99</p>
              <button className="btn-remove">Remover</button>
            </div>
          </div>

          {/* Item 9 */}
          <div className="cart-item">
            <img
              src="https://via.placeholder.com/100"
              alt="Produto 9"
              className="cart-item-image"
            />
            <div className="cart-item-details">
              <p className="font-semibold">Relógio de pulso</p>
              <p className="text-gray-400 text-sm">Ref: 293851</p>
              <p>R$ 249,99</p>
              <button className="btn-remove">Remover</button>
            </div>
          </div>
       
       
      

            {/* Coluna lateral de promoções 1*/}
            <div className="promotions">
            <h2 className="promo-title">Itens em Promoção</h2>
            {/* Promoção 1 */}
            <div className="promo-item">
              <img
                src="https://via.placeholder.com/100"
                alt="Promoção 1"
                className="promo-item-image"
              />
              <div className="promo-item-details">
                <p className="font-semibold">Tênis esportivo</p>
                <p className="text-gray-400 text-sm">De: R$ 149,99</p>
                <p className="promo-price">Por: R$ 99,99</p>
                <button className="btn-add-to-cart">Adicionar ao carrinho</button>
              </div>
            </div>

            {/* Promoção 2 */}
            <div className="promo-item">
              <img
                src="https://via.placeholder.com/100"
                alt="Promoção 2"
                className="promo-item-image"
              />
              <div className="promo-item-details">
                <p className="font-semibold">Relógio de pulso</p>
                <p className="text-gray-400 text-sm">De: R$ 299,99</p>
                <p className="promo-price">Por: R$ 199,99</p>
                <button className="btn-add-to-cart">Adicionar ao carrinho</button>
              </div>
            </div>

             {/* Promoção 3 */}
             <div className="promo-item">
              <img
                src="https://via.placeholder.com/100"
                alt="Promoção 1"
                className="promo-item-image"
              />
              <div className="promo-item-details">
                <p className="font-semibold">Tênis esportivo</p>
                <p className="text-gray-400 text-sm">De: R$ 149,99</p>
                <p className="promo-price">Por: R$ 99,99</p>
                <button className="btn-add-to-cart">Adicionar ao carrinho</button>
              </div>
            </div>
          </div>



           {/* Coluna lateral de promoções 2*/}
           <div className="promotions2">
            <h2 className="promo-title2">Itens em Promoção</h2>
            {/* Promoção 1 */}
            <div className="promo-item2">
              <img
                src="https://via.placeholder.com/100"
                alt="Promoção 1"
                className="promo-item-image2"
              />
              <div className="promo-item-details2">
                <p className="font-semibold2">Tênis esportivo</p>
                <p className="text-gray-400 text-sm2">De: R$ 149,99</p>
                <p className="promo-price2">Por: R$ 99,99</p>
                <button className="btn-add-to-cart2">Adicionar ao carrinho</button>
              </div>
            </div>

            {/* Promoção 2 */}
            <div className="promo-item2">
              <img
                src="https://via.placeholder.com/100"
                alt="Promoção 2"
                className="promo-item-image2"
              />
              <div className="promo-item-details2">
                <p className="font-semibold2">Relógio de pulso</p>
                <p className="text-gray-400 text-sm2">De: R$ 299,99</p>
                <p className="promo-price2">Por: R$ 199,99</p>
                <button className="btn-add-to-cart2">Adicionar ao carrinho</button>
              </div>
            </div>

             {/* Promoção 3 */}
             <div className="promo-item2">
              <img
                src="https://via.placeholder.com/100"
                alt="Promoção 1"
                className="promo-item-image2"
              />
              <div className="promo-item-details2">
                <p className="font-semibold2">Tênis esportivo</p>
                <p className="text-gray-400 text-sm2">De: R$ 149,99</p>
                <p className="promo-price2">Por: R$ 99,99</p>
                <button className="btn-add-to-cart2">Adicionar ao carrinho</button>
              </div>
            </div>
          </div>
        </div>
     </div>
    </div>

 {/* Resumo do carrinho com o subtotal e total */}
 <div className="cart-summary card">
          <h2 className="subtitle">Resumo do Carrinho</h2>
          <div className="summary-item">
            <span>Subtotal</span> <span>R$ 999,91</span>
          </div>
          <hr />
          <div className="summary-item font-bold">
            <span>Total</span> <span>R$ 999,91</span>
          </div>
          {/* Botão para ir para o checkout */}
          <div className="text-center">
            <button className="btn">Ir para Checkout</button>
          </div>
        </div>

      {/* Rodapé da página */}
      <footer className="footer">

        {/* Logotipo da loja no rodapé */}
          <img src="/images/logo.jpeg" alt="KMG Shop" />

  
        {/* Ícones das formas de pagamento */}
        <div className="payment-icons">
          <img src="/images/visa.png" alt="Visa" style={{ width: '80px', height: 'auto' }} />
          <img src="/images/mastercard.png" alt="Mastercard" style={{ width: '80px', height: 'auto' }} />
          <img src="/images/elo.png" alt="Elo" style={{ width: '80px ', height: 'auto' }}/>
          </div>
      </footer>
    </div>
  );
};

export default Cartpage; // Exporta o componente para ser usado em outras partes do aplicativo
