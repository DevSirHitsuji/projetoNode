import Express from "express";
import cors from "cors";
const app = Express();

//middlewares
import middlewaresPadrao from "./middlewares/config.js";
middlewaresPadrao(app, Express, cors);

//database
import db_usuario from "./database/sqlite.js";

//rotas
import indexController from "./controllers/indexController.js";
indexController(app, db_usuario);

export default app;