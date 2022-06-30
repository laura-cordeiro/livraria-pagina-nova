const express = require("express"),
  routes = require("./routes"),
  db = require("./database"),
  app = express();

app.use(express.json());
db.hasConnection();
app.use(routes);

app.listen(3000, () => console.log("Servidor no ar!"));
