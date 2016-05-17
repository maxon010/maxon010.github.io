/*function Human() {
    this.name = 'Name';
    this.age = 20;
    this.sex = 'male';
    this.growth = 180;
    this.weight = 80;
};*/
var Human = {
    name: 'Name',
    age: 20,
    sex: 'male',
    growth: 180,
    weight: 80
};
function Worker(){
     this.company = 'Google';
     this.salary = 2000;
     this.__proto__ = Human;
     this.work = function(){
       console.log('Метод: Работать');
     }
};

function Student(){
    this.university = 'Harvard';
    this.grants = 200;
    this.__proto__ = Human;
    this.watch = function() {
        console.log('Метод: Смотреть сериалы');
    };
};


var worker1 = new Worker();

var student1 = new Student();
var student2 = new Student();
student1.name = 'Василиса';
student1.age = 18;
student1.sex = 'female';
console.log ('Студент1: ' + student1.name + ', age = ', student1.age);
console.log ('Студент2: ' + student2.name + ', age = ', student2.age);

student1.watch();
worker1.name = 'Вася';
console.log ('Рабочий1: ' + worker1.name + ', age = ', worker1.age);
worker1.work();



$(function(){
    
    //console.log($('.field').val());
    $('.btnForm').on('click', function(e){
        $('.result li').remove();
        e.preventDefault();
    pixUrl='https://pixabay.com/api/?key=2567955-bf4649e2c56460de28554aa46&q=' + $('.field').val() + ' &image_type=photo&pretty=true&callback=PixCallback';
        //console.log($('.field').val());      
        $.ajax({
            url: pixUrl,
            dataType: 'jsonp',
            success: function(response){           
                var imageList = response.hits.length;
                if (imageList == 0) {
                    alert('Ничего не найдено!');
                    return;
                };
                for (var i=0; i<5; i++){
                    var url = response.hits[i].webformatURL;
                    $('.result').append('<li><img src="' + url + '"></li>')
                }
                    $('img').css('margin-left','10px');
                    $('img').css('border','1px solid grey');
            },
            error: function(){
                console.log('ошибка');
            }
        });
                
    });
});
