import React, { Component } from 'react';
import NotiNavBar from '../../components/NotiNavBar/NotiNavBar';
import './Facebook.scss';
import home from '../../assets/home_screen.jpeg'


export default class Facebook extends Component {
    render() {
        return (
            <div className="Main">
                <img className='Main__img' src={home} alt="" />
                <div className="Main__container">
                    <div className='Article'>
                        <NotiNavBar />
                        <iframe className='Article__iframe' src="https://medium.com/anxy-magazine/facebook-s-mental-health-problem-9c48374c1bd8" frameborder="0"></iframe>
                    </div>
                </div>
            </div>
            );
    }
}