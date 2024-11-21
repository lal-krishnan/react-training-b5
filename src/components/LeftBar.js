const username="Lal";

const userList=["A","b","c","d"];

const data=[<li>X</li>,
                <li>y</li>,
                <li>X</li>];

function LeftBar(){
    return <div className="left-bar">
            {username}
            <ul>
                {userList.map((data,index)=>{
                    return <li key={index} >{data}</li>
                })}
            </ul>
    </div>
}

export default LeftBar;