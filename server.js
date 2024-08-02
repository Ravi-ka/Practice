import { app } from "./app.js";
import { connectToDB } from "./src/config/dbConnection.js";

app.listen(process.env.PORT || 3000, (err) => {
  if (err) console.log("Error while starting teh server: " + err);
  else console.log("Server running on port " + process.env.PORT);
  connectToDB();
});
