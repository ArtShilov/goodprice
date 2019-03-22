import React, { Component } from 'react';

export default class HomePage extends Component {
  getProducts = async () => {
    try {
      const products = await fetch('api/products');
      const productsArray = await products.json();
      this.setState({ products: productsArray });
    } catch (e) {
      console.error(e);
    }
  };


  render() {
    return (
      <div className='home-page'>
        <button onClick={ this.getProducts } >get</button>
        <h1>Home Page</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    );
  }
}
