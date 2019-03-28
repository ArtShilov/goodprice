import React, { Component } from 'react';
import './profile.css';
import CartPage from '../cart/cart';

export default class Profile extends Component {
  state = {
    carts: []
  }

  viewCarts = () => {
    const { carts } = this.state;
    return carts.map(item => (
      <CartPage key={item._id} cart={item.cart}/>
    ));
  }


  getCarts = async () => {
    try {
      const response = await fetch('/api/cart');
      if (response.status === 200) {
        const carts = await response.json();
        await this.setState({ carts });
        console.log(carts);
      }
    } catch (e) {
    }
  };

  componentDidMount() {
    this.getCarts();
  }

  render() {
    return (
      <div>
        {this.viewCarts()}
      </div>
    );
  }
}
