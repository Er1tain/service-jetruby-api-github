const { default: axios } = require('axios');
const express = require('express');
const app = express();

//Эндпоинт для получения информации о репозитории по имени или id
app.get('/repo', async (request, response)=>{
    try {
        const repo_id = request.query.id;
        const query = await axios.get(`https://api.github.com/repositories/${repo_id}`);
        const data = await query.data;
        
        response.json(data);
    } catch(error) {
        response.status(400).json({
            result: "Repo not found..("
        })
    }
})

app.listen(3001, ()=>console.log('Server run!'));