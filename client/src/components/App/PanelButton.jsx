import { useEffect, useRef } from 'react'
import '../../styles/App/PanelButton/animation.css'
import { useNavigate } from 'react-router-dom';

export default function PanelButton() {
    const panel = useRef();
    const popular_repos = useRef();
    const get_repo_id = useRef();
    const get_repo_owner_reponame = useRef();

    //Анимация
    useEffect(()=>{
      panel.current.style.opacity = 1;
      popular_repos.current.style.marginRight = 0;
      get_repo_id.current.style.marginTop = 0;
      get_repo_owner_reponame.current.style.marginLeft = 0;
      
    }, [])

    const navigate = useNavigate();

    return (
        <div id="button_panel" ref={panel}>
          <button class="button_panel_button" id="popular_repos" ref={popular_repos} onClick={()=>navigate('/popular_repos')}>Данные о  <br></br>популярных репозиториях</button>
          <button class="button_panel_button" id="get_repo_id" ref={get_repo_id} onClick={()=>navigate('/repo_id')}>Получить информацию <br></br>о репозитории по id</button>
          <button class="button_panel_button" id="get_repo_owner_reponame" ref={get_repo_owner_reponame} onClick={()=>navigate('/repo_name_owner')}>Получить информацию <br></br>о репозитории по нику владельца и названию</button>
        </div>
    )
}