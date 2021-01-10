import './App.css';
import React from 'react';
import { InputField } from './Components/InputField/inputField.component';
import { Card } from './Components/Card/card.component';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
        todos : ["Testing"]
    }
  }

  render(){
    return (
      <main className="main-todo-list">
        <section className="secton-todo-list">
          <InputField  />
          <Card todos={this.state.todos} />
        </section>
      </main>
    );
  }
  

}

export default App;
