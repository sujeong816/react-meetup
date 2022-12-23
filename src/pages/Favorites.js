import { useContext } from "react";

import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage() {
    const favoriteCtx = useContext(FavoritesContext);   /** 즐겨찾기 배지 추가 */

    let content;

    if (favoriteCtx.totalFavorites === 0){
        content = <p>You got no favorites yet. Starting adding some?</p>
    } else{
        content = <MeetupList meetups={favoriteCtx.favorites}></MeetupList>
    }

    return <section>
        <h1>My Favorites</h1>
        {content}
    </section>;
}

export default FavoritesPage;