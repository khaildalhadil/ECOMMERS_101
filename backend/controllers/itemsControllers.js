import Items from "../models/prodcutsSchmma.js";

export const getAllItems = async(req, res, next) => {

  try {

    const allItems = await Items.find();

    res.json({
      message: 'success',
      itemsNumber: allItems.length,
      data: allItems
    })

  } catch(err) {
    res.json({statis: 'full', message: err.message })
  }

}

export const addItem = async(req, res, next) => {
  try {

    const {itemName, fullName, dec, itemImage, price} = req.body;
  
    const newItem = await Items.create({
      itemName, 
      fullName, 
      dec, 
      itemImage, 
      price
    })
  
    await newItem.save();
    res.status(200).json({
      status: 'success',
      newItem
    })
  } catch(err) {
    res.status(500).json({
      status: 'fall',
      message: err.message,
    })
  }
}

