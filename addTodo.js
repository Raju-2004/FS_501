/* eslint-disable no-undef */
var argv = require("minimist")(process.argv.slice(2));
const db = require("./models/index");

const createTodo = async (params) => {
  try {
    await db.Todo.addTask(params);
  } catch (err) {
    console.error(err);
  }
};

const getJSDate = (days) => {
  if (!Number.isInteger(days)) {
    throw new Error("Need to pass an integer as days");
  }
  const today = new Date();
  const oneDay = 24 * 60 * 60 * 1000;
  return new Date(today.getTime() + days * oneDay);
};

async () => {
  const { title, dueInDays } = argv;
  if (!title || dueInDays === undefined) {
    throw new Error(
      "title and dueInDays are required . \n sample command node addTodo.js --title='Buy milk' --dueInDay=-2",
    );
  }
  await createTodo({ title, dueDate: getJSDate(dueInDays), completed: false });
  await db.Todo.showList();
};
