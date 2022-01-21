import React, { Component } from 'react';
import NotiNavBar from '../../components/NotiNavBar/NotiNavBar';
import drop from '../../assets/drop_down.svg';
import gear from '../../assets/gear.svg';
import './Notifications.scss';
import Habits from '../../components/Habits/Habits';
import home from '../../assets/home_screen.jpeg'
import Blogs from '../../components/Blogs/Blogs';
import Exercises from '../../components/Exercises/Exercises';


export default class Notifications extends Component {
    render() {
        return (
            <div className="Main">
                <img className='Main__img' src={home} alt="" />
                <div className="Main__container">
                    <div className='notifications'>
                        <NotiNavBar />
                        <div className='notifications__toolbar'>
                            <div className='notifications__line notifications__line--left'></div>
                            <img className='notifications__icon' src={drop} alt="" />
                            <p className='notifications__text'>ALL</p>
                            <img className='notifications__icon' src={gear} alt="" />
                            <div className='notifications__line  notifications__line--right'></div>
                        </div>
                        <Habits />
                        <Blogs />
                        <Exercises />
                    </div>
                    
                    
                </div>
            </div>
            );
    }
}
