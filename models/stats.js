// var mongoose = require('mongoose');
import mongoose from "mongoose";
var Schema = mongoose.Schema;

const statsSchema = new Schema({

  STATS_INSTRUMENT_CODE:{
    type: String,
  },
  STATS_BUYPRICE:{
    type: Number,
  },
  STATS_BUYVOLUME:{
    type: Number,
  },
  STATS_BUYDVPVOLUME:{
  type: Number,
  },
  STATS_SELLPRICE:{
    type: Number,
  },
  STATS_SELLVOLUME:{
    type: Number,
  },
  STATS_SELLDVPVOLUME:{
    type: Number,
  },
  TRD_DATE:{
    type: Date,
  }
});

export default mongoose.models.stats || mongoose.model('stats', statsSchema);
// export default db.model('STATS', statsSchema);