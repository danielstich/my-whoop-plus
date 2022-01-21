import './Exercises.scss';
import yoga from '../../assets/yoga.png';

export default function Exercises() {
    return (
        <div className='Exercises'>
            <h3 className='Exercises__title'>RECOMMENDED EXERCISE BASED ON YOUR HEALTH DATA</h3>
            <img className='Exercises__img' src={yoga} alt="" />
        </div>
    );
}
