import React from 'react';
import './TodoItems.css';
const TodoItems = (props)=>{
    const {items , deleteItem } = props;
    let length = items.length;
    // if
    const ListItems = length ? (items.map((item) => {
        return (
            <div key ={item.id}>
                <span>{item.name}</span>
                <span>{item.age}</span>
                <span onClick= {()=> deleteItem(item.id)}>&times;</span>
            </div>
        )
    }))
    // else
    :(
        <p>There is no item to show</p>
    )
    return (
        <div>
            <div className='ListItems'>
                <span>Name</span>
                <span>Age</span>
                <span>Action</span>
            </div>
            {ListItems}
        </div>
    )
}
export default TodoItems;