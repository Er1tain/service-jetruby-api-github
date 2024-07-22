export default function Modal({Visible}) {
    return (
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