function Header(props){
    
    console.log(props)
    const {testName,sampleName} = props;
    const logoutHandler=()=>{
        alert("Logout clicked");
    }
    return <div id="header">
        Gmail : {testName} == {sampleName} 
           <button onClick={logoutHandler}>Logout</button>
           <button onClick={props.onClickOnHeader}>Header event</button>
        </div>
}

export default Header;