import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import finalScreen from '../../assets/final_screen.jpg';
import './Final.scss';

export default class Main extends Component {

    render() {
        return (
            <div className="Main">
                <img className='Main__img' src={finalScreen} alt="" />
                <div className="Main__container">

                </div>
            </div>
        );
  }
}
