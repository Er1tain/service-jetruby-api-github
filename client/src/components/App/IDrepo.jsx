import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/IDrepo.css';
import Modal from './IDrepo/Modal';

export default function IDrepo() {
    const [visible, Visible] = useState(false);

    const id_input = useRef();

    const navigate = useNavigate();
    return (
        <div id="IDrepo">
            {
                visible && (
                    <Modal Visible={Visible} repo_id={id_input.current.value}/>
                )
            }
            <h1>Репозиторий по ID</h1>
            <form>
                <div>
                    <label>ID репозитория</label>
                    <input placeholder='ID' ref={id_input}/>
                </div>
                <button onClick={(e)=>{
                    e.preventDefault();
                    if (id_input.current.value != '') Visible(true)    
                }}>Информация</button>
                <button id="back_btn" onClick={()=>navigate('/')}>На главную</button>
            </form>
        </div>
    )
}