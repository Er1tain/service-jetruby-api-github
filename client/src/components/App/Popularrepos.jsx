import { useEffect, useState } from 'react';
import '../../styles/PopularRepos.css';
import '../../styles/PopularRepos/h1.css';
import '../../styles/PopularRepos/Most_popular_buttons.css';
import QueryAPI from '../../API/QueryAPI';

export default function PopularRepos() {
    const [list_popular_repos, setList] = useState();

    const api = new QueryAPI(setList);
    
    return (
        <div id="Most_popular_repos">
            <h1>Самые популярные репозитории</h1>
            <div id="top-repos">

            </div>
            <div id="Most_popular_buttons">
                <button id="Back_to_main">На главную</button>
                <button id="update_popular_repos" onClick={()=>api.get_popular_repos()}>Обновить</button>
            </div>
        </div>
    )
}