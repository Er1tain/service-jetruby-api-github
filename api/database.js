import { MongoClient } from "mongodb";

//Симмуляция работы с БД
export default class DataBase {
    //Создание объекта для установки соединения с БД и начала работы с ней
    constructor(){
        this.MongoDB = new MongoClient("mongodb://127.0.0.1:27017/");

        //Создадим объект коллекции куда будем добавлять документы, каждый такой документ представляет информацию о репозитории из списка популярных
       
            try {
                this.MongoDB.connect();

                //Создадим поле класса для коллекции <Most_popular_repos>
                this.most_popular_repos = this.MongoDB.db('database-api-github').collection('Most_popular_repos');
                
                //Создадим поле класса для коллекции <find_repos>
                this.find_repos = this.MongoDB.db('database-api-github').collection('Find_repos');

            } catch (error) {
                console.log("Database connect fail...\n" + error);
            }
        
        
    }
    
    //Добавление в БД одного репозитория
    async add_one_repo(repo) {
        if (typeof(repo) === 'object' && repo.length === undefined) {
            //Во избежание дублирования в Mongo
            repo._id = repo.id;
            delete repo.id;
            
            //Чтобы не выскакивало исключение
            const check_repo_info = await this.find_repos.findOne({_id : repo._id});
            if (check_repo_info) {
                console.log('Primary key already exist...');    //Запись о данном репозитории существует
                return
            }
            
            //Добавим в коллекцию ранее найденных репозиториев
            const res = this.find_repos.insertOne(repo);
            console.log(res);
            console.log(repo);
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