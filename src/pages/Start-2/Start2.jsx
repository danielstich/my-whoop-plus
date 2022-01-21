import img from '../../assets/page2.png'
import './Start2.scss'

export default function Start1() {
    return (
        <div className='start2'>
            <img className='start2__img' src={img} alt="" />
            <a className='start2__link' href="/Main"></a>
        </div>);
}