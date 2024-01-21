/* eslint-disable no-undef */
const todoList = require("../previous/Todo1");
const { all, add, MarkAsComplete, overdue, dueToday, dueLater } = todoList();

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
  test("To Check for the retrieval of OverDue items", () => {
    const currentDate = new Date();
    const yesterday = new Date();
    yesterday.setDate(currentDate.getDate() - 1);
    const befOverDue = overdue();
    add({
      title: "Overdue Task",
      completed: false,
      dueDate: yesterday.toISOString().split("T")[0],
    });
    const overdueTasks = overdue();
    expect(overdueTasks.length).toBe(befOverDue.length + 1);
  });
  test("To Check for the retrieval of DueTasks today", () => {
    const currentDate = new Date();
    const befdueTasks = dueToday();
    add({
      title: "Overdue Task",
      completed: false,
      dueDate: currentDate.toISOString().split("T")[0],
    });
    const newdueTasks = dueToday();
    expect(newdueTasks.length).toBe(befdueTasks.length + 1);
  });
  test("To Check for the retrieval of Future Tasks", () => {
    const currentDate = new Date();
    const tomDate = new Date();
    tomDate.setDate(currentDate.getDate() + 1);
    const befdueTasks = dueLater();
    add({
      title: "Future Task",
      completed: false,
      dueDate: tomDate.toISOString().split("T")[0],
    });
    const newdueTasks = dueLater();
    expect(newdueTasks.length).toBe(befdueTasks.length + 1);
  });
});
