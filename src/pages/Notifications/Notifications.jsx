import React, { Component } from 'react';
import NotiNavBar from '../../components/NotiNavBar/NotiNavBar';
import drop from '../../assets/drop_down.svg';
import gear from '../../assets/gear.svg';
import './Notifications.scss';


export default class Notifications extends Component {
    render() {
        return (
            <div className='notifications'>
                <NotiNavBar />
                <div className='notifications__toolbar'>
                    <div className='notifications__line'></div>
                    <img className='notifications__icon' src={drop} alt="" />
                    <p className='notifications__text'>ALL</p>
                    <img className='notifications__icon' src={gear} alt="" />
                </div>
            </div>
            );
    }
}
