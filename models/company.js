// var mongoose = require('mongoose');
import mongoose from "mongoose";
var Schema = mongoose.Schema;

const companiesSchema = new Schema({
    
    id :{
        type : Number,
        index: true,
        unique: true
    },
    sector_id :{
        type : Number,
    },
    code :{
        type : String,
    },
    name :{
        type : String,
    },
    market_capitalization_mn :{
        type : Number,
    },
    created_at :{
        type : Date,
    },

    updated_at :{
        type : Date,
    },

});
export default mongoose.models.companies || mongoose.model('companies', companiesSchema);
// export default db.model('idx', idxSchema);