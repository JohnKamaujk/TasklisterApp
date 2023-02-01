import React from "react";
import { Typography, Button, ButtonGroup } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Create, Delete, CheckCircle } from "@material-ui/icons";

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
});

const TodoItem = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.todostyle}>
        <div>
          <Typography variant="subtitle1">Learn Redux Toolkit</Typography>
          <Typography variant="body2" className={classes.textStyle}>
            Author : Johnny
          </Typography>
          <Typography variant="body2" className={classes.textStyle}>
            Created: now
          </Typography>
        </div>
        <div>
          <ButtonGroup size="small" aria-label="outlined primary button group">
            <Button>
              <CheckCircle color="action" />
            </Button>
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
