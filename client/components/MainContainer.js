import React, { Component } from 'react';
import FoodItem from './FoodItem';

class MainContainer extends Component {
  constructor() {
    // allows you to use 'this' keyword
    super();
    // default state
    this.state = {
      list: [],
      foodItem: {
        category: '',
        name: '',
        date: ''
      }
    };
    // bind methods to 'this'
    this.handleClick = this.handleClick.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.delete = this.delete.bind(this);
  }

  // function to be invoked at onClick event => change state to reflect user's inputs
  handleClick(e) {
    e.preventDefault();
    // const category = document.querySelector('#category').value
    // console.log(category);

    //state change via this.setState() ????
    this.setState({ category: e.target.value });

    // fetch request 
    // fetch('/', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(data)

    // })

  }
  
  onInputChange(e) {
    e.preventDefault();
    // let newList = [];
    // console.log(newList);
    // newList.push(this.state.foodItem);
    this.setState({
      list: [...this.state.list, this.state.foodItem],
      foodItem: {
        category: e.target.category.value,
        name: e.target.name.value,
        date: e.target.date.value
      }
    });
  }

  delete(e) {
    e.preventDefault();
    this.setState({
      list: [],
      foodItem: {}
    });
  }

  render() {
    // logic to create components with updated state
    const fooditem = [];
    for (let i = 0; i < this.state.list.length; i++) {
      fooditem.push(<FoodItem key={i} {...this.state} />);
    }
    
    return (
      <div className='outerbox'>
        <div className='inputbox'>

          <header className='header'>
            <h3> Track what's in your kitchen so you don't have to remember it all!</h3>
          </header>

          <div className='dropdown'>
            <form onSubmit={this.onInputChange}>
              <label> Choose a category: </label>
              <select id='category'>
                <option value='options'>Choose one</option>
                <option value='fruits and veggies'>fruits and veggies</option>
                <option value='dairy'>dairy</option>
                <option value='protein'>protein</option>
                <option value='carbs'>carbs</option>
                <option value='bev'>bev</option>
                <option value='snacks'>snacks</option>
                <option value='spices and condiments'>spices and condiments</option>
                <option value='other'>other</option>
              </select>
            
              <label> Food Item: </label>
              <input type="text" placeholder="Type" name='name' autoComplete='off'></input> 

              <label> Expiration Date: </label>
              <input type="text" placeholder="Type" name='date' autoComplete='off'></input> 

              <button type='submit'>Add</button>
            </form>
            <div id='deleteAll'>
              <button onClick={this.delete}>Delete all </button>
            </div>
            
          </div>

          {/* <input type='submit' value='Add' onClick={this.handleClick}></input> */}
        </div>
        <div className='foodContainer'>
          {/* <FoodItem type={this.state.category} name={this.state.name}/> */}
          {/* {fooditem} */}
          {/* <FoodItem {...this.state} /> */}
          {fooditem}
        </div>
      </div>
    );
  }
}

// functional component
// export default function MainContainer() {
//   return (
    // <div className='dropdown'>
    //   <header className='header'>
    //     <h3> Track what's in your kitchen so you don't have to remember it all!</h3>
    //   </header>
    //   <label> Choose a category: </label>
    //   <select>
    //     <option value='options'>Choose one</option>
    //     <option value='fruits and veggies'>fruits and veggies</option>
    //     <option value='dairy'>dairy</option>
    //     <option value='protein'>protein</option>
    //     <option value='carbs'>carbs</option>
    //     <option value='bev'>bev</option>
    //     <option value='snacks'>snacks</option>
    //     <option value='spices'>spices and condiments</option>
    //     <option value='etc'>other</option>
    //   </select>
    //   <label> Food Item: </label>
    //   <input type="text" placeholder="Type"></input>
    //   <label> Expiration Date: </label>
    //   <input type="text" placeholder="Type"></input>
    //   <button>Add</button>
    // </div>
//   )
// };

export default MainContainer;