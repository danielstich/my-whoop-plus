import React from 'react';
import './OccupationSearch.scss';
import { Link } from 'react-router-dom';
import arrow from '../../assets/icons/BackButton.svg';

export default function OccupationSearch () {

  return (
    <div>
        <form className='occupation-form' action="">
            <h5 className='occupation-form__title'>ADD YOUR OCCUPATION</h5>
            <h6 className='occupation-form__subtitle'>FOR OPTIMIZED LIFESTYLE RECOMMENDATION</h6>
            <label htmlFor="careerInput"></label>
              <input className="occupation-form__input" type="text" name="careerInput" id="careerInput" placeholder="INPUT YOUR OCCUPATION" />
            <Link className='occupation-form__link' to='/Notifications'>
              <img className='occupation-form__arrow' src={arrow} alt="arrow" />
            </Link>
            <button className='occupation-form__button'>SKIP FOR NOW</button>
        </form>

        
    </div>
  );
}
