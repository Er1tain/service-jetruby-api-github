import { useEffect, useState } from "react"
import QueryAPI from "../../../API/QueryAPI";
import '../../../styles/IDrepo/Modal.css';

export default function Modal({Visible, repo_id}) {
    const [repo_info, getRepoInfo] = useState(); //{owner: string, reponame: string, link: string, stars: number}

    useEffect(()=>{
        const api = new QueryAPI(getRepoInfo);
        api.get_repo_id(repo_id);
    }, [])

    return (
        <div id="container">
                        <div id="content">
                            <div id="close_btn" onClick={()=>Visible(false)}>
                                <div id="image_crest"></div>
                            </div>
                            <div id="characters">
                                <div className="payload" id="owner">
                                    <label>Владелец: </label>
                                    <p>{repo_info?.owner}</p>
                                </div>
                                <div className="payload" id="repo_name">
                                    <label>Имя репозитория: </label>
                                    <p>{repo_info?.reponame}</p>
                                </div>
                                <div className="payload" id="link">
                                    <label>Ссылка: </label>
                                    <p>{repo_info?.link}</p>
                                </div>
                                <div className="payload" id="stars">
                                    <label>Кол-во звёзд: </label>
                                    <p>{repo_info?.stars}</p>
                                </div>
                            </div>
                        </div> 
                    </div>
    )
}