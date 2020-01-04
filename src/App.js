import React, {useEffect,useState,useRef} from 'react';
import logo from './logo.svg';
import './App.css';


function App() {

  //this differes from a counter becasuse we are dealing with a mutable date object
  //usualy a functional component closes over its own state and props which coud lead to stale setInterval calls
  //here we are not referencing state (a useState value) from a pervious rendering in our setInterval to build our new date
  //this is why it continues to work
  //set state probably doesn't mutate, but copy

  const date = new Date();
  const [hour,setHour] = useState(date.getHours());
  const [minute,setMinute] = useState(date.getMinutes());
  const [second,setSeconds] = useState(date.getSeconds());


  function setNewTime(){

      let newDate = new Date();
      setHour(newDate.getHours());
      setMinute(newDate.getMinutes());
      setSeconds(newDate.getSeconds());


  }

  useEffect(() =>{

    let interval = setInterval(setNewTime,1000);

    return () => {
      clearInterval(interval);
    }

  },[])


  return (
    <div className="App">
      <div className='Clock'>
        <div className='display'>{hour}</div>
        <div className='display'>{minute}</div>
        <div className='display'>{second}</div>
      </div>
      
    </div>
  );
}

export default App;
