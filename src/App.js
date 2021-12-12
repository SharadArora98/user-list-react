import React,{useState} from 'react';
import AddUser from './components/Users/AddUser';
import AddUserList from './components/Users/AddUserList';


function App() {
  const [userList, setUserList] = useState([]);
  const addUserHandler = (newUserName, newUserAge) => {
    setUserList ( (prevState) => {
      return [...prevState, {name: newUserName, age: newUserAge, id: Math.random()}];
    });
  };

  return (
    <div>
      <AddUser onAddUser = {addUserHandler}/>
      <AddUserList users = {userList}/>
    </div>
  );
}

export default App;
