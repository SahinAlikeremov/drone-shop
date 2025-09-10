import '../Styles/Home.css';
import mainImage from '../images/harold-jonker-5VbuysIsILg-unsplash.jpg';
import { NavLink } from 'react-router-dom';
function Showcase() {
    return (
        <div className="main-image">
            <img className='dji-image' src={mainImage} alt="" />
            <div className="overlay-text">
                <div className="inside">
                    <h2>Summer Splash</h2>
                    <h1>Up to 25% off </h1>
                    <p className='left-text-show'>Catch the summer wave with unbeatable deals and special gifts!</p>
                    <NavLink to="/drones"> <button className='shop-btn'>Shop now</button></NavLink>
                </div>
            </div>
        </div>

    )
}

export default Showcase;