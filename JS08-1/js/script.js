$(function (){
    
    var $tabs = $('.tabs');
    var $tabsContent = $('.tabs-text');
    
   $tabs.on('click', function(e){
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
        });
}); 