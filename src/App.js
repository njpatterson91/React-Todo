import React from "react";
import TodoList from "./components/TodoList";
import AddForm from "./components/AddForm";

const todo = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false,
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todo,
    };
  }

  addItem = (e, item) => {
    e.preventDefault();
    const newItem = {
      task: item,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      todo: [...this.state.todo, newItem],
    });
  };

  toggleItem = (itemId) => {
    console.log("yeet");
    this.setState({
      todo: this.state.todo.map((item) => {
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      }),
    });
  };

  clearDone = (e) => {
    e.preventDefault();
    this.setState({
      todo: this.state.todo.filter((item) => !item.completed),
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <AddForm addItem={this.addItem} />
        <TodoList
          todo={this.state.todo}
          toggleItem={this.toggleItem}
          clearDone={this.clearDone}
        />
      </div>
    );
  }
}

export default App;
