const todoList = () => {
  const all = [];
  const add = (todoTask) => {
    all.push(todoTask);
  };
  const MarkAsComplete = (index) => {
    all[index].completed = true;
  };
  const DeleteTodo = (index) => {
    all.splice(index, 1);
  };
  const overdue = () => {
    const over = all.filter((todo) => todo.dueDate < formattedDate(dateToday));
    return over;
  };
  const dueToday = () => {
    const today = all.filter(
      (todo) => todo.dueDate === formattedDate(dateToday),
    );
    return today;
  };
  const dueLater = () => {
    const later = all.filter((todo) => todo.dueDate > formattedDate(dateToday));
    return later;
  };
  const toDisplayableList = (Todos) => {
    const displayString = Todos.map(
      (todo) => `[${todo.completed ? "X" : " "}] ${todo.title} ${todo.dueDate}`,
    ).join("\n");
    return displayString;
  };
  return {
    all,
    add,
    MarkAsComplete,
    DeleteTodo,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

const dateToday = new Date();

const formattedDate = (d) => {
  return d.toISOString().split("T")[0];
};

// const today = formattedDate(dateToday)
// const yesterday = formattedDate(
//   new Date(dateToday.getTime() - 24 * 60 * 60 * 1000)
// )
// const tomorrow = formattedDate(
//   new Date(dateToday.getTime() + 24 * 60 * 60 * 1000)
// )

module.exports = todoList;
