import './App.css';
import React from 'react';
import { InputField } from './Components/InputField/inputField.component';
import { CardList } from './Components/CardList/cardList.component';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      todos: []
    }
  }
  todo = {}

  handleChange = (event)=>{
   this.todo = {
      "name" : event.target.value
    }
  }

  handlClick = (event) =>{
    this.state.todos.push(this.todo)
    this.setState({})
  }

  render(){
    const filteredTodo = this.state.todos.map(todo => todo);
    console.log(filteredTodo)
    return (
      <main className="main-todo-list">
        <section className="secton-todo-list">
          <InputField placeHolder="Add Todo" handleChange={this.handleChange} handlClick={this.handlClick}/>
          <CardList todos={filteredTodo} />
        </section>
      </main>
    );
  }
  

}

export default App;
