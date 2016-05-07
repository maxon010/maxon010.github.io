$(function(){
    var html = $('#person').html();  
    var data = {   
         title: 'Грабарчук Максим',
         imgSource: 'img/dz1.jpg',
         profession: 'Предприниматель - системное администрирование, обслуживание компьютерной техники',
         objective: 'Хочу учить фронтенд, потому что:',
         objectiveItems: [
             'Хочу переквалифицироваться',
             'Хочу создавать интерактивные сайты',
             'Хочу вернуться в программирование'
         ],
        phone: 'Мой контактный телефон',
        phoneNumber: '+380509518851',
        fb: 'Мой профиль в facebook',
        linkFB: 'https://www.facebook.com/maxon010',
        feedback: 'Мой фидбэк',
        feedbackText: 'Если нужно, отремонтирую комп'
     };
    var content = tmpl(html, data);
    $('body').append(content);
});