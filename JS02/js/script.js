var arrNames = [];
for (var i=0; i<5; i++){
    arrNames[i] = prompt('Введите имя №' + (i+1));
}
var nameLogin = prompt('Введите имя пользователя');
var flag = false;
for (var i=0; i<5; i++){
    if (arrNames[i] === nameLogin) {
        alert(nameLogin + ', Вы успешно вошли');
        flag = true;
        break;
    }
}
if (flag == false) {
    alert ('Ошибка, отсутствует такое имя!')
}