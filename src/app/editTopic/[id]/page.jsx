
"use client"

import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from "axios";

const EditTopic = ({params}) => {

    const { push, replace} = useRouter();

    const [discription, setDiscription]=useState('');
    const [title, setTitle]=useState('');

    const {id}= params;
    
    useEffect(()=>{
        axios.get('/api/topics/'+id)
        .then(res=>{
            setDiscription(res?.data?.data?.discription ?? '');
            setTitle(res?.data?.data?.title ?? '');
        }).catch(err=>{
            toast.error('Network Error')
            console.log(err)
        })
    }, []);


  const handleSubmit = () => {
    let updateData={discription, title}
    axios.put('/api/topics/'+id, updateData)
        .then(res=>{
            toast.success('Data Updated');
            setTimeout(()=>{
                // push('/'); //uses stacks
                // replace('/'); //to replace the page so it wont go back to the last page eer again
                setTimeout(()=>{
                    replace('/');
                }, 1300);
            }, 1300)
            
        }).catch(err=>{
            toast.error('Network Error');
            console.log(err)
        })
  };

  return (
    <div className="mt-2">
        <ToastContainer 
            position="top-right"
            autoClose={3500}
            hideProgressBar={true}
            newestOnTop={false}
            pauseOnHover={true}
        />
   
        <input placeholder="Add Topic Title" value={title} className="w-full border p-2" onChange={(e)=>setTitle(e.currentTarget.value)}/>
        <input placeholder="Add Topic Description" value={discription} className="w-full border p-2 mt-4"  onChange={(e)=>setDiscription(e.currentTarget.value)}/>

        <div className="flex justify-center mt-4">
          <button className="btn bg-slate-900 p-2 rounded-md font-bold text-white"
          onClick={handleSubmit}>
            Edit Topic
          </button>
        </div>
    </div>
  );
};

export default EditTopic;
