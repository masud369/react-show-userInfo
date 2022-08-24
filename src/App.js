
import './App.css';
import { useInsertionEffect, useState } from 'react';
import userData from './Components/Userinfo/Userinfo.json';
import Usersinfo from './Components/Userinfo/Usersinfo';
import Showaddition from './Components/Userinfo/Showaddition/Showaddition';

function App() {
  const [users,setUsers] =useState([]);
    useInsertionEffect(()=>{
      setUsers(userData);
    },[])
const [user,setUser]=useState([])
    const addToList =(users2)=>{
      console.log(users2.first_name);
      const newUser = [...user, users2]
      setUser(newUser);

    }
  
  return (
    <div className="App">
      {console.log(users)}
      <div className="user-info">
        {
          users.map(user => <Usersinfo userInfo={user} kye={user.id} addToList={addToList}></Usersinfo>)
        }
      </div>
      
      <div className="additional-info">
        <Showaddition user={user}></Showaddition>
      </div>
    </div>
  );
}

export default App;
