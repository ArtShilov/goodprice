import React, { Component } from 'react';
import CardProduct from '../card-product/card-product';
import SubFilter from '../sub-filter/sub-filter';
import './home-page.css';

export default class HomePage extends Component {
  state = {
    products: []
  }

  componentDidMount() {
    this.getProducts();
  }

  viewCards = () => {
    const { products } = this.state;
    return products.map(item => (
      <CardProduct img={item.img} name={item.name} price={item.lowPrice} />
    ));
  }

  viewSubFilter = () => {
    const subFilters = [];
    for (let i = 0; i < 6; i++) {
      subFilters.push(<SubFilter key={i}></SubFilter>);
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

  // test = async () => {
  //   try {
  //     const products = await fetch('api2', {
  //       method: 'POST',
  //       headers: { Apikey: 'lK8nk2JQdQOK4bkv4ImomBhxMWKSG2X6' },
  //       body: JSON.stringify({
  //         params: {
  //           filters: {
  //             page: 1,
  //             limit: 100
  //           },
  //           sources: {
  //             add: true,
  //             add_term: true
  //           }
  //         }
  //       })
  //     });
  //     const productsObj = await products.json();
  //     console.log(productsObj);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  render() {
    return (
      <div className='home-page'>
        {/* <button onClick={this.test}>test</button> */}
        <div>
          <h1 className="market-filter"><i className="fas fa-shopping-bag"></i>Maгазины</h1>
          <ul className="xf-catalog-market-list">
            {this.viewSubFilter()}
          </ul>
          <ul className="xf-b js-xf-b _catalog-under-filters" data-id="block_19">
            <li className="js-xf-carousel__item swiper-slide" data-id="banner__1182">
              <a href="/catalog/krasota-gigiena-bytovaya-himiya/sredstva-lichnoy-gigieny/podguzniki-dlya-vzroslyh/terezal-prokl-micro-ur-jen-24sht--459871">
                <img src="https://www.perekrestok.ru/src/banner/77/42/4277.png" className="banner-img" />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className='cards-products'>
            {this.viewCards()}
          </div>
          <aside class="xf-paginator  js-paginator " data-count="1815">
            <div class="xf-paginator__more-wrap">
              <button type="button" class="xf-paginator__more js-paginator__more-btn">Показать еще товары</button>
            </div>
            <div class="xf-paginator__items-wrap">
              <div class="xf-paginator__items">
                <a href="#&amp;page=2&amp;sort=rate_desc" class="xf-paginator__item js-paginator__prev">
                  <svg id="xf-svg__previous" viewBox="0 0 32 32" width="100%" height="100%">
                    <title>previous</title>
                    <path d="M23.2 31.467c0.533 0 1.067-0.133 1.467-0.533 0.8-0.8 0.8-2 0-2.8l-12.4-12.4 12.4-12.4c0.8-0.8 0.8-2 0-2.8s-2-0.8-2.8 0l-15.2 15.2 15.2 15.2c0.4 0.4 0.8 0.533 1.333 0.533z"></path>
                  </svg>
                </a>
                <a href="/catalog/moloko-syr-yaytsa&amp;page=2&amp;sort=rate_desc" class="xf-paginator__item js-paginator__btn" data-type="btn">1</a>
                <a href="/catalog/moloko-syr-yaytsa?page=2&amp;page=2&amp;sort=rate_desc" class="xf-paginator__item js-paginator__btn _active" data-type="btn">2</a>
                <a href="/catalog/moloko-syr-yaytsa?page=3&amp;page=2&amp;sort=rate_desc" class="xf-paginator__item js-paginator__btn" data-type="btn">3</a>
                <a href="/catalog/moloko-syr-yaytsa?page=4&amp;page=2&amp;sort=rate_desc" class="xf-paginator__item js-paginator__btn" data-type="btn">4</a>
                <a href="http://www.perekrestok.ru/catalog/moloko-syr-yaytsa?page=2&amp;page=2&amp;sort=rate_desc" class="xf-paginator__item js-paginator__next" rel="next">
                  <svg id="xf-svg__next" viewBox="0 0 32 32" width="100%" height="100%">
                    <title>next</title>
                    <path d="M8.667 31.467c-0.533 0-1.067-0.133-1.467-0.533-0.8-0.8-0.8-2 0-2.8l12.4-12.4-12.4-12.4c-0.8-0.667-0.8-2 0-2.8s2.133-0.8 2.933 0l15.2 15.2-15.2 15.2c-0.4 0.4-0.933 0.533-1.467 0.533z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    );
  }
}
