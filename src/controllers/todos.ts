import { RequestHandler } from "express";

import { Todo } from "../models/todo";

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = async (req, res, next) => {
  const text = (req.body as { text: string }).text;
  const newTodo = new Todo(Math.random().toString().substring(2, 10), text);

  TODOS.push(newTodo);

  res.status(201).json({ message: "New todo created!", createdTodo: newTodo });
};

export const getTodos: RequestHandler = (req, res, next) => {
  res.status(200).json({ todos: TODOS });
};

export const updateTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const id = req.params.id;
  const updatedText = (req.body as { text: string }).text;

  const todoIndex = TODOS.findIndex((todo) => todo.id === id);
  if (todoIndex < 0) {
    return res.status(404).json({ message: "Todo not found!" });
  }

  TODOS[todoIndex] = new Todo(TODOS[todoIndex].id, updatedText);

  res
    .status(200)
    .json({ message: "Todo updated!", updatedTodo: TODOS[todoIndex] });
};
