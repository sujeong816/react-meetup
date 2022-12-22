import classes from "./Card.module.css";

function Card (props) {
    return (
        <div className={classes.card}>
            {props.children} {/** 모든 컴포넌트가 기본값을 갖게 함 */}
        </div>
    );
}

export default Card;