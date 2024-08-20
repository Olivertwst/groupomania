import logo from '../assets/icon-left-font.png';
import './Banner.css';

function Banner() {
    return (
        <div> <img src={logo} alt="logo" className="banner-image" /> </div>
    )
}
// TODO ADD LOGO AND NAVIGTION MENU
// USE react router to allow users to click menu links and to go to other pages.  

export default Banner;