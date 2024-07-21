export default function handlingPopularRepos(popular_repos) {
    //popular_repos – данные об популярных запросах
    //Десериализауем данные в массив объектов {name: string, owner: string, link: string, stars: number}
    let owners = [];
    let repos_names = [];
    let links = [];
    let stars = [];
    popular_repos.forEach(repo => {
        owners.push(repo.owner.login);
        repos_names.push(repo.name);
        links.push(repo.html_url);
        stars.push(repo.stargazers_count);
    });

    return [owners, repos_names, links, stars];
}