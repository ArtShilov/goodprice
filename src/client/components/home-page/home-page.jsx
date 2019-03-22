import React, { Component } from 'react';
import CardProduct from '../card-product/card-product';
import SubFilter from '../sub-filter/sub-filter';
import './home-page.css';

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
      <CardProduct name={item.name} price={item.lowPrice} />
    ));
  }

  viewSubFilter = () => {
    const subFilters = [];
    for (let i = 0; i < 6; i++) {
      subFilters.push(<SubFilter></SubFilter>);
    }
    return subFilters;
  }

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
        <div>
          <h1 className="market-filter"><i className="fas fa-shopping-bag"></i>Maгазины</h1>
          <ul className="xf-catalog-market-list">
            {this.viewSubFilter()}
          </ul>
        </div>
        <div className='cards-products'>
          {this.viewCards()}
        </div>
      </div>
    );
  }
}
