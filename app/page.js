"use client"
import React, { useState } from 'react'
import Header from "@/components/Header"

const page = () => {
  const [title,settitle] = useState("")
  const [desc,setdesc] = useState("")
  const [maintask,setMainTask] = useState([])

  const submitHandler = (e)=>{
    e.preventDefault() //it stops the form to get submit and prevents the page to load 
    setMainTask([...maintask,{title,desc}])
    settitle("")
    setdesc("")
  };
  const deleteHandler = (i)=>{
    let copytask = [...maintask]
    copytask.splice(i,1) // to remove i'th element
    setMainTask(copytask)
  }
  let renderTask = <h2>No Task Available</h2>
if (maintask.length > 0){
  renderTask = maintask.map((t,i)=>{
    return( 
      <li key={i} className='flex items-center justify-between'>
      <div className='flex justify-between mb-5 w-2/3'>
      <h5 className='text-2xl font-bold'>{t.title}</h5>
      <h5 className='text-lg font-normal'>{t.desc}</h5>
      </div>
      <button onClick={()=>{
        deleteHandler(i)
      }} className='bg-red-400 text-white rounded-xl font-bold px-4 py-2'>Delete</button>
      </li>
    )
  })
}

  return (
      <>
      <Header/>
      <form onSubmit={submitHandler} className='h-36 flex justify-center items-center'>
        <input type="text" className = "text-2xl border-zinc-800 border-4 m-4 px-4 py-2" placeholder="Enter Task Here" value={title} onChange={(e)=>{
         settitle(e.target.value)
        }}/>
        <input type="text" className = "text-2xl border-zinc-800 border-4 m-4 px-4 py-2" placeholder="Enter Description Here" value={desc} onChange={(e)=>{
          setdesc(e.target.value)
        }}/>
        <button className="px-4 py-2 text-2xl bg-black text-white rounded-xl mx-5">Add Task</button>
      </form>
      <hr/>
      <div className = 'p-8 bg-slate-200 '>
        <ul>
          {renderTask}
        </ul>
      </div>
      </>
  )
}

export default page
