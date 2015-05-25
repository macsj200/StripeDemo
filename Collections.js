//Set up collection
Cats = new Mongo.Collection('cats');

Cats.attachSchema(new SimpleSchema({
  name:{
    type: String,
    label: "Name"
  },
  price:{
    type: Number,
    label: "Price"
  },
  color:{
    type: String,
    label: "Color"
  },
  createdAt:{
    type: Date,
    label: "Name"
  },
  image:{
    type:String
  }
}));