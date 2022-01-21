import "./Exercises.scss";
import yoga from "../../assets/yoga.png";
import { Link } from "react-router-dom";
import YogaPage from "../YogaPage/YogaPage";

export default function Exercises() {
  return (
    <div className="Exercises">
      <h3 className="Exercises__title">
        RECOMMENDED EXERCISE BASED ON YOUR HEALTH DATA
      </h3>
      <img className="Exercises__img" src={yoga} alt="" />
    </div>
  );
}
