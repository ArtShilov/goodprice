import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import Type from 'prop-types';
// import { push } from 'connected-react-router';
// import { PAGES } from '../../routes/pages';
import { bemClassNameFactory } from '../../utils/bem';
import { usernameToReduxAC } from '../../redux/actions/app-actions';
import { selectUsername } from '../../redux/selectors/app-selectors';
import Header from '../header/header';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import Footer from '../footer/footer';
import './app.css';
import { productsToReduxAC, cartToReduxAC, showProductsAC } from '../../redux/actions/home-page-actions';


const cn = bemClassNameFactory('app');

const mapStateToProps = state => ({
  usernameFromRedux: selectUsername(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
  cartToRedux: cartToReduxAC,
  usernameToRedux: usernameToReduxAC
}, dispatch);

class App extends Component {
  state = {
    username: ''
  }

  getUser = async () => {
    try {
      const response = await fetch('/api/user');
      if (response.status === 200) {
        const username = await response.json();
        await this.setState({ username });
        this.props.usernameToRedux(username);
      }
    } catch (e) {
      throw e;
    }
  };

  componentDidMount() {
    this.props.cartToRedux(JSON.parse(localStorage.getItem('cart')));
    this.getUser();
  }


  render() {
    const {
      children
    } = this.props;
    return (
      <div className="container">
        <Header />
        <div className="hr"></div>
        <Breadcrumbs />
        <div className={cn('main')}>
          {children}
        </div>
        <Footer />
      </div >
    );
  }
}

const VisibleApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
export default VisibleApp;
