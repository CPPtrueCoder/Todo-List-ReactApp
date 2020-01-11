import React,{Component} from "react";
import './todo-list-item.css'
export  default class TodoListItem extends Component {
    state={
        done:false,
        important:false
    };
    onLabelClick =()=>{
        this.setState((state)=>{
            return{
                done:!state.done,

            }
        });};
    onMarkImportant=()=>{
      this.setState((state)=>{
        return{
            important:!state.important
        }  ;
      });
    };

    render() {
        {  const {label,onDeleted,onToggleDone,onToggleImportant}=this.props;
            const {done,important}=this.state;
            let classNames="todo-list-item";
            if (done){
                classNames+=" done";
            }
            if (important){
                classNames+=' important';
            }
            return (
                <span className={classNames}>
      <span
          className="todo-list-item-label"
          onClick={onToggleDone}>
        {label}
      </span>

      <button type="button" onClick={onToggleImportant}
              className="btn btn-outline-success btn-sm float-right">
        <i className="fa fa-exclamation" />
      </button>

      <button type="button"
              onClick={onDeleted}
              className="btn btn-outline-danger btn-sm float-right">
        <i className="fa fa-trash-o" />
      </button>
    </span>
            );
        };
    }

}

