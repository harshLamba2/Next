"use client";

import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";



// import React from "react";

// import Link from "next/link";

// export default

//  function TopicList(prop:{data:{
//     _id: string;
//     title: string;
//     discription: string;
//   }}){

//     console.log(prop.data.discription, ';;;;;;')

//     return (
// <div className="p-2 border-2 mt-2">
// <div className="flex justify-between">
// <span className="text-lg font-semibold">{prop.data.title}</span>  
//     <span>
//         <button className="bg-red-500 hover:bg-red-600 text-white font-bold text-sm rounded-md px-2 py-1">Delete</button>
//         <Link href={'/editTopic/123'}><button className="bg-blue-500 hover:bg-blue-600 text-white font-bold text-sm rounded-md px-2 py-1 ml-2" >Edit</button></Link>
//     </span>
// </div>
// <p>{prop.data.discription}</p>
// </div>
// )
// }



// Ensure to import necessary modules (React, Link) at the top

interface Topic {
    _id: string;
    title: string;
    discription: string;
  }
  
  interface TopicListProps {
    data: Topic;
    whenDelete: (success: boolean) => void;
  }
  
  const TopicList: React.FC<TopicListProps> = ({ data, whenDelete }) => {
    
    const { _id, title, discription } = data;
    // function TopicList(prop:{data:{
    //     _id: string;
    //     title: string;
    //     discription: string;
    // }}){}
    // console.log(prop.data.discription)


const deleteTopic=()=>{
  axios.delete('/api/topics?id='+_id)
  .then(res=>{
    whenDelete(true);
  }).catch(err=>{
    console.log(err);
  })
}
  
    return (
      <div className="p-2 border-2 mt-2">
        <div className="flex justify-between">
          <span className="text-lg font-semibold">{title}</span>
          <span>
            <button className="bg-red-500 hover:bg-red-600 text-white font-bold text-sm rounded-md px-2 py-1" onClick={deleteTopic}>Delete</button>

            <Link href={`/editTopic/${_id}`}>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold text-sm rounded-md px-2 py-1 ml-2">Edit</button>
            </Link>
          </span>
        </div>
        <p>{discription}</p>
      </div>
    );
  };
  
  export default TopicList;
  