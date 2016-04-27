$(function (){
    
    var $leftScroll = $('.scroll--left');
    var $rightScroll = $('.scroll--right');
    var $slide1 = $('.image1');
    var $slide2 = $('.image2');
    var $slide3 = $('.image3');
    var leftPosition = 0;
    var rightPosition = 0;
    var flag = true;
  
// ---Клик влево------------------    
   $leftScroll.on('click', function(e){
        
            console.log($('.image').transitionend);
       
        leftPosition = parseInt($slide1.css('left'));
        console.log (leftPosition);
        //switch (true){
          switch (leftPosition){   
              case 0:
                  $slide1.css('z-index', 5);
                    //console.log(parseInt($slide1.css('left')));
                  $slide1.css({
                      left: '-800px'
                  });
                  break;
              case 800:
                  $slide1.css('z-index', 5);
                  $slide1.css({
                      left: '0px'
                  });
                  break;
              case -800:
                  $slide1.css('z-index', 1);
                  $slide1.css({
                      left: '800px'
                  });
                  break;
        }
        leftPosition = parseInt($slide2.css('left'));    
        //switch (true){
          switch (leftPosition){   
              case 0:
                    //console.log(parseInt($slide1.css('left')));
              $slide2.css('z-index', 5);
                  $slide2.css({
                      left: '-800px'
                  });
                  break;
              case 800:
                $slide2.css('z-index', 5);
                  $slide2.css({
                      left: '0px'
                  });
                  break;
              case -800:
                    $slide2.css('z-index', 1);
                  $slide2.css({
                      left: '800px'
                  });
                  break;
      }
      leftPosition = parseInt($slide3.css('left')); 
      //switch (true){
        switch (leftPosition){          
              case 0:
                    //console.log(parseInt($slide1.css('left')));
                    $slide3.css('z-index', 5);
                  $slide3.css({
                      left: '-800px'
                     });
                  break;
              case 800:
              $slide3.css('z-index', 5);
                  $slide3.css({
                      left: '0px'
                  });
                  break;
              case -800:
                  $slide3.css('z-index', 1);
                  $slide3.css({
                      left: '800px'
                  });
                  break;
      }
        
      //$('.image').css('transition', 'left 0s');
    });  
      
      // ---Клик вправо------------------    
     $rightScroll.on('click', function(e){
        leftPosition = parseInt($slide1.css('left'));
        //console.log (leftPosition);
        switch (true){
              case (leftPosition === 0):
                  $slide1.css('z-index', 5);
                    //console.log(parseInt($slide1.css('left')));
                  $slide1.css({
                      left: '800px'
                  });
                  break;
              case (leftPosition > 0):
                  $slide1.css('z-index', 1);
                  $slide1.css({
                      left: '-800px'
                  });
                  break;
              case (leftPosition < 0):
                  $slide1.css('z-index', 5);
                  $slide1.css({
                      left: '0px'
                  });
                  break;
        }
        leftPosition = parseInt($slide2.css('left'));    
        switch (true){
              case (leftPosition === 0):
                    //console.log(parseInt($slide1.css('left')));
              $slide2.css('z-index', 5);
                  $slide2.css({
                      left: '800px'
                  });
                  break;
              case (leftPosition > 0):
                $slide2.css('z-index', 1);
                  $slide2.css({
                      left: '-800px'
                  });
                  break;
              case (leftPosition < 0):
                    $slide2.css('z-index', 5);
                  $slide2.css({
                      left: '0px'
                  });
                  break;
      }
      leftPosition = parseInt($slide3.css('left')); 
      switch (true){
              case (leftPosition === 0):
                    //console.log(parseInt($slide1.css('left')));
                    $slide3.css('z-index', 5);
                  $slide3.css({
                      left: '800px'
                     });
                  break;
              case (leftPosition > 0):
              $slide3.css('z-index', 1);
                  $slide3.css({
                      left: '-800px'
                  });
                  break;
              case (leftPosition < 0):
                  $slide3.css('z-index', 5);
                  $slide3.css({
                      left: '0px'
                  });
                  break;
      }
    });   
    /*
      $('.image2').css({
          left: '0',
          display: 'inline-block'
      });
      
       $('.image3').css({
          left: '800px',
          display: 'none'
      */
      
      
      //$slide1.addClass('image-slide1');
      //$slide2.addClass('image-slide2');
      //$slide3.addClass('image-slide3');
      
     /* $(".image").animate({
         right: '800px'
      }, 1500);*/
      //console.log($('.image').css('right'));
      //if (i==0){
           
      // }
        //var index = $(this).index();
        //e.preventDefault();
        
    
    $rightScroll.on('click', function(e){
        leftPosition += 800;
        $('.image-animated').css({
          left: leftPosition + 'px'
      });
    });  
}); 
      //$(Document).attr('image-animated') 
      //$slider.addClass('image-right');
      //console.log($slider);
    /* $slider.animate({
         left: '800px'
      }, 1500);
      console.log($('.image').css('right'));*/
       //e.preventDefault();
        
    
    
   
 /*   $tabs.on('click', function(e){
        var index = $(this).index();
        //e.preventDefault();
        $tabs.removeAttr('id');
        $tabsContent.removeAttr('id');
        $tabs.eq(index).attr('id', 'active-tab');
        $tabsContent.eq(index).attr('id', 'active-text');
    });
    
   $tabs.hover(
        function(){
            $(this).toggleClass('tabs-hover', true);
        },
        function(){
            $(this).toggleClass('tabs-hover', false);
        }); */