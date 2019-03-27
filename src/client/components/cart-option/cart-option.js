import React, { Component } from 'react';
import './cart-option.css';

export default class CartOption extends Component {
  // handleClickFilter = (e) => {
  //   const shopsName = e.target.getAttribute('shopsname');
  //   this.props.onClick(shopsName);
  // }

  viewAbsence = () => {
    const { absence } = this.props;
    return absence.map(item => (
      <li key={item._id}>{item.name}</li>
    ));
  }

  render() {
    return (
      <li >
        <div className="xf-catalog-market__link cart-element-flex-column">
          <h3 className="xf-catalog-market__text" >{this.props.name}</h3>
          <span className="xf-catalog-market__text" >Цена корзины: {this.props.total}</span>
         <div> Товары которых нет в данном магазине:
           <ol>
           {this.viewAbsence()}
           </ol>
           </div>
        </div>
      </li>
    );
  }
}
