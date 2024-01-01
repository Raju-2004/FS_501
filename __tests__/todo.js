/* eslint-disable no-undef */
const todoList = require("../index");
const { all, add, MarkAsComplete } = todoList();

describe("TodoList Test suite", () => {
  beforeAll(() => {
    add({
      title: "Test todo",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });
  test("should add new todo", () => {
    const initialTodoItemCount = all.length;
    add({
      title: "Test todo",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
    expect(all.length).toBe(initialTodoItemCount + 1);
  });

  test("should Mark as complete", () => {
    expect(all[0].completed).toBe(false);
    MarkAsComplete(0);
    expect(all[0].completed).toBe(true);
  });
});
