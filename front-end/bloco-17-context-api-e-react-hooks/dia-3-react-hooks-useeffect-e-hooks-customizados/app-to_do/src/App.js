import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');

  const assingnmentChange = ({ target }) => {
    setName(name)
    console.log(target.value);
  }

  return (
    <div>
      <h2>Minhas Tarefas</h2>
      <main>
        <input type="name" value={name} name="name" onChange={assingnmentChange} />
        <button>Adicionar</button>
      </main>
    </div>
  );
}

export default App;
