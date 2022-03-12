## Предпросмотр

![Preview](src/assets/img/preview.jpg)

## Информация

Приложение состоит всего из 2х страниц. Главная страница, на которой отображены все заметки и страница редактирования, для создания и изменения заметок. Все действия в приложении происходят без перезагрузки страницы.

Все данные хранятся в LocalStorage, поэтому даже если вы перезагрузите страницу, созданные заметки не будут утеряны. Еще я использовал Vue Router, официальную библиотеку маршрутизации, с помощью которой реализовал навигацию.

В тех местах где нужно использовать подтверждение (диалоговое окно), я использовал модальное окно. Вот как оно выглядит:

<img src="src/assets/img/modal.jpg" width="50%">

На странице редактирования добавил чекбоксы, при нажатии на которые текст заметок становится зачеркнутым. Немного о коде, код очень хорошо закоментирован, комментарии и сама программа на английском языке.

## Развертывание

Инструкция для развертывания приложения на локалке. 

* Для начала вам нужно скопировать мой репозиторий данной командой:

    ```sh
    $ git clone https://github.com/favrora/vue-todo-list.git
    ```

* Дальше перейдите в установленную папку в своем терминале:

    ```sh
    $ cd vue-todo-list
    ```

* Установите все зависимости:

    ```sh
    $ npm install
    ```

* Запустите сервер:

    ```sh
    $ npm run serve
    ```

* Откройте страницу: http://localhost:8080/
