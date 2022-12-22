import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css"; //import css

/* 라우터를 통해 페이지를 로드하지 않음. 우리가 쓴 코드에 임베딩 */
function MainNavigation() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li><Link to="/">All Meetups</Link></li>
                    <li><Link to="/new-meetup">Add New Meetup</Link></li>
                    <li><Link to="/favorites">My Favorites</Link></li>
                </ul>

            </nav>
        </header>
    );
}

export default MainNavigation;