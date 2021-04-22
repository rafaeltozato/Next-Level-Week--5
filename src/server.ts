import express, { json } from "express";
import "./database";
import { routes } from "./routes";

const app = express();

const port = 3335;


app.use(express.json());
app.use(routes);

app.listen(port, () => console.log(`Server is running on: localhost:${port}.`));