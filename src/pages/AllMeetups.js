import MeetupList from "../components/meetups/MeetupList";

import { useState, useEffect } from "react";

function AllMeetupsPage() {
    /** 현재 상태 스냅샷, 상태 업데이트하는 함수 */
    const [IsLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect( ()=>{  /** 의존성이 없어 배열이 비어있을땐 컴포넌트 함수가 처음으로 실행되었을 때만 이 함수 호출 */
        setIsLoading(true);
        /** 페이지에 방문할 때마다 요청을 보냄 */
        fetch(
            'https://react-getting-start-4a1b4-default-rtdb.firebaseio.com/meetups.json'
        ).then(response => {
            return response.json();
        }).then(data=>{
            const meetups = [];

            for(const key in data){
                const meetup = {
                    id: key,
                    ...data[key]
                };
                meetups.push(meetup);
            }

            setIsLoading(false);
            setLoadedMeetups(data);
        });
    }, [] ); /** ex) [IsLoading] : IsLoading 값이 변할 때마다 함수 호출 */

    

    if(IsLoading){
        return(
            <section> <p>Loading...</p> </section>
        );
    }

    return <div>
        
        <h1>All Meetup Page</h1>

            {/** JSX 요소 렌더링 */}   
            <MeetupList meetups={loadedMeetups}/>
        
    </div>;
} /* 모든 모임약속을 로드하고 표시하는 컴포넌트 */

export default AllMeetupsPage;