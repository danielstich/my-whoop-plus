import top_bar from '../../assets/iphone_top.png';
import back_icon from '../../assets/back_icon.svg';
import './NotiNavBar.scss'

export default function NotiNavBar(props) {

    return (
        <div className="noti-navbar">
            <img className="noti-navbar__top-image" src={top_bar} alt="" />
            <div className="noti-navbar__btn-container">
                <a className='noti-navbar__link' href="/Main"><img className='noti-navbar__btn' src={back_icon} alt="" /></a>
                <p>NOTIFICATION</p>
                <p>CLEAR</p>
            </div>
        </div>
    );
}
