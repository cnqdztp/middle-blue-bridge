import React from 'react'
import cloudbase from "@cloudbase/js-sdk";


export default function Playground() {
  var userInfo = cloudbase.auth()
  .getCurrenUser();
  console.log(userInfo);
  return (
    <div>
        <h1>  </h1>
        
    </div>
  )
}
