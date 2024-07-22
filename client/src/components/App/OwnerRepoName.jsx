export default function OwnerRepoName() {
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
                <button>На главную</button>
            </form>
        </div>
    )
}