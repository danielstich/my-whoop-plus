import React, { Component } from 'react';
import NotiNavBar from '../../components/NotiNavBar/NotiNavBar';
import './Facebook.scss';
import home from '../../assets/home_screen.jpeg'
import facebook from '../../assets/medium_article.png'


export default class Facebook extends Component {
    render() {
        return (
            <div className="Main">
                <img className='Main__img' src={home} alt="" />
                <div className="Main__container">
                    <div className='Article'>
                        <NotiNavBar />
                        <img className='Article__img' src={facebook} alt="" />
                        </div>
                </div>
            </div>
            );
    }
}