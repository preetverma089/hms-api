import app from "./app.js";
import { systemVariables } from "./config/config.js";
const port = systemVariables.PORT;
app.listen(port, () => {
  console.log(`server islisten at ${port}`);
});
