const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
  id:{
    type:String,
    required:true
},
name:{
    type:String,
    required:true
},
source:{
    type:String,
    required:true
},
preptime:{
    type:Number,
    required:true

},
waittime:{
    type:Number,
    required:true
},
cooktime:{
    type:Number,
    required:true
},
servings:{
    type:Number,
    required:true
},
comments:{
    type:String,
    required:true
},
calories:{
    type:Number,
    required:true
},
fat:{
    type:Number,
    required:true
},
satfat:{
    type:Number,
    required:true
},
carbs:{
    type:Number,
    required:true
},
fibers:{
    type:Number,
    required:true
},
sugar:{
    type:Number,
    required:true
},
protein:{
    type:Number,
    required:true
},
instructions:{
    type:String,
    required:true
},
ingredients:{
    type:Array,
    required:true
},
tags:{
    type:Array,
    required:true

}
})

module.exports = mongoose.model('Recipe', recipeSchema)