import mongoose from 'mongoose';

const ProdcutsSchmma = new mongoose.Schema({
  name: {
    type: String,
    // required: [true, "name is required"],
  },
  urlIamge: {
    type: String,
    // required: true,
  },
  price: {
    type: String,
    // required: true,
  }
}) 

const Items = mongoose.model('Items', ProdcutsSchmma);

export default Items;


