import React, { Component } from 'react';
import './cart-element.css';

export default class CartElement extends Component {
  // handleClickFilter = (e) => {
  //   const shopsName = e.target.getAttribute('shopsname');
  //   this.props.onClick(shopsName);
  // }

  render() {
    return (
      <li className="catalog-market__item cart-element-item">
        <div className="catalog-market__link cart-element-flex-column">
          <span className="catalog-market__text" >{this.props.name}</span>
          <span className="catalog-market__text" >Количество: <button onClick={(e, operation, product) => this.props.onClick(e, 'decrease', this.props.product)}>-</button> {this.props.quantity} <button onClick={(e, operation, product) => this.props.onClick(e, 'increase', this.props.product)}>+</button> </span>
        </div>
      </li>
    );
  }
}
