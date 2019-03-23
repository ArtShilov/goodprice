import React, { Component } from 'react';
import './card-product.css';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { inputTextAC } from '../../redux/actions/head-actions';
// import { selectText } from '../../redux/selectors/head-selectors';

// const mapStateToProps = state => ({
//   textInput: selectText(state),
//   item: state.items.items
// });

// const mapDispatchToProps = dispatch => bindActionCreators({
//   inputText: inputTextAC
// }, dispatch);

export default class CardProductPage extends Component {
  render() {
    return (
      <div className="js-catalog-product _additionals xf-catalog__item" data-id="314412">
        <div className="xf-product js-product  " data-id="314412" data-url="https://www.perekrestok.ru/catalog/314412/quickView"
          id="ui-id-5">
          <div className="xf-product__picture xf-product-picture">
            <a href="/catalog/moloko-syr-yaytsa/tvorog-syrki/lactica-tvorog-myagk-diet-obezj-4-5-120g--314412"
              className="xf-product-picture__link js-product__image">
              <img data-src="/src/product.file/list/image/14/14/21414.jpeg"
                className="js-lazy swiper-lazy xf-product-picture__img "
                src={this.props.img} />
            </a>
          </div>
          <div className="xf-product__favorite-rating-line">
            <a href="/catalog/moloko-syr-yaytsa/tvorog-syrki/lactica-tvorog-myagk-diet-obezj-4-5-120g--314412/reviews"
              className="xf-product__rating xf-product-rating _link">
              <div className="xf-product__rating xf-product-rating  ">
                <ul className="xf-product-rating__stars">
                  <li className="xf-product-rating__star _active">
                    <i className="fas fa-star"></i>
                  </li>
                  <li className="xf-product-rating__star _active">
                    <i className="fas fa-star"></i>
                  </li>
                  <li className="xf-product-rating__star _active">
                    <i className="fas fa-star"></i>
                  </li>
                  <li className="xf-product-rating__star _active">
                    <i className="fas fa-star"></i>
                  </li>
                  <li className="xf-product-rating__star _active">
                    <i className="fas fa-star"></i>
                  </li>
                </ul><span className="xf-product-rating__count _short">2</span>
              </div>
            </a>
            <div className="xf-product__favorite xf-product-favorite js-product__favorite " data-key="favorites">
              <i className="fas fa-heart"></i>
            </div>
          </div>
          <div className="xf-product__title xf-product-title">
            <a href={this.props.href}
              className="xf-product-title__link js-product__title" title={this.props.name}>
              {this.props.name}
        </a>
          </div>
          <div className="xf-product__cost xf-product-cost">
            <div className="xf-price xf-product-cost__current js-product__cost " data-cost="37.9" data-type="шт">
              <span className="xf-price__rouble">{this.props.price}</span>
              <span className="xf-price__penny">,90 &nbsp;</span>
              <span className="xf-price__unit">
                р/шт
          </span>
            </div>
          </div>
          <div className="xf-product__to-cart xf-product-to-cart product_calc">
            <button className="xf-add-to-cart-btn js-product__add  ">
              В корзину
          <i className="fas fa-shopping-basket"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

// const CardProduct = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(CardProductPage);

// export default CardProduct;
