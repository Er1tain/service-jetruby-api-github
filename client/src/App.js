import './styles/App/h1.css';
import './styles/App/header.css';
import './styles/App/logo.css';
import './styles/App/button_panel.css';
import './styles/App.css'

function App() {
  return (
    <div>
        <header>
          <div id="logo_github"></div>
          <h1>API GitHub</h1>
        </header>
        <div id="button_panel">
          <button class="button_panel_button" id="popular_repos">Данные о  <br></br>популярных репозиториях</button>
          <button class="button_panel_button" id="get_repo_id">Получить информацию <br></br>о репозитории по id</button>
          <button class="button_panel_button" id="get_repo_owner_reponame">Получить информацию <br></br>о репозитории по нику владельца и названию</button>
        </div>
    </div>
  );
}

export default App;
