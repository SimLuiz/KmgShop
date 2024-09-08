import logo from './logo.svg';
import './App.css';

import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-blue-600">Bem-vindo ao Meu Site!</h1>
        <p className="text-gray-700 mt-4">Este é o início de algo incrível!</p>
        <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Clique aqui
        </button>
      </div>
    </div>
  );
}

export default App;
