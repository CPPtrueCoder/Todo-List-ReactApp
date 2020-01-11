import React, {Component} from "react";


export  default class  Adder extends Component{
    render() {
        return(
        <div className="adder">
            <button className="btn btn-outline-primary btn-sm float-right mt-1"
           onClick={()=>this.props.onItemAdded("Going to concert")} ><i className="fa fa-plus"> Add Item</i></button>
        </div>
        )}

}