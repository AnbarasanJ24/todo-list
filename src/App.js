import "./App.css";
import React from "react";
import { InputField } from "./Components/InputField/inputField.component";
import { CardList } from "./Components/CardList/cardList.component";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      currentTodo: {
        name: "",
        key: "",
      },
    };
  }

  onInputChange = (event) => {
    this.setState({
      currentTodo: {
        name: event.target.value,
        key: Date.now(),
      },
    });
  };

  onAddNewTodo = () => {
    const { currentTodo } = this.state;
    console.log(currentTodo);
    if (currentTodo.name !== "") {
      const newTodos = [...this.state.todos, currentTodo];
      this.setState({
        todos: newTodos,
        currentTodo: {
          name: "",
          key: "",
        },
      });
    }
  };

  onDeleteTodo = (passedTodo) => {
    let filteredTodo = this.state.todos.filter(todo => todo.name !== passedTodo.name);
    this.setState({
      todos: filteredTodo
    });
  };

  render() {
    const { todos: allTodos, currentTodo } = this.state;
    return (
      <main className="main-todo-list">
        <section className="section-todo-list">
          <InputField
            placeHolder="Add Todo"
            currentTodo={currentTodo.name}
            handleChange={this.onInputChange}
            handlClick={this.onAddNewTodo}
          />
          <CardList todos={allTodos} onDeleteTodo={this.onDeleteTodo} />
        </section>
      </main>
    );
  }
}

export default App;
