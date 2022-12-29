// var mongoose = require('mongoose');
import mongoose from "mongoose";
var Schema = mongoose.Schema;

const idxSchema = new Schema({
    
    IDX_INDEX_ID:{
        type:String,
    },
    IDX_DATE_TIME:{
        type:Date,
    },
    IDX_CAPITAL_VALUE:{
        type:Number,
    },
    IDX_DEVIATION:{
        type:Number,
    },
    IDX_PERCENTAGE_DEVIATION:{
        type:Number,
    }

});
export default mongoose.models.idxs || mongoose.model('idxs', idxSchema);
// export default db.model('idx', idxSchema);