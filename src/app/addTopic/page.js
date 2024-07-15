"use client"

import { useState } from "react";
import { useRouter } from 'next/navigation'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from "axios";
    
export default function AddTopic(){
        
            const { push, replace} = useRouter();

            const [title, setTitle]=useState('');
            const [discription, setDiscription]=useState('');

            const [disableButton, setDisableButton]=useState(false);


            const addTopic=()=>{
                let newTopic={title, discription}
                axios.post('/api/topics', newTopic)
                .then(res=>{
                    replace('/')
                }).catch(err=>{
                    toast.error('Network Error')
                    console.log(err);
                })
            }

    return(
        <div className="mt-2">
        <ToastContainer 
            position="top-right"
            autoClose={3500}
            hideProgressBar={true}
            newestOnTop={false}
            pauseOnHover={true}
        />
   
        <input placeholder="Add Topic Title" className="w-full border p-2" value={title} onChange={(e)=>setTitle(e.currentTarget.value)}/>
        <input placeholder="Add Topic Discription" className="w-full border p-2 mt-4" value={discription}  onChange={(e)=>setDiscription(e.currentTarget.value)}/>

        <div className="flex justify-center mt-4">
            <button className="btn bg-slate-900 p-2 rounded-md font-bold text-white" onClick={addTopic}>Add Topic</button>
        </div>

        </div>
    )
}