// var mongoose = require('mongoose');
import mongoose from "mongoose";
var Schema = mongoose.Schema;

const manSchema = new Schema({
    MAN_ANNOUNCEMENT_DATE_TIME :{
        type : String,
    },

    MAN_ANNOUNCEMENT_PREFIX :{
        type : String,
    },

    MAN_ANNOUNCEMENT :{
        type : String,
    },

    MAN_EXPIRY_DATE :{
        type : String,  /*Need to use type Date.......Custom date fromate needed */
    },
  
});
export default mongoose.models.mans || mongoose.model('mans', manSchema);
