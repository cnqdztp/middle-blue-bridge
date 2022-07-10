'use strict';
const cloudbase = require('@cloudbase/node-sdk')

const app = cloudbase.init({
  env: "hello-cloudbase-5gt2hqaddac2d0bc"
})

// 1. 获取数据库引用
var db = app.database();
const _ = db.command;


exports.main = async (event, context) => {
    var user_uid = event.user_uid;
    var reply_post_id = event.reply_post_id;
    var img_url = event.img_url;
    var text = event.text;

    if(event.action_type=="REPLY"){
        return reply(user_uid,reply_post_id,img_url,text)
    }

    if(event.action_type=="NEW"){
        return post(user_uid,img_url,text)
    }
  // 2. 构造查询语句
  

  return "PROBLEM_OCCURED_CHECK_LOGS"
}

 async function reply(user_uid,reply_post_id,img_url,text){
    var timestamp = new Date().getTime();
     var newNode = {
            img: img_url,
            post_user_uid: user_uid,
            text: text,
            timestamp: timestamp
     }

    const res = await db
    .collection("database")
    .doc(reply_post_id)
    .update({
      content: _.push(newNode),
      lastest_timestamp:timestamp
    });



    return res;
}

 async function post(user_uid,img_url,text){
     var timestamp = new Date().getTime();
     var newNode = {
            img: img_url,
            post_user_uid: user_uid,
            text: text,
            timestamp: timestamp
     }

     const res = await db.collection('database')
    .add({
      content: [
          newNode
      ],
      lastest_timestamp:timestamp
    })

    return res;
}