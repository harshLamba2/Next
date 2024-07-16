"use client"
import TopicList from "../components/topicList";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {

const [render, setRender]=useState(1);

const [topics, setTopics]=useState([]);

useEffect(()=>{

  console.log(process.env.BASE_URI)
  axios.get('/api/topics')
  .then(res=>{
    setTopics(res.data.data.allTopics)
  }).catch(err=>{
    alert('error');
    console.log(err);
  })
}, [render]);

const handleDelete=(success:boolean)=>{
  if(success)
    toast.success('Topic Deleted Successfully')
    setRender(prevCount=> prevCount+1);
}


  return (
<>

<ToastContainer
  position="top-right"
  autoClose={3500}
  hideProgressBar={true}
  newestOnTop={false}
  pauseOnHover={true}
/>

{topics.map((element, index)=>(
<TopicList key={'topics'+index} data={element} whenDelete={handleDelete}/>
))
}
</>

)
}
