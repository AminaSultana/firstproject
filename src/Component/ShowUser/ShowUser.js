import Card from "../UI/Card";
import classes from "./ShowUser.module.css";

const ShowUser = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.userArr.map((array, idx) => {
          return (
            <li key={idx}>
              {array.enteredName} ({array.enteredAge} years old)
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default ShowUser;
