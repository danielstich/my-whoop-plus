import './Habits.scss';
import water_drop from '../../assets/water_drop.svg';
import right_arrow from '../../assets/right-arrow.svg'

export default function Habits() {
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
                <img className='Habits__action-icon' src={right_arrow} alt="" />
            </div>
            
        </div>
    );
}
