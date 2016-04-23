$(function() {
    var $tips;
    var $tipsCollection;
    
    $('.textfield').each(function(index) {
        $(this).hover(function() {
            $tips = $('#tips'+ (index+1));
            $tips.fadeIn(1000);
            $tips.css('display','inline-block');
        },
        function(){
            $tips.fadeOut(200);
        });
    });
   
    $('input[type="submit"]').on('click', function(e){
       $tipsCollection = $('.tipstext');
       $tipsCollection.css('display','inline-block');
       e.preventDefault();
    });
    
});
