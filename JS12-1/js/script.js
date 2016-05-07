$(function (){
  /* var $leftUIEl = $('.carousel-arrow-left');
    var $rightUIEl = $('.carousel-arrow-right');
    var $elementsList = $('.carousel-list');
 
    var pixelsOffset = 230;
    var currentLeftValue = 0;
    var elementsCount = $elementsList.find('li').length;
    var minimumOffset = - ((elementsCount - 4) * pixelsOffset);
    var maximumOffset = 0;
 
    $leftUIEl.on('click',function() {        
        if (currentLeftValue != maximumOffset) {
            currentLeftValue += 230;
            $elementsList.animate({ left : currentLeftValue + "px"}, 500);
        }        
    });
 
    $rightUIEl.on('click', function() {        
        if (currentLeftValue != minimumOffset) {
            currentLeftValue -= 230;
            $elementsList.animate({ left : currentLeftValue + "px"}, 500);
        }        
    });*/
    $('.mycarousel').mycarousel(); 

}); 
  