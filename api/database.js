import { MongoClient } from "mongodb";

//Симмуляция работы с БД
export default class DataBase {
    //Создание объекта для установки соединения с БД и начала работы с ней
    constructor(app){
        this.MongoDB = new MongoClient("mongodb://127.0.0.1:27017/");

        //Создадим объект коллекции куда будем добавлять документы, каждый такой документ представляет информацию о репозитории из списка популярных
       
            try {
                this.MongoDB.connect();

                //Создадим поле класса для коллекции <Most_popular_repos>
                this.most_popular_repos = this.MongoDB.db('database-api-github').collection('Most_popular_repos'); //app - экземпляр текущего приложения express.js ; Создали объект коллекции для хранения документов

            } catch (error) {
                console.log("Database connect fail...\n" + error);
            }
        
        
    }
    
    //Добавление в БД одного репозитория
    add_one_repo(repo) {
        if (typeof(repo) === 'object' && repo.length === undefined) {
            
        }
    }

    //Добавление множества репозиториев
    add_many_repo(repos) {
        if (typeof(repos) === 'object' && repos.length > 0) {
            //Добавим в коллекцию самых популярных репозиториев
            const res = this.most_popular_repos.insertMany(repos);
            console.log(res);
            console.log(repos);
            console.log('Run please....run')
        }
    }

    update_repo(repo_id) {
        if (typeof(repo_id) === 'string') {

        }
    }

    delete_repo() {
        if (typeof(repo_id) === 'string') {

        }
    }

    get_repo() {
        if (typeof(repo_id) === 'string') {

        }
    }


}