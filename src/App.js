import logo from './logo.svg';
import './App.css';
import Sample from "./FirstCmp"
import Header from './components/Header';
import LeftBar from './components/LeftBar';
import Content from './components/Content';
import React from 'react';
import Users from './components/Users';

function App() {
  const [testTitle,setTestTitile] = React.useState("");

  const handleHeaderClicked=()=>{
    setTestTitile("Header clicked");
  }

  return (
    <div className="App" >
        <Header 
          testName={"AB"}
          sampleName={"XYZ"}

          onClickOnHeader={handleHeaderClicked}

         />
        <main className='main-container'>
            <LeftBar />
            {/* <Content title={testTitle} /> */}
            <Users/>
        </main>
    </div>
  );
}

export default App;
