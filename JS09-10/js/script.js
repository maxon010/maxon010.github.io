$(function (){
   
    $('.jcarousel').jcarousel();
   
    $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .jcarouselPagination();
    
    $('.jcarousel-prev').jcarouselControl({
        target: '-=1'
    });

    $('.jcarousel-next').jcarouselControl({
        target: '+=1'
    });
    $('form').mfs({
    'autoWidth' : true
    });

      
    
    //menu
    function stop(){
        $('.submenu').stop(true, true);
    }
    
    $('.dropdown').hover(function(){
      $(this).children('.submenu').slideDown(500,stop()); 
     }, function(){
        $(this).children('.submenu').slideUp(500,stop()); 
    });

    //menu color

    $('.submenu').hover(
    function (){
        $('.submenu').animate ({backgroundColor:"#32BCE1"}, 500);
    },
    function(){
         $('.submenu').animate ({backgroundColor:"#28A2AF"}, 500);
    });

}); 
  