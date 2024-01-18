import express from "express";
import saveAgentHandler from "../handlers/saveAgent.js";

const router = express.Router();

router.post("/", saveAgentHandler)

export default router