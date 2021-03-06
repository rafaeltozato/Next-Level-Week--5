import { Router } from "express";
import { MessagesController } from "./controllers/MessagesController";
import { SettingsController } from "./controllers/SettingsController";
import { UserControllers } from "./controllers/UsersControllers";

const routes = Router();
const settingsController = new SettingsController();
const usersController = new UserControllers();
const messagesController = new MessagesController();

routes.post("/settings", settingsController.create);
routes.post("/users", usersController.create);
routes.post("/messages", messagesController.create);
routes.get("/messages/:id", messagesController.showByUser);

export { routes };