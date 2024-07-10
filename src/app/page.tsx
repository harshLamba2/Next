"use client"
import TopicList from "../components/topicList";

import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {

  const [topics, setTopics]=useState([]);

useEffect(()=>{
  axios.get('/api/topics')
  .then(res=>{
    setTopics(res.data.data.allTopics)
  }).catch(err=>{
    alert('error');
    console.log(err);
  })
}, []);


  return (
<>
{topics.map((element, index)=>(
<TopicList key={'topics'+index} data={element}/>
))
}
</>

)
}
