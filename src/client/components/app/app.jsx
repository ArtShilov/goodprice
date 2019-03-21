import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import Type from 'prop-types';
import { Link } from 'react-router-dom';
import { push } from 'connected-react-router';
// import elbrusImg from './elbrus.png';
import { PAGES } from '../../routes/pages';
import { bemClassNameFactory } from '../../utils/bem';
import { sayByeAC, sayHiAC } from '../../redux/actions/app-actions';
import { fetchUserStartAC, fetchUserSuccessAC, fetchUserErrorAC } from '../../redux/actions/user-actions';
import { fetchPostsThunkAC } from '../../redux/actions/post-actions';
import { selectSay } from '../../redux/selectors/app-selectors';
import { selectPathname } from '../../redux/selectors/router-selectors';
import { selectUser, selectIsUserFetching } from '../../redux/selectors/user-selectors';
import { selectPosts, selectIsPostsFetching } from '../../redux/selectors/post-selectors';
import { selectLogin } from '../../redux/selectors/login-selectors';
import './app.css';

const cn = bemClassNameFactory('app');

const mapStateToProps = state => ({
  say: selectSay(state),
  pathname: selectPathname(state),
  userInfo: selectUser(state),
  isUserFetching: selectIsUserFetching(state),
  posts: selectPosts(state),
  isPostsFetching: selectIsPostsFetching(state),
  login: selectLogin(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
  sayBye: sayByeAC,
  sayHi: sayHiAC,
  doRoute: push,
  fetchUserStart: fetchUserStartAC,
  fetchUserSuccess: fetchUserSuccessAC,
  fetchUserError: fetchUserErrorAC,
  fetchPosts: fetchPostsThunkAC
}, dispatch);

class App extends Component {
  render() {
    const {
      children
    } = this.props;
    return (
      <div className={cn()}>
        <div className="header d1">
          <img src="#" alt="logo" />
          <form>
            <input type="text" placeholder="Искать здесь..." />
            <button type="submit"></button>
          </form>
          <button className="header-repeat__button">
            <img src="" alt="" />
            Повтор заказа
          </button>
          <img src="#" alt="избранное"/>
          <img src="" alt="корзина"/>
          <span>549р.</span>
        </div>
        <div className={cn('main')}>
          {children}
        </div>
        <div className='footer'>
        <div className="xf-footer__row">
            <div className="xf-footer__social">
                <ul className="xf-footer-social">
                    <li className="xf-footer-social__item _fb">
                        <a className="xf-footer-social__link" href="https://www.facebook.com/perekrestok" title="Facebook">
                            <img src="" alt="Фейсбук"/>
                        </a>
                    </li>
                    <li className="xf-footer-social__item _vk">
                        <a className="xf-footer-social__link" href="https://vk.com/perekrestok_shop" title="ВКонтакте">
                            <img src="" alt="ВК"/>
                        </a>
                    </li>
                    <li className="xf-footer-social__item _tw">
                        <a className="xf-footer-social__link" href="https://twitter.com/perekrestok" title="Twitter">
                            <img src="" alt="Твитер"/>
                        </a>
                    </li>
                    <li className="xf-footer-social__item _youtube">
                        <a className="xf-footer-social__link" href="https://www.youtube.com/channel/UCY9Nwfy_8drHqif0iryQ7Vw" title="Youtube">
                            <img src="" alt="youtube"/>
                        </a>
                    </li>
                    <li className="xf-footer-social__item _ok">
                        <a className="xf-footer-social__link" href="https://ok.ru/perekrestok.shop" title="Одноклассники">
                            <img src="" alt="ok"/>
                        </a>
                    </li>
                    <li className="xf-footer-social__item _ig">
                        <a className="xf-footer-social__link" href="http://instagram.com/perekrestok" title="Instagram">
                            <img src="" alt="instagram"/>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="xf-footer__logo">
                <div className="xf-footer-logo">
                    <img className="xf-footer-logo__image" src="/build/img/svg/footer-logo.svg" alt="logo" />
                </div>
            </div>
        </div>
        </div>
      </div >
    );
  }

  renderMenu() {
    return (
      <div className={cn('menu')}>
        <div><Link to={PAGES.home.path}>Home Page</Link></div>
        <div><Link to={PAGES.info.path}>Info Page</Link></div>
        <div><Link to={PAGES.page404.path}>Page 404</Link></div>
        <div><Link to={PAGES.login.path}>Login</Link></div>
        <div>{this.props.login}</div>
      </div>
    );
  }
}

const VisibleApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
export default VisibleApp;
