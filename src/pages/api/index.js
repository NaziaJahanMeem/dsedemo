// import nc from "next-connect";
import connectDb from '../../../db_connect/connectDb';
import clientPromise from '../../../lib/mongodb';
import TrdModel from "../../../models/trd";
//import SectorModel from "../../../models/sector";
import ManModel from "../../../models/man"
import MkistatModel from '../../../models/mkistat';

import IdxModel from '../../../models/idx';
import NextCors from 'nextjs-cors';

connectDb();


async function handler(req, res){
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
 });


  if (req.method === 'GET') 
  {
    try{
        const users = await MkistatModel.find({$and:[{MKISTAT_INSTRUMENT_CODE: 'AAMRANET'},{MKISTAT_CLOSE_PRICE: {$gt:0}}]}).select({ "MKISTAT_OPEN_PRICE": 1,"MKISTAT_HIGH_PRICE":1,"MKISTAT_LOW_PRICE":1,"MKISTAT_CLOSE_PRICE":1, "MKISTAT_LM_DATE_TIME": 1, "_id": 0});
        // console.log(users);
        // res.send(users);
        //console.log(users)
        const anounce=await ManModel.find({MAN_ANNOUNCEMENT_PREFIX:'AAMRANET'}).select({"MAN_ANNOUNCEMENT_DATE_TIME":1,"MAN_ANNOUNCEMENT":1,"_id":0}).sort({ length: -1 }).limit(4);
        //console.log(anounce)
        let arr = users.map((item)=> {
          // console.log("dateTime.......",);   //-------------------------------Separating Date only from dateTime.
          let dateTime =item.MKISTAT_LM_DATE_TIME.toISOString();
          let date = dateTime.substring(0, 10);
          // console.log("dateTime.......",date); //--------------------------------
          return{x:date, y:[item.MKISTAT_OPEN_PRICE, item.MKISTAT_HIGH_PRICE, item.MKISTAT_LOW_PRICE, item.MKISTAT_CLOSE_PRICE]}
        }
          );
        let man=anounce.map((items)=>{
          //let date2 =new Date(items.MAN_ANNOUNCEMENT_DATE_TIME);
          //let date2=items.MAN_ANNOUNCEMENT_DATE_TIME.substring(0,10);
         
          return{an:items.MAN_ANNOUNCEMENT}
        });

          //console.log(man);
          //console.log(arr)
          var data={
            arrs:arr,
            mans:man
          }
        res.send(arr)
    }catch(error){
      console.log(error);
    }
  };
  //=======================================
  

  if (req.method === 'POST') 
  {
    const{TRD_SNO, TRD_TOTAL_TRADES, TRD_TOTAL_VOLUME, TRD_TOTAL_VALUE, TRD_LM_DATE_TIME}= req.body
    const newUser = new TrdModel({TRD_SNO, TRD_TOTAL_TRADES, TRD_TOTAL_VOLUME, TRD_TOTAL_VALUE, TRD_LM_DATE_TIME})
    try{
      await newUser.save()
      res.send("New User Created");
    }catch(error){
      console.log(error);
    }
  }
};

export default handler;