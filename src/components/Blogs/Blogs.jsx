import facebook from '../../assets/facebook.svg';
import './Blogs.scss'

export default function Blogs() {
    return (
        <div className='Blogs'>
            <h3 className='Blogs__title'>BLOGS THAT RELATE TO YOUR HEALTH</h3>
            <img className='Blogs__img' src={facebook} alt="" />
            <a className='Blogs__link' href='/Facebook'></a>
        </div>
    );
}
