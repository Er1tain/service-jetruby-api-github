import { useNavigate } from 'react-router-dom';
import '../../styles/OwnerRepoName.css';

export default function OwnerRepoName() {
    const navigate = useNavigate();

    return (
        <div id="OwnerRepoName">
            <h1>Репозиторий по нику и названию</h1>
            <form>
                <div>
                    <label>Ник</label>
                    <input placeholder="username"/>
                </div>
                <div>
                    <label>Имя репозитория</label>
                    <input placeholder="reponame"/>
                </div>
                <button>Информация</button>
                <button id="back_btn" onClick={()=>navigate('/')}>На главную</button>
            </form>
        </div>
    )
}