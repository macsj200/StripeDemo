//Set up routes
Router.map(function(){
    this.route('home', {path:'/'});
});

Router.map(function(){
    this.route('insertCreditCard', {path:'/editPayment'});
});

Router.route('/cats/:_id', function () {
    var cat = Cats.findOne({_id: this.params._id});
    this.render('purchaseCat', {data: cat});
});