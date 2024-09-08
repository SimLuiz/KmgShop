import React from 'react';

const CheckoutPage = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-between p-8">
      {/* Cabeçalho */}
      <div className="max-w-6xl w-full mx-auto">
        <div className="flex justify-between items-center mb-10">
          <img
            src="https://via.placeholder.com/150x50?text=KMG+Shop"
            alt="KMG Shop Logo"
            className="w-40"
          />
          <span className="py-2 px-4 rounded-full font-semibold text-sm bg-gray-800">
            COMPRA SEGURA 🔒
          </span>
        </div>

        <h1 className="text-3xl font-bold text-center mb-12">Finalizar Compra</h1>

        {/* Blocos lado a lado */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Forma de Entrega (lado esquerdo) */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-6">Forma de Entrega</h2>
            <div className="space-y-4">
              <div className="p-4 border border-gray-700 rounded-lg hover:bg-gray-700 flex justify-between">
                <div className="flex items-center">
                  <input type="radio" name="entrega" id="normal" className="h-4 w-4 text-black" />
                  <label htmlFor="normal" className="ml-3 text-sm font-medium">
                    Normal
                  </label>
                </div>
                <span>R$ 28,00</span>
              </div>
              <div className="p-4 border border-gray-700 rounded-lg hover:bg-gray-700 flex justify-between">
                <div className="flex items-center">
                  <input type="radio" name="entrega" id="sedex" className="h-4 w-4 text-black" />
                  <label htmlFor="sedex" className="ml-3 text-sm font-medium">
                    Sedex
                  </label>
                </div>
                <span>R$ 60,00</span>
              </div>
              <div className="p-4 border border-gray-700 rounded-lg hover:bg-gray-700 flex justify-between">
                <div className="flex items-center">
                  <input type="radio" name="entrega" id="pac" className="h-4 w-4 text-black" />
                  <label htmlFor="pac" className="ml-3 text-sm font-medium">
                    Pac
                  </label>
                </div>
                <span>R$ 15,00</span>
              </div>
            </div>
          </div>

          {/* Informações de Entrega (lado direito) */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-6">Informações de Entrega</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm">Endereço:</label>
                <input
                  type="text"
                  className="w-full mt-2 p-3 border border-gray-700 bg-gray-900 rounded-lg focus:ring-2 focus:ring-gray-500"
                  placeholder="Digite o endereço"
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm">Número:</label>
                  <input
                    type="text"
                    className="w-full mt-2 p-3 border border-gray-700 bg-gray-900 rounded-lg focus:ring-2 focus:ring-gray-500"
                    placeholder="Número"
                  />
                </div>
                <div>
                  <label className="block text-sm">Ponto de Referência:</label>
                  <input
                    type="text"
                    className="w-full mt-2 p-3 border border-gray-700 bg-gray-900 rounded-lg focus:ring-2 focus:ring-gray-500"
                    placeholder="Opcional"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm">Destinatário:</label>
                <input
                  type="text"
                  className="w-full mt-2 p-3 border border-gray-700 bg-gray-900 rounded-lg focus:ring-2 focus:ring-gray-500"
                  placeholder="Nome do destinatário"
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="defaultAddress"
                  className="h-4 w-4 text-gray-600 focus:ring-gray-500"
                />
                <label htmlFor="defaultAddress" className="ml-2 text-sm">
                  Salvar como Endereço Padrão
                </label>
              </div>
            </form>
          </div>
        </div>

        {/* Resumo do Pedido (abaixo) */}
        <div className="bg-gray-800 p-6 rounded-lg mt-12">
          <h2 className="text-xl font-semibold mb-6">Resumo do Pedido</h2>
          <div className="flex items-center justify-between mb-6">
            <img
              src="https://via.placeholder.com/100"
              alt="Produto"
              className="w-24 h-24 object-cover rounded-lg"
            />
            <div className="flex-1 ml-4">
              <p className="font-semibold">Camiseta básica preta</p>
              <p className="text-gray-400 text-sm">Ref: 293843</p>
            </div>
          </div>
          <div className="space-y-2">
            <p className="flex justify-between">
              <span>Cupom</span> <span>R$ 10,00</span>
            </p>
            <p className="flex justify-between">
              <span>Subtotal</span> <span>R$ 39,99</span>
            </p>
            <hr className="border-gray-700" />
            <p className="flex justify-between font-bold">
              <span>Total</span> <span>R$ 39,99</span>
            </p>
          </div>
        </div>
      </div>

      {/* Rodapé */}
      <footer className="w-full bg-gray-900 text-white p-6 mt-12">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <img
            src="https://via.placeholder.com/150x50?text=KMG+Shop"
            alt="KMG Shop Logo"
            className="w-40"
          />
          <div className="flex space-x-4">
            <img
              src="https://via.placeholder.com/50x30?text=Visa"
              alt="Visa"
              className="w-16"
            />
            <img
              src="https://via.placeholder.com/50x30?text=Mastercard"
              alt="Mastercard"
              className="w-16"
            />
            <img
              src="https://via.placeholder.com/50x30?text=Elo"
              alt="Elo"
              className="w-16"
            />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CheckoutPage;
