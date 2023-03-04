import React, { useState } from 'react'
import "./App.css"

import { useSelector,useDispatch } from 'react-redux';

const App = () => {

  const dispatch=useDispatch();

  const userList = useSelector((state)=>state.users.value);

  console.log(userList);



  //name -> state
  //setName -> Method 
  const [name, setName] = useState("");

  const [username,setUserName] = useState("");


  return (
    <>

    <div className='App'>

    <div className='addUser'>

    <input type="text" placeholder='Enter your name : ' onChange={(e)=>{setName(e.target.value)}} />

    <input type="text" placeholder='Enter your user name : ' onChange={(e)=>{setUserName(e.target.value)}} />
    

    </div>

    <div className='displayUsers'>

    {
      userList.map((u)=>{
        return(
          <div>
            <h1>{u.name}</h1>
            <h1>{u.username}</h1>
          </div>
        )
      })
    }






    </div>






    </div>

    </>
  )
}

export default App