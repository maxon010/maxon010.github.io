$(function() {
    var $tips;
    var $tipsCollection;
    
    $('.textfield').each(function(index) {
        $(this).mouseover(function() {
            $tips = $(this).siblings('.tipstext');
            $tips.fadeIn(500);
            $tips.css('display','inline-block');
        });
         $(this).mouseout(function() {
            $tips.fadeOut(200);
        });
    });
   
    $('input[type="submit"]').on('click', function(e){
       $tipsCollection = $('.tipstext');
       $tipsCollection.css('display','inline-block');
       e.preventDefault();
    });
    
});
