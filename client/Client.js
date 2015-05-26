Template.purchaseCat.events({
    'submit form':function(event){
        createCustomer(event);

        return false;
    },
    'click .purchase':function(event){
        createCharge(event);
        return false;
    }
});

Template.purchaseCat.helpers({
    charge:function(){
        return Session.get('charge');
    }
});

Template.listCats.helpers({
    cats:function(){
        return Cats.find({});
    }
});