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
  deleteItem = (id)=>{
    // // حفظت كل الايتمز في الايتمز اللي عندي ده 
    // let items = this.state.items;
    // // بتأكد هنا من ان الايدي اللي معايا مطابق للايدي اللي إضغط عليه وده من خلال الفانكشان بتاعة فايند اندكس 
    // // وظيفة الفايند إندكس انها بتلف على ال
    // let i = items.findIndex(item => item.id === id)
    // // إعمل دليت لمرة واحدة فقط
    // items.splice(i,1)
    // // برجع اعمل ابديت للستيت
    // this.setState({items:items})
    // طريقة ثانية بفلتر الاراي وبعدي على الايتمز جوة وأعرض المخالف للايدي اللي معايا 
    let items = this.state.items.filter(item => {
      return item.id !==id 
    })
    this.setState({items})
  }

  addItem = (item) =>{
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({items})
  }
  render() {
    return (
      <div className="App">
        Todo List App
        <TodoItems items = {this.state.items} deleteItem = {this.deleteItem}/>
        <AddItem addItem= {this.addItem}/>
      </div>
    );
  }
}

export default App;
