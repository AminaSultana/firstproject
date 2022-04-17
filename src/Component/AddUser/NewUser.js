import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import Button from "../UI/Button";
import classes from './NewUser.module.css'
import Wrapper from '../Helper/Wrapper'

const NewUser = (props) => {
  const nameInputRef = useRef()
  const ageInputRef = useRef()
  const collegeInputRef = useRef()
 
  const [error, setError] = useState();

  const NewUserHandler = (e) => {
    e.preventDefault();
    const name= nameInputRef.current.value;
    const age=ageInputRef.current.value;
    const college=collegeInputRef.current.value;

    if (name.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age",
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age(>0)",
      });
      return;
    }
    const data = {
      enteredName: name,
      enteredAge: age,
      enteredCollege:college
    };
    props.onFormSubmit(data);
    nameInputRef.current.value=''
    ageInputRef.current.value=''
    collegeInputRef.current.value=''
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && <ErrorModal title={error.title} message={error.message}
      onConfirm={errorHandler} />}
      <Card className={classes.input}>
        <form onSubmit={NewUserHandler}>
          <h2>UserName</h2>
          <input type="text" ref={nameInputRef}/>
          <h2>Age(Years)</h2>
          <input type="number"  ref={ageInputRef}/>
          <h2>College Name</h2>
          <input type="text" ref={collegeInputRef}/>
          <Button type="submit"> Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default NewUser;
