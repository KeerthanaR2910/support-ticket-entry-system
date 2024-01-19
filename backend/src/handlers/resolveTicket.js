import {Ticket} from "../models/ticket.js";

const resolveTicketHandler =  async (request, response)  => {
    try {
        const ticketId = request.params['id']
        const ticket = await Ticket.findByIdAndUpdate(ticketId, {"resolvedOn": Date.now()})
        return response.status(200).json(ticket);
    }
    catch (error) {
        return response.status(500).send({message: error.message});
    }
}

export default resolveTicketHandler
