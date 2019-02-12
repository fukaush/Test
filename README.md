<h1>Тестовое задание</h1>

<h3>Задание No1 калькулятор дробей</h3>
<p>Необходимо реализовать калькулятор обыкновенных дробей. Слева от знака «=» расположено выражение Минимальный набор
  операторов +-*/, скобки будут плюсом, справа от знака равно находится результат в виде несократимой обыкновенной
  дроби. При нажатии на ссылку add fraction в выражении слева должен добавиться один знак и еще одна дробь. При любом
  изменении данных выражение должно пересчитываться. Необходимо предусмотреть всевозможные ошибочные варианты ввода.</p>

<h3>Задание No2 Взаимодействие с сервером по протоколу websocket</h3>
<p>Имеется веб сервер, подключение к которому происходит по протоколу websocket. На сервер посылаются запросы. Каждый
  запрос содержит в себе свой номер. Сервер высылает в ответ на каждый запрос номер запроса и некоторый ответ.</p><p>
  Пример:</p><p>Запрос «1,тело запроса» ответ «1, тело ответа» Запрос «2,тело запроса» ответ «2, тело ответа»</p><p>
  Особо стоит отметить, что как на серверной стороне, так и на клиентской протокол websocket предусматривает
  асинхронную обработку. Т.е. сначала клиент может послать 5 запросов, а потом получить 5 ответов.</p><p>Проблема:
  сервер может ответить не в том порядке, в котором были сделаны запросы. Каждый ответ сервера требует уникальных
  действий на стороне клиента. На какой-то из запросов сервер вообще может не ответить, необходима проверка
  (возможность указать таймаут - опционально)</p><p>Адрессервера: ws://echo. websocket.org/</p><p>Задача: реализовать
  асинхронную обработку ответов сервера. Далее описание того, что необходимо реализовать.</p><p>На странице выведен
  список из 10 различных комментариев. Рядом с каждым словом есть кнопка «удалить».</p><p>При нажатии на эту кнопку
  формируется запрос на сервер.</p><p>В начале каждого запроса указывается его номер.</p><p>(т.к. задача тестовая, то
  кроме номера ничего указывать не надо).</p><p>Сервер ответ сервера так же содержит номер запроса.</p><p>(т.е. задача
  тестовая, то кроме номера запроса в ответе ничего нет).</p><p>При получении корректного ответа от сервера на запрос с
  определенным номером, нужный комментарий удаляется из списка.</p>
