const express = require("express");
const app = express();
const PORT = 3000; // 設定伺服器的 Port

// 定義一個路由
app.get("/", (req, res) => {
  res.send("Hello, Node.js Serv!");
});

app.get("/log", (req, res) => {
  console.log("request query", req.query);

  res.send({
    isSuccessful: true,
  });
});

// 啟動伺服器
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
