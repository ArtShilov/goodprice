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
    return <div> <a data-toggle="modal" data-target="#exampleModalCenter1">Регистрация</a>
      <a data-toggle="modal" data-target="#exampleModalCenter">Войти</a>
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

        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form action="/user/login" method="post">
                  <input name="username" id="username" type="text" placeholder="Your username" />
                  <input name="password" id="password" type="password" placeholder="Your password" />
                  <input type="submit" />
                </form>

                <a href="/user/auth/facebook">Login or Register with Facebook</a>
              </div>
            </div>
          </div>
        </div>

        <div class="modal fade" id="exampleModalCenter1" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle1" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form action="/user/signup" method="post">
                  <div>
                    <label class="labelClass" >Username:</label>
                    <input type="text" name="username" />
                  </div>
                  <div>
                    <label class="labelClass">Email:</label>
                    <input type="text" name="email" />
                  </div>
                  <div>
                    <label class="labelClass" >Password:</label>
                    <input type="password" name="password" />
                  </div>
                  <div>
                    <input class="btn btn-primary" type="submit" value="Sign Up" />
                  </div>
                </form>

                <a href="/user/auth/facebook">Login or Register with Facebook</a>
              </div>
            </div>
          </div>
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
