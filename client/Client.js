successFunction = function(){
    var item = Session.get('item');

    Cats.update(item._id, {$set: {purchased: true, ownerId: item.ownerId}});

    Session.set('charge', {status:"n/a"})
};

Template.listCats.helpers({
    cats:function(){
        return Cats.find({});
    }
});