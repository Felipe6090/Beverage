import { Router } from "express";

import { SendEmailService } from "./services/SendEmailService"

const routes = Router();

routes.post("/sendMessage", SendEmailService)

export { routes };