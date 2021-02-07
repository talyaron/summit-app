import './SideNav.css';
import {Link} from "react-router-dom";

function SideNav() {


    return (
        <div classname='wrap'>
            <div className='div'>
                
                    <Link to='/profile'>
                        <img src='https://www.pngfind.com/pngs/m/34-349693_circled-user-icon-transparent-background-username-icon-hd.png' class='iconDetails' />
                        הפרופיל שלי
                    </Link>
            </div>
            <div className='div'>
                <Link to='/adminCourses'>
                    <img src='https://lh3.googleusercontent.com/proxy/d0OWJMxSIhi_0WzxAfrpjz4Q34cbR9YefsjGNLPAAVyydOsCqYktZOmHJZyBOO4VB7j-k_1J44Z5sNqr_zbDJHxhrpORE9-SEXlo0okulTcrrulGbRCi3gBAiZl3i2lJOiRl-UmFQi-IW-_-F2E' class='iconDetails' />
                    לנהל קורסים
                </Link>
            </div>
            <div className='div'>
                <Link to='/Login'>
                    <img src='https://steamuserimages-a.akamaihd.net/ugc/271718911515166280/3F0CB3FB274373692F28B58C39D55991882E3E61/' class='iconDetails' />
                    התחבר
                </Link>
            </div>
            <div className='div'>
                <Link to='/Calendar'>
                    <img src='https://i.pinimg.com/originals/67/ee/ed/67eeed47da114696eaf83536e1d150a5.jpg' class='iconDetails' />
                    לוּחַ שָׁנָה
                </Link>
            </div>
        </div>
    )
}

export default SideNav