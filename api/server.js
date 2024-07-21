import axios from 'axios';
import express from 'express';
import DataBase from './database.js';
import cors from 'cors';

const app = express();

//Настроить политику CORS
const whitelist = ["http://localhost:3000"];

const corsOptions = {
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    }
  };
app.use(cors(corsOptions));
//

//Объект для работы с БД
const DB = new DataBase();

//Получение данных о самых популярных(наибольшее количество звёзд) репозиториях каждые 5 минут
var cooldown = setInterval(async ()=>{
    try {
        const query = await axios.get(`https://api.github.com/search/repositories?q=stars:>1&sort=stars&order=desc`);
        const data = await query.data;

        //Добавить в базу данные о репозиториях
        DB.add_many_repo(data.items);

        console.log('Chart update.');
    } catch(error) {
        console.log('Server not found...');
    }
}, 5 * 60000);

//Принудительное получение данных о самых популярных(наибольшее количество звёзд) репозиториях
app.get('/popular_repos', async (request, response)=>{
    try {
        const query = await axios.get(`https://api.github.com/search/repositories?q=stars:>1&sort=stars&order=desc`);
        const data = await query.data;

        //Так как пользователь совершил принудительное обвновление данных, то запланированное выполнение коллбэка отменяется и вместо этого коллбэки
        //Будут снова отрабатывать с интервалом в 5 минут до следующего принудительного запроса
        clearInterval(cooldown);
        cooldown = setInterval(async ()=>{
            try {
                const query = await axios.get(`https://api.github.com/search/repositories?q=stars:>1&sort=stars&order=desc`);
                const data = await query.data;

                //Добавить в базу данные о репозиториях
                DB.add_many_repo(data.items);

                console.log('Chart update.');
            } catch(error) {
                console.log('Server not found...');
            }
        }, 5 * 60000);
        
        //Добавить в базу данные о репозиториях
        DB.add_many_repo(data.items);

        console.log('Actually list of most popular repos!');
        response.json(data);
    } catch {
        console.log('Server disconnect or repo does not exist...');
    }
})

//Эндпоинт для получения информации о репозитории по id
app.get('/repo', async (request, response)=>{
    try {
        const repo_id = request.query.id;
        const query = await axios.get(`https://api.github.com/repositories/${repo_id}`);
        const data = await query.data;
        
        //Добавим в БД информацию о репозитории
        DB.add_one_repo(data)

        response.json(data);
        console.log(`Get data from API GitHub about repo with id: ${data.id}`)
    } catch(error) {
        response.status(400).json({
            result: "Repo not found..("
        })
        console.log("Result of query finished fail...")
    }
})

//Эндпоинт для получения информации о репозитории по имени
app.get(`/repo/:username/:repo_name`, async (request, response)=>{
   try {
        //У разных пользователей могут быть репозитории с одинаковыми именами, следовательно необходима дополнительная информация(ник хозяина репозиторий)
        const username = request.params.username;
        const repo_name = request.params.repo_name;

        const query = await axios.get(`https://api.github.com/repos/${username}/${repo_name}`);
        const data = await query.data;

        //Добавим в БД информацию о репозитории
        DB.add_one_repo(data)

        response.json(data);
        console.log(`Get data about repo with name: ${repo_name} and owner: ${username}`)
   } catch(error) {
        console.log('Server disconnect or repo does not exist...')
   }
})

app.listen(3001, ()=>console.log('Server run!'));