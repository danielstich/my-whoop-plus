import "./DrinkWater.scss";
import water_drop from '../../assets/water_drop.svg';

function DrinkWater({clickHandler}) {
  
  return (
    <div className="water__container">
      <form className="water">
        <p onClick={clickHandler} className="water__close">x</p>
        <img className='water__icon' src={water_drop} alt="" />
                    
        <h2 className="water__title">DRINK MORE WATER</h2>
        <p className="water__info">
          IN THE PAST MONTH, YOUR AVERAGE WATER INTAKE IS 1.5L PER DAY, WE SUGGEST
          EVERY ADULT SHOULD TAKE ATLEAST 2L WATER A DAY.
        </p>

        <input type="range" min="1" max="100" value="50" />
        <p className="water__metric">2L</p>
        <button className="water__button" onClick={clickHandler}>
          CONFIRM
        </button>
      </form>
    </div>
  );
}

export default DrinkWater;
