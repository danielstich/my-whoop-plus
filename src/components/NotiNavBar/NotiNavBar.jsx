import top_bar from '../../assets/top_bar.png';
import back_icon from '../../assets/back_icon.svg';
import './NotiNavBar.scss'

export default function NotiNavBar(props) {

    return (
        <div className="noti-navbar">
            <img className="noti-navbar__top-image" src={top_bar} alt="" />
            <div className="noti-navbar__btn-container">
                <img src={back_icon} alt="" />
                <p>NOTIFICATION</p>
                <p>CLEAR</p>
            </div>
        </div>
    );
}
