import React, { Component } from 'react';
import './breadcrumbs.css';

export default class Breadcrumbs extends Component {
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
        <a className="absolute" data-toggle="modal" data-target="#exampleModalCenter">Войти</a>
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
                  <div>
                    <label class="labelClass">Username:</label>
                    <input type="text" name="username" />
                  </div>
                  <div>
                    <label class="labelClass">Password:</label>
                    <input type="password" name="password" />
                  </div>
                  <div>
                    <input class="btn btn-primary" type="submit" value="Log In" />
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// < !--Button trigger modal-- >
//   <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
//     Запустить модальное окно
// </button>

//   <!--Modal -->
//     <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
//       <div class="modal-dialog modal-dialog-centered" role="document">
//         <div class="modal-content">
//           <div class="modal-header">
//             <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
//             <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//               <span aria-hidden="true">&times;</span>
//             </button>
//           </div>
//           <div class="modal-body">
//             ...
//       </div>
//           <div class="modal-footer">
//             <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
//             <button type="button" class="btn btn-primary">Save changes</button>
//           </div>
//         </div>
//       </div>
//     </div>
