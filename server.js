const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Указываем папку public для статических файлов
app.use(express.static(path.join(__dirname, "public")));

// Отдаём главную страницу
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`✅ Сервер запущен: http://localhost:${PORT}`);
});
