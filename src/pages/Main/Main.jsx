import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import OccupationSearch from '../../components/OccupationSearch/OccupationSearch';
import Notifications from '../../pages/Notifications/Notifications';
import home from '../../assets/home_screen.jpeg';
import './Main.scss'

export default class Main extends Component {
    state = {
        loadSearch: false
    }
    componentDidMount() {
        setTimeout( ()=> {
            this.setState({loadSearch: true})
        }, 2000)
    }
    render() {
        return (
            <div className="Main">
                <img className='Main__img' src={home} alt="" />
                <div className="Main__container">
                    <div className="Main__occupation-search">
                        {this.state.loadSearch && <OccupationSearch />}
                    </div>
                    {/* <Notifications /> */}
                </div>
            </div>
        );
  }
}
