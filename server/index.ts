import express from "express";
import expressConfig from "./src/config/expressConfig";
import serverConfig from "./src/config/server";
import {database} from './src/connection/connection';
import route from './src/routes/index'
import errorHandler from "./src/utils/errorHandler";




const server = express();
const app = express.Router();

//EXPRESS CONFIG
expressConfig(server);

//SERVER CONFIG
serverConfig(server);

//DB CONFIG
database()

server.use("/", app); 

// //ROUTING MIDDLEWARES
app.use(route)

//ERROR HANDLING MIDDLEWARE
server.use(errorHandler)

