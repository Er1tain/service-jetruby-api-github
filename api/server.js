const { default: axios } = require('axios');
const express = require('express');
const app = express();

//Эндпоинт для получения информации о репозитории по id
app.get('/repo', async (request, response)=>{
    try {
        const repo_id = request.query.id;
        const query = await axios.get(`https://api.github.com/repositories/${repo_id}`);
        const data = await query.data;
        
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

        response.json(data);
        console.log(`Get data about repo with name: ${repo_name} and owner: ${username}`)
   } catch(error) {
        console.log('Server disconnect or repo does not exist...')
   }
})

app.listen(3001, ()=>console.log('Server run!'));