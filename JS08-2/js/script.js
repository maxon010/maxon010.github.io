$(function (){
    var $tips;
     $('.textfield').each(function(index) {
        $(this).hover(function() {
            $tips = $('#tips'+ (index+1));
            $tips.fadeIn(1000);
            $tips.css('display','inline-block');
        },
        function(){
            $tips.fadeOut(300);
        });
    });
});

