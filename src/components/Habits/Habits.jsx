import './Habits.scss';
import water_drop from '../../assets/water_drop.svg';
import right_arrow from '../../assets/right-arrow.svg'
import { Component } from 'react';
import DrinkWater from '../../components/DrinkWater/DrinkWater'

export default class Habits extends Component {

    state = {
        isShowDrinkVisible: false
    }

    showDrink = () => {
        this.setState({isShowDrinkVisible: true})
    }

    hideDrink = () => {
        this.setState({isShowDrinkVisible: false})
    }

    render() {
        return (
            <div className='Habits'>
                <h3 className='Habits__title'>DAILY HABIT TIPS</h3>
                <div className='Habits__card'>
                    <img className='Habits__icon' src={water_drop} alt="" />
                    <div className='Habits__container'>
                        <p className='Habits__text'>Daily habit tips</p>
                        <h3 className='Habits__subtitle'>INCREASE YOUR WATER INTAKE</h3>
                        <p className='Habits__text'>Drink 2.7L water from today</p>
                    </div>
                    <img onClick={this.showDrink} className='Habits__action-icon' src={right_arrow} alt="" />
                </div>
                {this.state.isShowDrinkVisible && <DrinkWater clickHandler={this.hideDrink}/>}
            </div>
        )
    }
}
