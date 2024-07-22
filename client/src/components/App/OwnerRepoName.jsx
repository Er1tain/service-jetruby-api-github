import { useNavigate } from 'react-router-dom';
import '../../styles/OwnerRepoName.css';
import { useRef, useState } from 'react';
import Modal from './OwnerRepoName/Modal';

export default function OwnerRepoName() {
    const navigate = useNavigate();

    const [visible, Visible] = useState(false);

    const nick = useRef();
    const reponame = useRef();

    return (
        <div id="OwnerRepoName">
            {
                visible && (
                    <Modal Visible={Visible} nick={nick.current.value} reponame={reponame.current.value}/>
                )
            }
            <h1>Репозиторий по нику и названию</h1>
            <form>
                <div>
                    <label>Ник</label>
                    <input placeholder="username" ref={nick}/>
                </div>
                <div>
                    <label>Имя репозитория</label>
                    <input placeholder="reponame" ref={reponame}/>
                </div>
                <button onClick={(e)=>{
                    e.preventDefault();
                    if (nick.current.value != '' && reponame.current.value != '') Visible(true)    
                }}>Информация</button>
                <button id="back_btn" onClick={()=>navigate('/')}>На главную</button>
            </form>
        </div>
    )
}