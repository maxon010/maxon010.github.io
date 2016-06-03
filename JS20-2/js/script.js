$(function(){
    $.getJSON('data.json', function(data){
        var skills = _.sortBy(_.union(_.flatMap(data, 'skills')),_.toLower);
        console.log('Скилы (всего '+ skills.length +'): ',skills);
        
        var dataSort = _.sortBy(data, function(obj){
            return obj.friends.length;
        });
        var names = _.flatMap(dataSort, 'name');
        console.log ('Имена с возрастанием по кол-ву друзей:' + names);
        
        var friends = _.sortBy(_.union(_.map(_.flatMap(data, 'friends'),'name')));
        console.log('Друзья (всего '+ friends.length +'): ', friends);
    });
});