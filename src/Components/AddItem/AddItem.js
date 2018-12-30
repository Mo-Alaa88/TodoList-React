import React ,{ Component } from 'react';
import './AddItem.css'
class AddItem extends Component {
    state = {
        name:'',
        age:''
    }
    handleChange = (e)=>{
        this.setState({
            // // simple code
            // name:e.target.value,
            // age:e.target.value
            // this code replaced previous code
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        console.log(this.state)
        this.props.addItem(this.state)
        this.setState({
            name:'',
            age:''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' placeholder='Enter name ...' id ='name' required onChange= {this.handleChange}value= {this.state.name}/>
                    <input type='number' placeholder='Enter age ...' id ='age' required onChange= {this.handleChange} value = {this.state.age}/>
                    <input type='submit' value='Add'/>
                </form>
            </div>
        )
    }
}
 export default AddItem;