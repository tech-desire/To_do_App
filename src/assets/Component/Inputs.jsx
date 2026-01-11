
import { useState } from 'react'
import { RiStickyNoteAddFill } from "react-icons/ri";

export function Inputs({ todoList, setTodoList }) {
    const [inputData, setInputData] = useState({id:"",content:"",checked:false});
    const [fade, setFade] = useState(false);


    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!inputData.content) return;
        if (todoList.find((curEle)=>curEle.content===inputData.content)) { setInputData({content:""}); return }


        setTodoList((prev) => [...prev, inputData])
        setInputData({content:""});
     
    }
    const handleInput = (e) => {
        const value = e.target.value;
        setInputData({ id: value, content: value, checked: false });


    }

    return (
        <section className='form'>
            <form action="" onSubmit={handleFormSubmit}>
                <div className='div-input'>
                    <input type="text" className={`todo-input ${fade ? "fade-out" : ""}`} autoComplete='off'

                        value={inputData.content}
                        onChange={(e) => { handleInput(e) }}


                    />
                    <button type='sumit' className='todo-btn'>
                        <RiStickyNoteAddFill />
                    </button>
                </div>

            </form>

        </section>


    )
}