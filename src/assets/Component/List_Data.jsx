import React from 'react'
import { MdDelete, MdBookmarkAdded, MdOutlinePlaylistAddCheck  } from "react-icons/md";
export const List_Data = ({ todoList, setTodoList }) => {

  function handleOneDelete(liindex) {
    setTodoList((prev) => prev.filter((ele, index) => ele.content !== liindex)
    )
  }
  function handleCompleted(value) {
    setTodoList((prev) =>
      prev.map((item) =>
        item.content === value
          ? { ...item, checked: true }
          : item
      )
    );

  }

  return (
    <section className='list-data'>
      <ul>
        {
          todoList.map((curEle, index) => {
            return <li className={`List-data ${curEle.checked == true ? 'true' : ''}`} key={curEle.id}><span >{curEle.content}</span>
              <button>{!curEle.checked ?(<MdBookmarkAdded onClick={() => { handleCompleted(curEle.content) }} className='done-icon' />) :(<MdOutlinePlaylistAddCheck className='text-xl'/>)}</button>
              <button onClick={() => { handleOneDelete(curEle.content) }}>
                <MdDelete className='delete-icon' />
              </button></li>

          })
        }
      </ul>
    </section>
  )
}


