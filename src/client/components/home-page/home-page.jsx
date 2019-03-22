import React, { Component } from 'react';
import CardProduct from '../card-product/card-product';

export default class HomePage extends Component {
  state = {
    products: [
      {
        _id: '5c94bef5d877e4c13fe272a5',
        lastSync: '2019-03-22T10:54:45.293Z',
        lowPrice: 202,
        name: 'Масло из Вологды сливочное Вологодское 82,5%, 180г',
        rating: 5,
        length: 1
      },
      {
        _id: '5c94bef5d877e4c13fe272a7',
        lastSync: '2019-03-22T10:54:45.293Z',
        lowPrice: 202,
        name: 'Масло из Вологды сливочное Вологодское 82,5%, 180г',
        rating: 5,
        length: 1
      },
      {
        _id: '5c94bef5d877e4c13fe272a6',
        lastSync: '2019-03-22T10:54:45.293Z',
        lowPrice: 202,
        name: 'Масло из Вологды сливочное Вологодское 82,5%, 180г',
        rating: 5,
        length: 1
      }
    ]
  }

  viewCards = () => {
    const { products } = this.state;
    return products.map(item => (
        <CardProduct />
    ));
  }

  render() {
    return (
      <div className='home-page'>
        {this.viewCards()}
      </div>
    );
  }
}
