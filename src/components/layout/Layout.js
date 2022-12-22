import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

function Layout (props) {
    return ( /** 라우터 콘텐츠를 레이아웃으로 감싼다. */
        <div><MainNavigation/>

        <main className={classes.main}>{props.children}</main>
        </div>
    );
}

export default Layout;