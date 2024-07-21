import axios from "axios"

export default class QueryAPI {
    constructor(setState) {
        //setState – функция, сохраняющая в состоянии данные с бэкенда
        this.setState = setState;
    }

    async get_popular_repos() {
        try {
            const query = await axios.get('http://localhost:3001/popular_repos');
            const data = await query.data.items;
            console.log(data);
        } catch(err) {
            console.log('Server not found...')
        }
    }

    get_repo_id() {

    }

    get_repo_owner_reponame() {

    }
}