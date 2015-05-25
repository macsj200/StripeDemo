Template.purchaseCat.events({
    'submit form':function(event){
        clientCreateCustomer(event);

        return false;
    },
    'click .purchase':function(event){
        handlePurchase(event);

        if(Session.get('charge').status === "succeeded"){

        }

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