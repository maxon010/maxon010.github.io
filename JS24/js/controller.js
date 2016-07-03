define(
'controller',
['jquery',
 'model',
 'view'],
function (){
    return {
        //console.log(view);
    controller: function (model, view) {
    
    var self = this;
      
    view.elements.addBtn.on('click', addItem);
    view.elements.updBtn.on('click', updateItem);
    view.elements.listContainer.on('click','.item-delete', removeItem);
    view.elements.listContainer.on('click','.item-edit', editItem);
    
    function addItem() {
        var newItem = view.elements.input.val();
        model.addItem(newItem);
        view.renderList(model.data);
        view.elements.input.val('');
    }
    
    function removeItem(){
        var item = $(this).attr('data-value');
        console.log(item);
        model.removeItem(item);
        view.elements.input.val('');
        view.renderList(model.data);
         view.elements.updBtn.css('display','none');
        view.elements.addBtn.css('display','inline-block');
    }
    
    function editItem(){
            var item = $(this).attr('data-value');
            indexEdit = model.data.indexOf(item);
         console.log(indexEdit);
            //model.editItem(item)    
        view.elements.input.val(item);
        console.log (view.elements.input.val());
        view.renderList(model.data);
        view.elements.updBtn.css('display','inline-block');
        view.elements.addBtn.css('display','none');
    }
    function updateItem(){
            var item = $(this).attr('data-value');
            //model.editItem(item)    
        model.data[indexEdit] = view.elements.input.val();
        view.renderList(model.data);
        view.elements.updBtn.css('display','none');
        view.elements.addBtn.css('display','inline-block');
        view.elements.input.val('');
    } 
        
    }
    };
});
