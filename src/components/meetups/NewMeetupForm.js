import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";
import { useRef } from "react";

function NewMeetupForm(props) {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();
    
    function submitHandler(event) { 
        event.preventDefault(); /** 사용자가 입력한 값 가져오기 */

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const meetupData = { /** 사용자가 입력한 값을 해당 키의 값으로 저장 */
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription
        };

        props.onAddMeetup(meetupData); /** 데이터베이스에 입력받은 값 전송 */
    }
    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}> {/** onSubmit : 제출 이벤트 */}
                <div className={classes.control}> {/** required : 브라우저 내 검증을 위해 필요 */}
                    <label htmlFor="title">Meetup Title</label>
                    <input type='text' required id='title' ref={titleInputRef}/>
                </div>

                <div className={classes.control}>
                    <label htmlFor="image">Meetup Image</label>
                    <input type='url' required id='image' ref={imageInputRef}/>
                </div>

                <div className={classes.control}>
                    <label htmlFor="address">Address</label>
                    <input type='text' required id='address' ref={addressInputRef}/>
                </div>

                <div className={classes.control}>
                    <label htmlFor="description">Description</label>
                    <textarea id="description" required rows="5" ref={descriptionInputRef}></textarea>
                </div>

                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    );
}

export default NewMeetupForm;