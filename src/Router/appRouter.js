import { Router } from "express";

//control imports
import hcroute from "../Controllers/healthCheck.js";

const appRouter = Router();

//healthCheck route
appRouter.get("/",hcroute);


export default appRouter;