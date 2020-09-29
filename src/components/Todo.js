import React from "react";

export default function Todo(props) {
  return (
    <div
      className={`item${props.item.completed ? " purchased" : ""}`}
      onClick={() => props.toggleItem(props.item.id)}
    >
      <p>{props.item.task}</p>
    </div>
  );
}
