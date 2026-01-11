import React from 'react'
import { useState } from 'react'
import "./Todo.css"

import { Inputs } from './Inputs';
import { List_Data } from './List_Data';
import { Headings } from './headings';
import {DeleteAll} from './DeleteAll';

const localData = "reactData"
const handlelocalData=()=>{
     const rawData = localStorage.getItem(localData) ;
        if(!rawData) return [];
        return JSON.parse(rawData);

}
export const Todo = () => {
   
    const [todoList, setTodoList] = useState(()=>{
       return handlelocalData();

    });
    // const [placeholder, setPlaceholder] = useState("");

    localStorage.setItem(localData,JSON.stringify(todoList))

    return (
        <section className='todo-container'>
            <Headings/>
            <Inputs todoList ={todoList}  setTodoList={setTodoList}/>
            <List_Data todoList ={todoList}  setTodoList={setTodoList}/>
           <DeleteAll todoList ={todoList}  setTodoList={setTodoList}/>
        </section>

    )
}

