import React from 'react'
import { useState } from 'react'
export const Headings = () => {

    const [times,setTimes] = useState("")
      setInterval(()=>
        {
            const now = new Date();
            const formattedDate = now.toLocaleDateString('en-GB',{
              day:'numeric',
              month:"long",
              year:'numeric'
            });
            const formattedTime = now.toLocaleTimeString();
            setTimes(`${formattedDate} - ${formattedTime}`)
        },1000
      )




    return (
        <header>
            <h1>Todo List</h1>
            <p>{times}</p>
        </header>
    )
}


