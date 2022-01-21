import "./DrinkWater.scss";

function DrinkWater() {
  const clickHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form className="water">
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
  );
}

export default DrinkWater;
