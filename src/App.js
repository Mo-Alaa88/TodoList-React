import React, { Component } from 'react';
import TodoItems from './Components/TodoItems/TodoItems.js'
import AddItem from './Components/AddItem/AddItem.js'
class App extends Component {
  state = {
    items : [
      {id:1,name:'Mohamed',age:22},
      {id:2,name:'Abaas',age:32},
      {id:3,name:'zizo',age:25},
    ]
  }
  render() {
    return (
      <div className="App">
        Todo List App
        <TodoItems items = {this.state.items} />
        <AddItem/>
      </div>
    );
  }
}

export default App;
