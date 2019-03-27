import React, { Component } from 'react';
import './profile.css';

export default class Profile extends Component {
  state = {
    carts: []
  }

  viewCarts = () => {
    const { carts } = this.state;
    return carts.map(item => (
      <li key={item._id}>Корзина</li>
    ));
  }


  getCart = async () => {
    try {
      const response = await fetch('/api/cart');
      if (response.status === 200) {
        const carts = await response.json();
        await this.setState({ carts });
      }
    } catch (e) {
    }
  };

  render() {
    return (
      {/* <li className="xf-catalog-market__item cart-element-item">
        <div className="xf-catalog-market__link cart-element-flex-column">
          <span className="xf-catalog-market__text" >{this.props.name}</span>
          <span className="xf-catalog-market__text" >Количество: <button onClick={(e, operation, product) => this.props.onClick(e, 'decrease', this.props.product)}>-</button> {this.props.quantity} <button onClick={(e, operation, product) => this.props.onClick(e, 'increase', this.props.product)}>+</button> </span>
        </div>
      </li> */}
    );
  }
}
