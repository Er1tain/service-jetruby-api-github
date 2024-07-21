import axios from "axios"
import handlingPopularRepos from "../Logic/handlingPopularRepos";

export default class QueryAPI {
    constructor(setState) {
        //setState – функция, сохраняющая в состоянии данные с бэкенда
        this.setState = setState;
    }

    async get_popular_repos() {
        try {
            const query = await axios.get('http://localhost:3001/popular_repos');
            const data = await query.data.items;
            const popular_repos = handlingPopularRepos(data);
            console.log(popular_repos);
            this.setState(popular_repos);
        } catch(err) {
            console.log('Server not found...')
        }
    }

    get_repo_id() {

    }

    get_repo_owner_reponame() {

    }
}