import React, {Component} from 'react';

class MainContainer extends Component {
  constructor() {
    // allows you to use 'this' keyword
    super();
  }

  // default state??

  // function to be invoked at onClick event
  handleClick() {
    //state change???? 
    this.setState()
  }

  render() {
    return (
      <div className='dropdown'>
        <header className='header'>
          <h3> Track what's in your kitchen so you don't have to remember it all!</h3>
        </header>
        <label> Choose a category: </label>
        <select>
          <option value='options'>Choose one</option>
          <option value='fruits and veggies'>fruits and veggies</option>
          <option value='dairy'>dairy</option>
          <option value='protein'>protein</option>
          <option value='carbs'>carbs</option>
          <option value='bev'>bev</option>
          <option value='snacks'>snacks</option>
          <option value='spices'>spices and condiments</option>
          <option value='etc'>other</option>
        </select>
        <label> Food Item: </label>
        <input type="text" placeholder="Type"></input>
        <label> Expiration Date: </label>
        <input type="text" placeholder="Type"></input>
        {/* <button onClick={handleClick}>Add</button> */}
      </div>
    );
  }

}


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