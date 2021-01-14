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
      allQuotes: [],
    };
  }
  currentQuote = {};
  componentDidMount() {
    async function getAllQuotes() {
      let response = await fetch("https://type.fit/api/quotes");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        return await response;
      }
    }
    getAllQuotes()
      .then((response) => response.json())
      .then((responseAllQuotes) => {
        const randomNumber = Math.floor(Math.random() * 1634 + 1);
        this.currentQuote = responseAllQuotes[randomNumber];
         console.log(this.currentQuote);
      });
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
    let filteredTodo = this.state.todos.filter(
      (todo) => todo.name !== passedTodo.name
    );
    this.setState({
      todos: filteredTodo,
    });
  };

  render() {
    const { todos: allTodos, currentTodo } = this.state;
    return (
      <main className="main-todo-list">
        <div className="title-div">
          <h1 className="title">Todo List</h1>
        </div>
        <section className="parent-section">
          <section className="section-todo-list">
            <InputField
              placeHolder="Add Todo"
              currentTodo={currentTodo.name}
              handleChange={this.onInputChange}
              handlClick={this.onAddNewTodo}
            />
            <CardList todos={allTodos} onDeleteTodo={this.onDeleteTodo} />
          </section>
        </section>
        <footer className="dailyQuotes">
          <div className="dailyQuotesCard">
            <h5 className="quote">
              {this.currentQuote?.text}
              <h6 className="author">{this.currentQuote?.author || "Quotes"}</h6>
            </h5>
          </div>
        </footer>
      </main>
    );
  }
}

export default App;
