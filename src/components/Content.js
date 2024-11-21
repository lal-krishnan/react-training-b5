import React from "react";
import Inbox from "./Inbox";

const userArr=[
    {
        name:"A",
        rollNo:10
    },
    {
        name:"B",
        rollNo:11
    },{
        name:"C",
        rollNo:12
    },{
        name:"D",
        rollNo:13
    }
]

function Content(props){

    const [count,setCount] = React.useState(0);
    const handleIncrement=()=>{
        setCount(count+1);
    }
    const handleDec=()=>{
        setCount(count-1); 
    }
    const handleClick=(data)=>{
        alert(data.name)
        alert(data.rollNo)
    }
    return <div>

        <h1>{props.title}</h1>
        <h1 style={{textAlign:"center"}}>Count :: {count}</h1>
        <button onClick={handleIncrement} >+</button>
        <button onClick={handleDec}>-</button>
        {count>1 ? <Inbox myCount={count} /> : "Empty"}

        <hr/>

        <table border={1} width={"400px"} >
            <thead>
                <tr>
                    <th>Serial</th>
                    <th>Name</th>
                    <th>Roll No</th>
                </tr>
            </thead>
            <tbody>
                {userArr.map((data,index)=>{
                    return <tr key={index}>
                        <td>{index+1}</td>
                        <td onClick={()=>handleClick(data)}>{data.name}</td>
                        <td>{data.rollNo}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
}

export default Content;