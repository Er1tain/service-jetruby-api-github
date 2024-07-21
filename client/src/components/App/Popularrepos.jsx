import '../../styles/PopularRepos.css';
import '../../styles/PopularRepos/h1.css';
import '../../styles/PopularRepos/Most_popular_buttons.css';

export default function PopularRepos() {
    return (
        <div id="Most_popular_repos">
            <h1>Самые популярные репозитории</h1>
            <div id="top-repos">
                
            </div>
            <div id="Most_popular_buttons">
                <button id="Back_to_main">На главную</button>
                <button id="update_popular_repos">Обновить</button>
            </div>
        </div>
    )
}