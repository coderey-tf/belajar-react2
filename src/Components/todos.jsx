import React from "react";

import Todo from "./Todo";

const ToDos = () => {
  const todos = [
    {
      text: "Belajar React!"
    },
    {
      text: "Belajar Props React!"
    },
    {
      text: "Belajar React Hooks!"
    },
    {
      text: "Belajar React ciyee!"
    },
    {
      text: "Belajar React uhuy!"
    },
    {
      text: "Belajar React alamakk!"
    },
    {
      text: "Belajar React mantap!"
    },

  ]
  return (
    <section className="todos">
      {todos.map(todo => {
        return <Todo text={todo.text} />
      })}
    </section>
  )
};

export default ToDos;