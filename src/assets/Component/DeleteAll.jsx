import React from 'react'
import { MdError } from "react-icons/md";
export const DeleteAll = ({ todoList, setTodoList }) => {
  function handleDeleteAll(e) {
    if (todoList.length === 0) return;
    setTodoList([]);
    // showTemporaryPlaceholder("Everything is deleted");

  }
  // const showTemporaryPlaceholder = (message) => {
  //     setPlaceholder(message);
  //     setFade(true);
  //    setTimeout(()=>{setPlaceholder(""); setFade(false)},2000)
  // };

  return (
    <button className={`Delete-all ${todoList.length === 0 ? "disable" : "enable"}`} onClick={(e) => handleDeleteAll(e)}>
      Clear all <MdError className='clear-all-icon'/>
    </button>
  )
}


