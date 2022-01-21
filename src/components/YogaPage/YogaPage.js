import "./YogaPage.scss";
import { Link } from "react-router-dom";
import page from "../../assets/yogaPage.png";

export default function YogaPage() {
  return (
    <div className="YogaPage">
      <img classname="YogaPage__page" src={page}></img>

      <Link>
        <div className="YogaPage__goto"></div>
      </Link>

      <Link>
        <div className="YogaPage__later"></div>
      </Link>

      <Link>
        <div className="YogaPage__back"></div>
      </Link>
    </div>
  );
}
