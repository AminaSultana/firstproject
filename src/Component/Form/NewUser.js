import React, { useState } from "react";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import Button from "../UI/Button";
import classes from './NewUser.module.css'
import Wrapper from '../Helper/Wrapper'

const NewUser = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  };
  const NewUserHandler = (e) => {
    e.preventDefault();
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
    };
    props.onFormSubmit(data);
    setAge("");
    setName("");
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
          <input type="text" value={name} onChange={nameChangeHandler} />
          <h2>Age(Years)</h2>
          <input type="number" value={age} onChange={ageChangeHandler} />
          <Button type="submit"> Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default NewUser;
