import React from "react";
class Inbox extends React.Component{
    constructor(props){
        super(props)
        console.log("I in Constructor");
    }
    componentDidMount(){
        console.log("I in componentDidMount");
    }
    componentDidUpdate(){
        console.log("I am in componentDidUpdate");
    }
    componentWillUnmount(){
        console.log("I am in componentWillUnmount qqqqqqq"); 
    }     
    render(){
        console.log("I am in Render");
        return <h1 style={{color:"red"}}>I am inbox :: {this.props.myCount}</h1>
    }
}
export default Inbox;