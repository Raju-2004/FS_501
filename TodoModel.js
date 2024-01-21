const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("./connectDB");
class Todo extends Model {
  // static async addTask(params) {
  //   return await Todo.create(params)
  // }
}

Todo.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dueDate: {
      type: DataTypes.DATEONLY,
    },
    completed: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    sequelize,
    modelName: "Todo",
  },
);

Todo.sync()
  .then(() => {
    console.log("Todo model synced successfully");
  })
  .catch((error) => {
    console.error("Error syncing Todo model", error);
  });

module.exports = Todo;
