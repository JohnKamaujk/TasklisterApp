import React from "react";
import { Typography, Button, ButtonGroup } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Create, Delete, CheckCircle } from "@material-ui/icons";
import moment from "moment";

const useStyles = makeStyles({
  todostyle: {
    margin: "20px auto",
    padding: "20px",
    border: "2px solid #bdbdbd",
    borderRadius: "9px",
    display: "flex",
    justifyContent: "space-between",
  },
  textStyle: {
    color: "#8f8f8f",
  },
  isCompletebtn: {
    color: "green",
  },
  checked: {
    textDecoration: "line-through",
  },
});

const TodoItem = ({ todo }) => {
  const classes = useStyles();

  const { name, date, isComplete } = todo;

  return (
    <>
      <div className={classes.todostyle}>
        <div>
          {isComplete ? (
            <Typography variant="subtitle1">{name}</Typography>
          ) : (
            <Typography className={classes.checked} variant="subtitle1">
              {name}
            </Typography>
          )}
          <Typography variant="body2" className={classes.textStyle}>
            Author : Johnny
          </Typography>
          <Typography variant="body2" className={classes.textStyle}>
            Added: {moment(date).fromNow()}
          </Typography>
        </div>
        <div>
          <ButtonGroup size="small" aria-label="outlined primary button group">
            {isComplete ? (
              <Button>
                <CheckCircle color="action" className={classes.isCompletebtn} />
              </Button>
            ) : (
              <Button>
                <CheckCircle color="action" />
              </Button>
            )}
            <Button>
              <Create color="primary" />
            </Button>
            <Button>
              <Delete color="secondary" />
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </>
  );
};

export default TodoItem;
