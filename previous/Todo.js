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

const today = formattedDate(dateToday);
const yesterday = formattedDate(
  new Date(dateToday.getTime() - 24 * 60 * 60 * 1000),
);
const tomorrow = formattedDate(
  new Date(dateToday.getTime() + 24 * 60 * 60 * 1000),
);

const Todos = todoList();
Todos.add({ title: "Submit assignment", dueDate: yesterday, completed: false });
Todos.add({ title: "Pay rent", dueDate: today, completed: true });
Todos.add({ title: "service Vehicle", dueDate: today, completed: false });
Todos.add({ title: "File taxes", dueDate: tomorrow, completed: false });
Todos.add({ title: "Pay electric bill", dueDate: tomorrow, completed: false });

console.log("My Todo-list\n\n");

console.log("Overdue");

const overDues = Todos.overdue();
const formattedOverDues = Todos.toDisplayableList(overDues);
console.log(formattedOverDues);
console.log("\n\n");

console.log("Due Today");

const itemsDueToday = Todos.dueToday();
const formattedItemsDueToday = Todos.toDisplayableList(itemsDueToday);
console.log(formattedItemsDueToday);
console.log("\n\n");

console.log("Due Later");

const itemsDueLater = Todos.dueLater();
const formattedItemsDueLater = Todos.toDisplayableList(itemsDueLater);
console.log(formattedItemsDueLater);
console.log("\n\n");
