import React, { Component } from 'react';
import './big-product.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CardProduct from '../card-product/card-product';
// import { inputTextAC } from '../../redux/actions/head-actions';
import { selectProducts } from '../../redux/selectors/home-page-selectors';

const mapStateToProps = state => ({
  productsFromRedux: selectProducts(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
  // inputText: inputTextAC
}, dispatch);

class BigProductPage extends Component {
  render() {
    const { id } = this.props.match.params;
    console.log(id);
    let item = {};
    console.log(this.props.productsFromRedux);
    for (const product of this.props.productsFromRedux) { // eslint-disable-line
      // console.log(product);
      if (product._id === id) { // eslint-disable-line
        item = product;
      }
    }
    console.log(item);
    return (
      <div>
      <CardProduct img={item.img} name={item.name} price={item.lowPrice} />

      </div>
    );
  }
}

const BigProduct = connect(
  mapStateToProps,
  mapDispatchToProps
)(BigProductPage);

export default BigProduct;
