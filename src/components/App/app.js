import React, {Component} from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import Adder from "../adder";
import "./app.css"


export default class App extends Component {

    maxId = 100;

    state = {
        todoData: [
          ],
        term:"",
        filter:'all'

    };
    createTodoItem(label){
    return{
        label,important:false,done:false , id:this.maxId++
    }
    }

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);

            const newTodoData = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ];

            return {
                todoData: newTodoData
            };
        });
    };

    addItem = (text) => {
        const  newItem=this.createTodoItem(text);

        this.setState(({todoData})=>{
            const newTodo=[...todoData,newItem];
            return{
                todoData:newTodo
            }
        })
        };

    onToggleImportant=(id)=>{
        this.setState(({todoData})=>{

            return{
                todoData:this.toggleProperty(todoData,id,"important")
            }
        });
    };
    toggleProperty(arr,id,propName){
        const idx = arr.findIndex((el) => el.id === id);
        const oldItem=arr[idx];
        const newItem ={...oldItem,[propName]:!oldItem[propName]};
      return [...arr.slice(0, idx),
              newItem,
              ...arr.slice(idx + 1)
          ];
    }
    onToggleDone=(id)=>{
        this.setState(({todoData})=>{

            return{
                todoData:this.toggleProperty(todoData,id,"done")
            }
        });

    };
    search(items,term){
        if (term.length===0){
            return items;
        }
      return   items.filter((item)=>{
            return item.label.toLowerCase().indexOf(term.toLowerCase())>-1;
        })
    };
    filter(items,filter){
        switch (filter) {
            case 'all':return items;
            case 'active':
                return items.filter((item)=>
                    !item.done);
            case 'done':
                return items.filter((item)=>item.done);
            default:
               return  items;

        }
    }
    onSearchChange=(term)=>{
        this.setState({term});
    };
    onFilterChange=(filter)=>{
        this.setState({filter});
    };
    render() {
        const {todoData,term,filter}=this.state;
        const visibleitems=this.filter(this.search(todoData,term),filter);
        const doneCount=todoData.filter((el)=>el.done).length;
        const doMore=todoData.filter((el)=>!el.done).length;
        return (
            <div className="todo-app">
                <AppHeader toDo={doMore} done={doneCount} />
                <div className="top-panel d-flex">
                    <SearchPanel onSearchChange={this.onSearchChange} />
                    <ItemStatusFilter
                        onFilterChange={this.onFilterChange}
                        filter={filter}/>
                </div>

                <TodoList
                    todos={visibleitems}
                    onDeleted={ this.deleteItem }
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}/>
            <Adder onItemAdded={this.addItem}/>
            </div>

        );
    }
};


