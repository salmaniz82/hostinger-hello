import express from "express";

const app = express();

app.get("/", async (req, res) => {
  res.status(200).send("hello world");
});

app.get("/todo", async (req, res) => {
  let todo = [
    { id: 1, title: "some task", status: true },
    { id: 2, title: "some other task", status: false },
  ];

  res.status(200).json({
    data: todo,
    message: todo.length > 0 ? "Todo list" : "No Todos in records yet",
  });
});

app.listen(3000, function () {
  console.log("app is running at port");
});
