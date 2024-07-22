# Тестовое задание на Node.js-разработчика в JetRuby

## Требования к сервису

1. Проверка API GitHub каждые X минут и извлечение актуальных репозиториев.
2. Репозитории должны сохраняться в БД.
3. Сервис должен предоставлять публичный API с 3мя эндпоинтами:
    <ul>
        <li>
            Получение репозитория по имени или id.
        </li>
        <li>
            Получить все репозитории
        </li>
        <li>
            Хранить информацию о самых популярных репозиториях и получать информацию о них.
        </li>
        <li>Синхронизация с API GitHub. В случае принудительной синхронизации таймер(см. 1 пункт) сбрасывается до 0.</li>
    </ul>

# Запуск проекта

## Через npm

В корневой директории проекта выполнить команду: *npm install*
Перейти в ./api и выполнить *npm install*
Аналогично для ./client
Запустить проект из корневой директории с помощью *npm start* и можно тестировать MVP