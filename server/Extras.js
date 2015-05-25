var done = function(err, result){
    console.log(err,result);
};

Meteor.methods({
    chargeCard:function(argObject){
        var Stripe = StripeAPI(Meteor.settings.stripe.secretKey);

        var charge = Async.runSync(function(done){
            Stripe.charges.create({
                amount: 1000,
                currency: 'usd',
                customer: argObject.stripeId
            },done);
        }).result;

        return charge;

    },
    createCustomer:function(argObject){
        var Stripe = StripeAPI(Meteor.settings.stripe.secretKey);

        var customer = Async.runSync(function(done){
            Stripe.customers.create({
                source:argObject.stripeToken
            }, done);
        }).result;

        return customer;
    }
});

populateDatabase = function(){
    if(Cats.find().count() === 0){
        [
            {
                name:"Tabbywabs",
                price:13,
                color:"Orange",
                image:"http://placekitten.com/g/200/300"
            },
            {
                name:"Sammy",
                price:18,
                color:"Pink",
                image:"http://placekitten.com/g/200/300"
            },
            {
                name:"Toby",
                price:13,
                color:"Red",
                image:"http://placekitten.com/g/200/300"
            },
            {
                name:"Samantha",
                price:16,
                color:"Blue",
                image:"http://placekitten.com/g/200/300"
            }
        ].forEach(function (cat) {
                Cats.insert({
                    name: cat.name,
                    color: cat.color,
                    price: cat.price,
                    image:cat.image,
                    createdAt: new Date()
                });
            });

    }
};