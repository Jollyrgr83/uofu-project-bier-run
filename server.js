// SERVER
// dependencies
const express = require("express");
const mongoose = require("mongoose");
// set up express router
const app = express();
// bring in routes
const routes = require("./routes");
// establish port variable
const PORT = process.env.PORT || 3001;
// mongoDB connection credentials
// const localURL = "mongodb://localhost/bierRunDB";
// const remoteURL = "mongodb://user:password1@ds361768.mlab.com:61768/heroku_s62dvl7k";
const remoteURL = "mongodb+srv://user:password1@cluster-bier-run.tkrqj.mongodb.net/heroku_s62dvl7k?retryWrites=true&w=majority";
// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// routes
app.use(routes);
// mongoDB connection
// mongoose.connect(process.env.MONGODB_URI || localURL);
// mongoose.connect(process.env.MONGODB_URI || remoteURL);
mongoose.connect(remoteURL);
// starts API server
app.listen(PORT, function() {
  console.log(`API Server now listening on PORT ${PORT}`);
});
