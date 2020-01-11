import React from "react";
import ReactDOM from 'react-dom';


import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import "./app.css"


const  App= ()=>{
    const  todoData=[{label:'Drink coffee',important:false,id:1},
        {label:'Make Awesome App',important:true ,id:2},
        {label:'Have a lunch',important:false , id:3}];

    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;
    return (
        <div className="todo-app">
            <AppHeader  toDo={todoCount} done={doneCount}/>
            <div className="top-panel">
                <SearchPanel/>
                <ItemStatusFilter/>
            </div>
            <TodoList todos={todoData}/>
        </div>);
};


export default App