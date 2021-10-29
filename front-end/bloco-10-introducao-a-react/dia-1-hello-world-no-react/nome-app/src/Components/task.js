import React from 'react';

class Task extends React.Component{
  render() {

    const arrayList = ['Fazer exercicio', 'Ouvir audiobook', 'terminar projeto'];

    return (
      <ul class = 'listTask'>
        {arrayList.map((task) => {
          return (
            <li>{task}</li>
          )
        })
        }
      </ul>
    );
  }
}

export default Task;