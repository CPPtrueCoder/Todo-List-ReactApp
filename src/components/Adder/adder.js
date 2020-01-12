import React, {Component} from "react";


export  default class  Adder extends Component{
    state={
        label:""
    };


    onLabelChange=(e)=>{

        this.setState({
            label:e.target.value
        })
    };
    onSubmit=(e)=>{
        e.preventDefault();
       this.props.onItemAdded(this.state.label) ;
       this.setState({
           label:""
       })
    };
    render() {
        return(
        <form className="adder d-flex mt-1"
        onSubmit={this.onSubmit}>
            <input type="text"
            className="form-control mr-1"
            onChange={this.onLabelChange}
            placeholder="What needs to be done"
            value={this.state.label}/>
            <button className="btn btn-outline-primary btn-md float-right "
        >
                <i className="fa fa-plus"> </i></button>
        </form>
        )}

}