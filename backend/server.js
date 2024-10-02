import app from "./app.js";
import config from "./config/config.js";
import colors from "colors";

const PORT = config.port;
// note: server listen
app.listen(PORT, () => {
  console.log(
    colors.bgGreen.black(`Server is running on http://localhost:${PORT}`)
  );
});
