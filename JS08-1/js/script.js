$(function (){
    
    var $tabs = $('.Tabs');
    var $tabsContent = $('.TabsText');
    
    $tabs.on('click', function(e){
        var index = $(this).index();
        //e.preventDefault();
        $tabs.removeAttr('id');
        $tabsContent.removeAttr('id');
        $tabs.eq(index).attr('id', 'ActiveTab');
        $tabsContent.eq(index).attr('id', 'ActiveText');
         
    });
   /*$tabs.hover(
        function(){
            $(this).css('background', '#4FE163')
        },
        function(){
            if ($(this).attr('id') === 'ActiveTab') {
                $(this).css('background', 'white');
            } else {
                $(this).css('background', '#ddc');
                
            }
        });*/
}); 