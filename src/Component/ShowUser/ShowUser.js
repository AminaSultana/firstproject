import List from "./List";
import Card from "../UI/Card";
import classes from "./ShowUser.css";

const ShowUser = (props) => {
  let list = [];
  list = props.userArr.map((array, idx) => {
    return (
      <List key={idx} userName={array.enteredName} userAge={array.enteredAge} />
    );
  });

  return (
    <Card className={classes.userArr}>
      <ul>{list}</ul>
    </Card>
  );
};

export default ShowUser;
