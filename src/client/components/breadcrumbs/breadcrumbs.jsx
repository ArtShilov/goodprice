import React, { Component } from 'react';
import './breadcrumbs.css';

export default class Breadcrumbs extends Component {
  render() {
    return (
      <div className="xf-wrapper">
        <ul id="breadcrumbs-one" className="xf-caption__breadcrumbs xf-breadcrumbs">
          <li className="xf-breadcrumbs__item ">
            <a className="xf-breadcrumbs__link" href="/">Главная</a>
          </li>
          <li className="current xf-breadcrumbs__item _last">
            <a href="" className="current">Каталог</a>
          </li>
        </ul>
        <div>
          <h1 className="xf-caption__title">Каталог товаров</h1>
        </div>
      </div>
    );
  }
}
