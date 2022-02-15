import { Router } from "express";

import { SendEmailService } from "./services/SendEmailService"

const routes = Router();

routes.post("/sendMessage", SendEmailService)

routes.post("/", () => console.log("funcionando"))

export { routes };