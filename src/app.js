const express = require("express"),
  routes = require("./routes"),
  db = require("./database"),
  upload = require("./config/upload"),
  app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(upload.any());
app.use(express.static("src/public"));
db.hasConnection();
app.use(routes);

app.listen(3000, () => console.log("Servidor no ar!"));
