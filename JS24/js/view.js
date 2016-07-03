define(
'view',
['jquery',
'model',
'tmpl'],
 function () {
    return {
     view: function (model) {
        var self = this;
        var indexEdit;
    
        function init(){
            var wrapper = tmpl($('#wrapper-template').html());
            $('body').append(wrapper);
            self.elements = {
                input: $('.item-value'),
                addBtn: $('.item-add'),
                updBtn: $('.item-update'),
                listContainer: $('.item-list')
            };
            self.renderList(model.data);
        };
    
        self.renderList = function (data){
        
            var list  = tmpl($('#list-template').html(),{data: data});
            //console.log (list);
            self.elements.listContainer.html(list);
        };
        init();
    //return self.elements;
     }
     
     };
 });