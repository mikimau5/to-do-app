import React from "react";

const Task = props => {
  const style = {
    color: "red"
  };

  const { text, date, id, active, important, finishDate } = props.task;

  if (active) {
    return (
      <div className="task">
        <p>
          <strong style={important ? style : null}> {text} </strong> - do{" "}
          <span>{date} </span>
          <i
            className="fas fa-check-square add"
            onClick={() => props.change(id)}
          />
          <i
            className="fas fa-minus-square remove"
            onClick={() => props.delete(id)}
          />
        </p>
      </div>
    );
  } else {
    const finish = new Date(finishDate).toLocaleString();
    return (
      <div>
        <p>
          <strong> {text} </strong>
          <em> (zrobić do {date})</em> <br />
          wykonano:<span> {finish} </span>
          <i
            className="fas fa-minus-square remove"
            onClick={() => props.delete(id)}
          />{" "}
        </p>{" "}
      </div>
    );
  }
};

export default Task;
