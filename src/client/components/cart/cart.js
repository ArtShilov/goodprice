import React, { Component } from 'react';
import './cart.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Shop from '../shop/shop';
import CardProduct from '../card-product/card-product';
// import { inputTextAC } from '../../redux/actions/head-actions';
// import { selectProducts } from '../../redux/selectors/home-page-selectors';


const mapStateToProps = state => ({
  // productsFromRedux: selectProducts(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
  // inputText: inputTextAC
}, dispatch);

class Cart extends Component {
  state = {
    cart: []
  }

  componentDidMount() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    this.setState({ cart });
  }

  viewCart = () => {
    const { cart } = this.state;
    return cart.map(item => (
     <CardProduct key={item._id} id={item._id} img={item.img}
     name={item.name} price={item.lowPrice} />
    ));
  }


  render() {
    return (
      <div className='flex'>
      <div>{this.viewCart()}</div>
      </div>
    );
  }
}

const CartPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);

export default CartPage;
