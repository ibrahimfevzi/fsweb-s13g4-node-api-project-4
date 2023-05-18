require("dotenv").config();

const server = require("./api/server");

const port = process.env.PORT || "4001";

server.listen(port, () => {
  console.log(`server is running at ${port}`);
});
