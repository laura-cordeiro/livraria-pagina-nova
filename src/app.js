const express = require("express"),
  app = express(),
  routes = require("./routes");

app.use(routes);

app.listen(3000, () => console.log("Servidor no ar!"));
