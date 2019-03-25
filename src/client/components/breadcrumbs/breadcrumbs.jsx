import React, { Component } from 'react';
import './breadcrumbs.css';

export default class Breadcrumbs extends Component {
  render() {
    return (
      <div class="xf-wrapper">
        <ul id="breadcrumbs-one" class="xf-caption__breadcrumbs xf-breadcrumbs">
          <li class="xf-breadcrumbs__item ">
            <a class="xf-breadcrumbs__link" href="/">Главная</a>
          </li>
          <li class="current xf-breadcrumbs__item _last">
            <a href="" class="current">Каталог</a>
          </li>
        </ul>
        <div>
          <h1 class="xf-caption__title">Каталог товаров</h1>
        </div>
      </div>
    );
  }
}
