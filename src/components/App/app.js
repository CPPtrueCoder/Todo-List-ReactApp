import React, {Component} from "react";


import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import "./app.css"


export  default  class App extends Component{

state ={
   todoData:[{label:'Drink coffee',important:false,id:1},
        {label:'Make Awesome App',important:true ,id:2},
        {label:'Have a lunch',important:false , id:3}]
};
    deleteItem=(id)=>{
    this.setState(({todoData})=>{
    const idx=todoData.findIndex((el)=>el.id===id);
    const before =todoData.slice(0,idx);
    const after=todoData.slice(idx+1);
    const newState=[...before,...after];
    return{
        todoData:newState
    }
    });
    };
render() {
    return (
        <div className="todo-app">
            <AppHeader  toDo={1} done={3}/>
            <div className="top-panel">
                <SearchPanel/>
                <ItemStatusFilter/>
            </div>
            <TodoList todos={this.state.todoData}
            onDeleted={this.deleteItem}/>
        </div>);
}
};


