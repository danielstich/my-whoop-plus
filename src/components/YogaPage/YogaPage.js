import {Component} from 'react';
import "./YogaPage.scss";
import { Link } from "react-router-dom";
import page from "../../assets/yogaPage.png";
import ExerciseSchedule from "../../components/ExerciseScheduleFigma9/ExerciseSchedule";

export default class YogaPage extends Component {
  state = {
    isShowDrinkVisible: false
  }

  showDrink = () => {
      this.setState({isShowDrinkVisible: true})
  }

  hideDrink = () => {
      this.setState({isShowDrinkVisible: false})
  }

  render (){
  return (
    <div className="YogaPage">
            {this.state.isShowDrinkVisible && <ExerciseSchedule clickHandler={this.hideDrink}/>}

      <img classname="YogaPage__page" src={page}></img>
      <div onClick={this.showDrink}>
        <div className="YogaPage__goto"></div>
      </div>

      <Link>
        <div className="YogaPage__later"></div>
      </Link>

      <Link>
        <div className="YogaPage__back"></div>
      </Link>
    </div>
  )}
}
