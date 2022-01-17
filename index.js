import express from "express";
import router from "./routes/router.js";

const PORT = 3007;
const app = express();

app.use(express.json());
app.use(router);

app.listen(PORT, () => console.log("SERVER STARTED ON PORT " + PORT));
