import { useEffect, useState } from "react";
const ToDoItem = (props) => {
  const [textState, setTextState] = useState(props.text);
  const [completed, setCompleted] = useState(props.completed);

  useEffect(() => {
    setTextState(`${props.text} ${new Date().toLocaleTimeString()}`);
  }, []);
  return (
    <div
      className={completed ? "completed" : ""}
      onClick={() => setCompleted(!completed)}
    >
      {props.important ? "*" : ""} {textState}
    </div>
  );
};

export default ToDoItem;
