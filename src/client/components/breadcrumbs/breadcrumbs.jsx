import React, { Component } from 'react';
import './breadcrumbs.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { selectUsername } from '../../redux/selectors/app-selectors';

const mapStateToProps = state => ({
  usernameFromRedux: selectUsername(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

class Breadcrumbs extends Component {
  viewAuth = () => {
    const { usernameFromRedux } = this.props;
    if (usernameFromRedux !== undefined) {
      return <div><Link to='/profile'>{usernameFromRedux}</Link>
    <a href="/user/logout">Выйти</a>
    </div>;
    }
    return <div> <a href="/user/signup">Регистрация</a>
    <a href="/user/login">Войти</a>
    </div>;
  }


  render() {
    return (
      <div className="xf-wrapper relative">
        <ul id="breadcrumbs-one" className="xf-caption__breadcrumbs xf-breadcrumbs">
          <li className="xf-breadcrumbs__item ">
            <a className="xf-breadcrumbs__link" href="/">Главная</a>
          </li>
          <li className="current xf-breadcrumbs__item _last">
            <a href="" className="current">Каталог</a>
          </li>
        </ul>
        <div className="absolute">
        {this.viewAuth()}
        </div>
        <div>
          <h1 className="xf-caption__title">Каталог товаров</h1>
        </div>
      </div>
    );
  }
}


const BreadcrumbsApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(Breadcrumbs);
export default BreadcrumbsApp;
