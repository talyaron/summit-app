import './SideNav.css';
import {Link} from "react-router-dom";

function SideNav() {


    return (
        <div className='courseCard'>Summit
            <div className='div'>
                <li>
                    <Link to='/profile'>
                        <img src='https://www.pngfind.com/pngs/m/34-349693_circled-user-icon-transparent-background-username-icon-hd.png' class='iconDetails' />
                        My Account
                    </Link>
                </li>
            </div>
            <div className='div'>
                <Link to='/adminCourses'>
                    <img src='https://cdn.icon-icons.com/icons2/1659/PNG/512/3844439-gear-setting-settings-wheel_110294.png' class='iconDetails' />
                    Manage Courses
                </Link>
            </div>
            <div className='div'>
                <Link to='/'>
                    <img src='https://steamuserimages-a.akamaihd.net/ugc/271718911515166280/3F0CB3FB274373692F28B58C39D55991882E3E61/' class='iconDetails' />
                    Manage Users
                </Link>
            </div>
            <div className='div'>
                <Link to='/adminCourses'>
                    <img src='https://i.pinimg.com/originals/67/ee/ed/67eeed47da114696eaf83536e1d150a5.jpg' class='iconDetails' />
                    Calendar
                </Link>
            </div>
        </div>
    )
}

export default SideNav