import "./ExerciseSchedule.scss";
import { Link } from 'react-router-dom';
import clock from '../../assets/clock-icon.svg';
import exit from '../../assets/exit-icon.svg';

function ExerciseSchedule() {
  const clickHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="exercise">
        <Link className="exercise__exit-icon" to=''>
            <img src={exit} alt="" />
        </Link>
        <h2 className="exercise__title">REPEAT BEGINNER YOGA SESSION</h2>
        <div className="exercise__time-container">
            <img className="exercise__clock-icon" src={clock} alt="" />
            <p className="exercise__info">EVERY TUESDAY</p>
        </div>

        <div className="exercise__container">
            <p className="exercise__schedule">1</p>
            <p className="exercise__schedule">MONTH</p>
        </div>
        <Link to='' className="exercise__link">CONFIRM</Link>
        
    </div>
  );
}

export default ExerciseSchedule;
