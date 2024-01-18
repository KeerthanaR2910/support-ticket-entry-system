import express from "express"
import {MONGO_DB_URL, PORT} from "./config.js";
import mongoose from "mongoose";
import supportAgentsRoute from "./routes/agentsRoute.js";
import ticketRoute from "./routes/ticketRoute.js";
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

mongoose
    .connect(MONGO_DB_URL)
    .then(() => {
        app.listen(PORT, () => {
            console.log("App Started on",PORT)
        })
    })
    .catch((error) => {
        console.log("Error while starting app",error)
    })

app.use("/support-agents", supportAgentsRoute)
app.use("/support-tickets", ticketRoute)


