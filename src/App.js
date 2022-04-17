import React, { useState } from 'react';
import './App.css';
import NewUser from './Component/Form/NewUser';
import ShowUser from './Component/ShowUser/ShowUser';

function App() {

  const [user, setUser] = useState([])
  const formSubmitHandler = (formData)=>{
    console.log(formData.enteredName);
    setUser((prevUser)=>{
      return [
        formData,
      ...prevUser
      ]
    })
  }
  return (
    <React.Fragment>
      <NewUser onFormSubmit={formSubmitHandler}/>
      <ShowUser userArr={user}/>
    </React.Fragment>
  );
}

export default App;
