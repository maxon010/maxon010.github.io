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
    
    //-----Accordion begin-----
    //Set default open/close settings
    $('.acc_container').hide(); //Hide/close all containers
    $('.acc_trigger:first').addClass('active').next().show(); //Add "active" class to first trigger, then show/open the immediate next container
 
    //On Click
    $('.acc_trigger').click(function(){
        if( $(this).next().is(':hidden') ) { //If immediate next container is closed...
            $('.acc_trigger').removeClass('active').next().slideUp(); //Remove all .acc_trigger classes and slide up the immediate next container
            $(this).toggleClass('active').next().slideDown(); //Add .acc_trigger class to clicked trigger and slide down the immediate next container
        }
        return false; //Prevent the browser jump to the link anchor
    });
    //-----Accordion end-----
    
    var $menu = $('.menu li');
    $menu.on('click', function(){
        var index = $(this).index();
        //e.preventDefault();
        $menu.removeAttr('id');
        $menu.eq(index).attr('id', 'active-menu');
       
    });
}); 
  