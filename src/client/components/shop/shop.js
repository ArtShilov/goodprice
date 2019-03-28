import React, { Component } from 'react';
import './shop.css';
import moment from 'moment';

export default class Shop extends Component {
  render() {
    moment.locale('ru');
    return (
    <div>
      <a href={this.props.link}>{this.props.name}</a>
      <div>Цена: {this.props.price} руб.</div>
      <div>Наличие: {this.props.presence}</div>
      {/* <div>Дата обновления: {moment(Date.parse(this.props.lastUpdate)).format('llll')} */}
      {/* </div> */}
    </div>
    );
  }
}
