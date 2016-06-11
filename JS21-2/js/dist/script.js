'use strict';

var test = [{
    question: '1. Какой формат передачи данных наиболее распостранен?',
    answers: ['a. SQL', 'b. XML', 'c. JSON', 'd. TXT'],
    correctAnswer: 2
}, {
    question: '2. Выберите правильный метод для преобразования объекта в JSON формат:',
    answers: ['a. render()', 'b. stringify()', 'c. toJSON()'],
    correctAnswer: 1
}, {
    question: '3. С помощью какого объекта осуществляется доступ к локальному хранилищу в современных браузерах?',
    answers: ['a. localStorage', 'b. Storage', 'c. LocalStorage'],
    correctAnswer: 0
}];
// Записываем в localStorage
localStorage.setItem('test', JSON.stringify(test));

$(function () {

    var flag = true;
    var html = $('#test-filling').html();
    var str = localStorage.getItem('test');
    test = JSON.parse(str);
    var content = tmpl(html, { data: test });

    $('body').append(content);

    $('.btnForm').on('click', function (e) {
        var result = $('input:radio:checked');
        var countResult = result.length;

        if (countResult < test.length) {
            alert("Выберите ответы на все вопросы!");
            e.preventDefault();
            return;
        };
        for (var i = 0; i < countResult; i++) {
            if (result[i].value != test[i].correctAnswer) {
                flag = false;
            }
        };

        var modalShow = function modalShow() {
            $('.overlay').fadeIn(400, function () {
                // пoсле выпoлнения предыдущей aнимaции
                $('.modal').css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
                .animate({ opacity: 1 }, 200); // плaвнo изменяем прoзрaчнoсть
            });
        };
        if (flag) {
            $('.modal p').html('Тест успешно пройден');
            e.preventDefault();
            $('.modal').css('background', '#afa');
            modalShow();
        } else {
            $('.modal p').html('Тест не пройден, попробуйте еще раз');
            e.preventDefault();
            $('.modal').css('background', '#f55');
            modalShow();
        }
    });
    $('.close-button').click(function () {
        // клик пo close
        $('.modal').animate({ opacity: 0 }, 200, // плaвнo меняем прoзрaчнoсть нa 0
        function () {
            // пoсле aнимaции
            $(this).css('display', 'none');
            $('.overlay').fadeOut(400); // скрывaем пoдлoжку
        });
        localStorage.clear();
        location.reload();
    });
});
