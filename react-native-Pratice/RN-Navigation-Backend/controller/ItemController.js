const ItemModel = require("../model/ItemModel");

exports.getAllItem = async (req, res, next) => {
  try {
    const selectedItem = await ItemModel.findAll();
    return res.json({message : 'Success get All Item', data : selectedItem});
  } catch (error) {
    return next(error)
  }
};

exports.postOneItem = async (req, res, next)=>{
    console.log('Post Trigger')
    const postItem = req.body
    console.log(postItem.description)
    const result =  await ItemModel.create(postItem);

    if(!result){
        const error = new Error();
        error.message = 'Fail',
        error.status = false
        return next(error)
    }

    return res.json({message : 'Success Post Item', data : result})
}

exports.deleteItem = async (req, res, next) =>{
    const id = req.body.id;

    const result = await ItemModel.findByPk(id);

    const destroyResult = result.destroy();

    return res.json({message : 'delete Success', data : destroyResult});

    
}
