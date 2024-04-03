import { Router } from "express";

//control imports
import hcroute from "../Controllers/healthCheck.js";
import numbersController from "../Controllers/numbersController.js";

const appRouter = Router();

//healthCheck route
appRouter.get("/",hcroute);

//numbers route
appRouter.get("/numbers/:id",numbersController)


export default appRouter;