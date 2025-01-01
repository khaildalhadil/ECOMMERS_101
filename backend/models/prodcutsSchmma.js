import mongoose from 'mongoose';

const ProdcutsSchmma = new mongoose.Schema({
  itemName: String,
  fullName: String,
  dec: String,
  itemImage: String,
  price: Number
}) 

const Items = mongoose.model('Items', ProdcutsSchmma);

export default Items;


