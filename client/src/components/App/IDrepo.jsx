import { useEffect, useRef, useState } from 'react';
import '../../styles/IDrepo.css';

export default function IDrepo() {
    const [visible, Visible] = useState(false);

    const id_input = useRef();

    useEffect(()=>{
        if (visible) {
            
        }
    }, [visible])

    return (
        <div id="IDrepo">
            {
                visible && (
                    <div id="container">
                        <div id="content">
                            <div id="close_btn" onClick={()=>Visible(false)}>
                                <div id="image_crest"></div>
                            </div>
                            <div id="characters">
                                <div id="owner">
                                    <label>Владелец: </label>
                                </div>
                                <div id="repo_name">
                                    <label>Имя репозитория: </label>
                                </div>
                                <div id="link">
                                    <label>Ссылка: </label>
                                </div>
                                <div id="stars">
                                    <labe>Кол-во звёзд: </labe>
                                </div>
                            </div>
                        </div> 
                    </div>
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
            </form>
        </div>
    )
}