import {Ticket} from "../models/ticket.js";
import { getNextAvailableAgent, updateAgentsActiveStatus} from "./helper.js";

const handler = async (request, response) => {
    try {
        if (
            !request.body.topic ||
            !request.body.description ||
            !request.body.severity ||
            !request.body.type
        ) {
            return response.status(400).send({
                message: 'Send all required fields: topic, description, severity, type',
            });
        }

        const severityOptions = ["Low","Medium","High","Urgent"];
        if(!(severityOptions.includes(request.body.severity))){
            return response.status(400).send({
                message: `Severity value should be in ${severityOptions}`,
            });
        }
        const ticketData = {
            topic: request.body.topic,
            description: request.body.description,
            dateCreated: Date.now(),
            severity: request.body.severity,
            type: request.body.type,
        };

        const ticket = await Ticket.create(ticketData)
            .then(async (ticket) => {
                const agent = await getNextAvailableAgent();
                const ticketAfterAssigned = await Ticket.findOneAndUpdate({_id: ticket._id}, {
                    status: "Assigned",
                    assignedTo:agent._id,
                } ,{new: true})
                await updateAgentsActiveStatus(agent)
                return ticketAfterAssigned;
            })

        return response.status(201).send(ticket);
    } catch (error) {
        console.log(error)
        return response.status(500).send({message: error.message});
    }
}

export default handler
