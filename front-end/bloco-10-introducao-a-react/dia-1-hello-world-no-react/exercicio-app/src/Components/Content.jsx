import React, {Component} from 'react';

class Content extends Component {
  
  render() {
    const conteudos = [
      {
        conteudo: 'High Order Functions',
        bloco: 8,
        status: 'Aprendido'
      },
      {
        conteudo: 'Composicao de Componentes',
        bloco: 11,
        status: 'Aprendendo',
      },
      {
        conteudo: 'Composicao de Estados',
        bloco: 12,
        status: 'Aprenderei'
      },
      {
        conteudo: 'Redux',
        bloco: 16,
        status: 'Aprenderei'
      },
    ];

    return (
      <div>
        {conteudos.map((elem) => {
            return (
            <main class='container-main'>
              <h4>Conteúdo: {elem.conteudo}</h4>
              <p>Status: {elem.status}</p>
              <p>bloco: {elem.bloco}</p>
            </main>
            )
          })
        }
      </div>
    );
  }
}

export default Content;