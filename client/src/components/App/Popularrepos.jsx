import {useEffect, useRef, useState } from 'react';
import '../../styles/PopularRepos.css';
import '../../styles/PopularRepos/h1.css';
import '../../styles/PopularRepos/Most_popular_buttons.css';
import '../../styles/PopularRepos/top_repos.css';
import '../../styles/PopularRepos/rewind_btn.css';
import QueryAPI from '../../API/QueryAPI';
import { useNavigate } from 'react-router-dom';

export default function PopularRepos() {
    const navigate = useNavigate();

    const [list_popular_repos, setList] = useState();

    const api = new QueryAPI(setList);
    
    //Реализуем пагинацию
    const [number_page, setNumber] = useState(0);

    //5 записей назад
    const back = ()=>{
        if (number_page >= 5) setNumber(number_page-5);
    }

    //5 записей вперёд
    const next = ()=>{
        if (number_page <= list_popular_repos[0].length - 5) setNumber(number_page + 5);
    }

    //Ссылки на кнопки пагинации
    const backButton = useRef();
    const nextButton = useRef();

    //Блокада кнопок до тех пор, пока пользователь не нажмёт "Обновить"
    const [disabled, setDisabled] = useState(true);

    //Если нельзя листать вперёд или назад
    useEffect(()=>{
        if (number_page == 0) backButton.current.disabled = true;
        else backButton.current.disabled = false;
        if (number_page == 25) nextButton.current.disabled = true;
        else nextButton.current.disabled = false;
    }, [number_page])

    return (
        <div id="Most_popular_repos">
            <h1>Самые популярные репозитории</h1>
            <div id="Most_popular_buttons">
                <button id="Back_to_main" onClick={()=>navigate("/")}>На главную</button>
                <button id="update_popular_repos" onClick={()=>{
                    api.get_popular_repos()
                    setDisabled(false);
                    }}>Обновить</button>
            </div>
            <div id="top-repos">
                {list_popular_repos?.map(columns=>{
                    return (
                        <div>
                            
                            {columns?.map((value, index)=>{
                                
                                if(index >= number_page && index <= number_page+4) {
                                    return <p>{value}</p>
                                }    
                               
                            })} 
                                   
            
                        </div>
                    )
                   })}
            </div>
            <div id="rewind_btn">
                <button onClick={back} ref={backButton} disabled={disabled}>Назад</button>
                <button onClick={next} ref={nextButton} disabled={disabled}>Вперёд</button>
            </div>
        </div>
    )
}