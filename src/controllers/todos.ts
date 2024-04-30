import { RequestHandler } from "express";

import { Todo } from "../models/todo";

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = async (req, res, next) => {
  const text = (req.body as { text: string }).text;
  const newTodo = new Todo(Math.random().toString().substring(2, 10), text);

  TODOS.push(newTodo);

  res.status(201).json({ message: "New todo created!", createdTodo: newTodo });
};
