import React from "react";

const Users = () => {

    const [stdName,setStdName] = React.useState("");
    const [stdRollNo,setStdRollNo] = React.useState("");

    const [stdList,setStdList]= React.useState([]);

    const handleName=(event)=>{
        console.log(event.target.value);
        setStdName(event.target.value);
    }
    const handleRollNo=(event)=>{
        setStdRollNo(event.target.value)
    }
   const handleSubmit=()=>{
    const temp={
        name:stdName,
        rollNo:stdRollNo
    };
    let currentList=[...stdList];
    currentList.push(temp);
    setStdList(currentList);
   }
    return <div>
        <form >
            <div>
                <label>Name : </label>
                <input type="text" onChange={handleName} value={stdName} name="name" />
            </div>
            <div>
                <label>Roll number : </label>
                <input type="text" onChange={handleRollNo} value={stdRollNo} name="rollNo" />
            </div>
            <div>
                <button type="button" onClick={handleSubmit}> Submit</button>
            </div>
        </form>
        <table border={1} width={"400px"} >
            <thead>
                <tr>
                    <th>Serial</th>
                    <th>Name</th>
                    <th>Roll No</th>
                </tr>
            </thead>
            <tbody>
                {stdList.map((data,index)=>{
                    return <tr key={index}>
                        <td>{index+1}</td>
                        <td >{data.name}</td>
                        <td>{data.rollNo}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>

}


export default Users;
