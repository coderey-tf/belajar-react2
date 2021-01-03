import React from 'react';

import Paper from "../Components/Paper";
import Header from "../Components/Header";
import ToDoForm from "../Components/ToDoForm";
import ToDos from "../Components/ToDos"

const TodoList = () => {
  return (
    <Paper>
      <Header />
      <ToDoForm />
      <ToDos />
    </Paper>
  )
};

export default TodoList;
