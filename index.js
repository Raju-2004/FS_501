const { connect } = require("./connectDB");
const Todo = require("./TodoModel");

const createTodo = async () => {
  try {
    await connect();
    console.log("Connection Established");

    const todo = await Todo.create({
      title: "First Item",
      dueDate: new Date(),
      completed: false,
    });
    console.log(`Created todo with ID: ${todo.id}`);
  } catch (err) {
    console.log(err);
  }
};

// const countItems = async () => {
//     try {
//         const todoCount = await Todo.count();
//         console.log(`Found ${todoCount} items in the table`);
//     } catch (err) {
//         console.error(err);
//     }
// }

async () => {
  await createTodo();
  // await countItems();
};
