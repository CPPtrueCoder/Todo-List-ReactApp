import React, {Component} from "react";


export  default class  Adder extends Component{
    onLabelChange=(e)=>{
        console.log(".");
    }
    render() {
        return(
        <form className="adder d-flex mt-1">
            <input type="text"
            className="form-control mr-1"
            onChange={this.onLabelChange}
            placeholder="What needs to be done"/>
            <button className="btn btn-outline-primary btn-md float-right "
           onClick={()=>this.props.onItemAdded("Going to concert")} >
                <i className="fa fa-plus"> </i></button>
        </form>
        )}

}