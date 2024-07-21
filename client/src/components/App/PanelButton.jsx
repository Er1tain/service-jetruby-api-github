export default function PanelButton() {
    return (
        <div id="button_panel">
          <button class="button_panel_button" id="popular_repos">Данные о  <br></br>популярных репозиториях</button>
          <button class="button_panel_button" id="get_repo_id">Получить информацию <br></br>о репозитории по id</button>
          <button class="button_panel_button" id="get_repo_owner_reponame">Получить информацию <br></br>о репозитории по нику владельца и названию</button>
        </div>
    )
}