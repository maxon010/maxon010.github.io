requirejs.config({
    paths:{
        'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery'
    },
    shim: {
        'jquery': {
            exports: 'jquery'
        }
    }
});
require(
[
 'jquery',
 'tmpl',
 'model',
 'view',
 'controller'
],
function ($, tmpl, model, view, controller){
   

  
    var firstToDoList = ['learn 1','learn 2','learn 3'];
    var model = new model.model(firstToDoList);
    var view = new view.view(model);
    
    var controller = new controller.controller(model, view);
    
}
);