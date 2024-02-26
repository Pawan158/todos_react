import React, { useState } from "react";

function ToDoItem(props) {
  const [checked, setChecked] = useState(false);

  function handleClick() {
    setChecked(!checked);
  }
  return (
    <div onClick={handleClick}>
      <li style={{ textDecoration: checked ? "line-through" : "none" }}>
        {props.text}
      </li>
    </div>
  );
}

export default ToDoItem;
