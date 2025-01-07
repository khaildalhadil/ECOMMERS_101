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
    const {name, urlIamge, price} = req.body;
    
    const newItem = await Items.create({
      name, 
      urlIamge,
      price
    })
  
    await newItem.save();

    res.status(201).json({
      status: 'success',
      message: newItem
    })

  } catch(err) {
    res.status(500).json({
      status: 'fall',
      message: err.message,
      allErro: err,
    })
  }
}

export const removeItem = async(req, res, next) => {
  try {
    const idItemToRemove = req.params.id;
    console.log(idItemToRemove)
    const deletedItem = await Items.findByIdAndDelete(idItemToRemove);
    
    if(!deletedItem) return res.status(404).json({message: "you don't have this item "})
    res.status(204).json({
    status: 'success',
    data: deletedItem,
    message: 'deleted'
});

  } catch(err) {
    res.status(500).json({
      status: 'fall',
      message: err.message,
      allMessage: err
    })
  }
  
}

export const updateItem = async(req, res, next) => {
  
  try {
    const id = req.params.id;
    console.log(id);
    const {name, price ,urlIamge} = req.body;

    const updateItem = await Items.findByIdAndUpdate(id, 
    {
      name,
      urlIamge,
      price
    },
    {new: true}
  )

    if(!updateItem) return res.status(404).json({message: "you don't have this item "})
    res.status(200).json({message: "Hello FrontEnd the best library in the word is react ",updateItem});
  } catch(err) {
    res.status(500).json({
      status: 'fall',
      message: err.message,
      allMessage: err
    })
  }
}