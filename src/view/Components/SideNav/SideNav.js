import './SideNav.css';
import {

    Link
} from "react-router-dom";

function SideNav() {


    return (
        <div className='sidebar'>סאמיט
            <div className='div'>
                <img src='https://www.pngfind.com/pngs/m/34-349693_circled-user-icon-transparent-background-username-icon-hd.png' class='iconDetails' />
                החשבון שלי
            </div>
            <div className='div'>
                <li>
                    <Link to='/adminCourses'><img src='https://image.flaticon.com/icons/png/512/40/40031.png' class='iconDetails' />
                ניהול קורסים</Link>
                </li>
            </div>
            <div className='div'>
                <img src='https://steamuserimages-a.akamaihd.net/ugc/271718911515166280/3F0CB3FB274373692F28B58C39D55991882E3E61/' class='iconDetails' />
                ניהול משתמשים
            </div>
            <div className='div'>
                <img src='https://i.pinimg.com/originals/67/ee/ed/67eeed47da114696eaf83536e1d150a5.jpg' class='iconDetails' />
                לוח חוגים
            </div>
        </div>
    )
}

export default SideNav