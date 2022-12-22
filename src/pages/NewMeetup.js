import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() { /** 모임약속 폼을 렌더링할 파일 */
   function addMeetupHandler(meetupData) { /** http 요청을 보냄 */
        
    /** get 요청 전송 */
    fetch('https://react-getting-start-4a1b4-default-rtdb.firebaseio.com/meetups.json',  /** Firebase API 끝에는 .json 붙이기 */
        {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {'Content-Type': 'application/json'}
        } /** fetch() 함수 호출 및 http 요청 구성 가능 */
    ); 

   }

    return (
        <section>
         <h1>Add New Meetup</h1>
         <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </section>
    );
}

export default NewMeetupPage;