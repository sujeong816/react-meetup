import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

function MeetupList(props) {
    return (
        <ui className={classes.list}>
            {/** (입력값) => {변환된 데이터 값} */}
            {props.meetups.map((meetup) =>
            (<MeetupItem key={meetup.id} 
                        id={meetup.id}  /** id: 즐겨찾기 */
                        image={meetup.image}
                        title={meetup.title}
                        address={meetup.address}
                        description={meetup.description}
            />)
            )}  
                        
        </ui>
    );

}

export default MeetupList;