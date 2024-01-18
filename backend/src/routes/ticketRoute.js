import express from 'express';
import saveTicketHandler from "../handlers/saveTicket.js";
import fetchTicketsHandler from "../handlers/fetchTickets.js"
import resolveTicketHandler from "../handlers/resolveTicket.js";

const router = express.Router();

router.post('/', saveTicketHandler);

router.get('/', fetchTicketsHandler);

router.post('/resolve/:id', resolveTicketHandler);

export default router;