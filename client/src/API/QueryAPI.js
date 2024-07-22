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

    async get_repo_id(repo_id) {
        try {
            const query = await axios.get('http://localhost:3001/repo', {
                params : {id : repo_id}
            });
            const data = await query.data;
            const repo_info = {
                owner: data.owner.login,
                reponame: data.name,
                link: data.html_url,
                stars: data.stargazers_count
            }
            this.setState(repo_info);
        } catch(err) {
            console.log('Server not found...')
        }
    }

    async get_repo_owner_reponame(nick, reponame) {
        try {
            const query = await axios.get(`http://localhost:3001/repo/${nick}/${reponame}`);
            const data = await query.data;
            const repo_info = {
                owner: data.owner.login,
                id_repo: data._id,
                reponame: data.name,
                link: data.html_url,
                stars: data.stargazers_count
            }
            console.log(repo_info);
            this.setState(repo_info);
        } catch(err) {
            console.log('Server not found...')
        }
    }
}