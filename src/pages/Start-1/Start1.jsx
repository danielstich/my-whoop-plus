import img from '../../assets/page1.png'
import './Start1.scss'

export default function Start1() {
    return (
        <div className='start1'>
            <img className='start1__img' src={img} alt="" />
            <a className='start1__link' href="/Start-2"></a>
        </div>);
}
