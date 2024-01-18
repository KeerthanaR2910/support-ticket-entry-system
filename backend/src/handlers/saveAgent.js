import {SupportAgent} from "../models/agent.js";

const handler = async (request, response) => {
    try {
        if(!request.body.name
            || !request.body.email
            || !request.body.phone
            || !request.body.description
        ){
            return response.status(400).send({
                message: "Send all required fields: name, email, phone, description"
            })
        }
        const supportAgentData = {
            name: request.body.name,
            email: request.body.email,
            phone: request.body.phone,
            description: request.body.description,
            active: false,
            dateCreated: Date.now()
        }

        const supportAgent = await SupportAgent.create(supportAgentData);
        return response.status(201).send(supportAgent);
    }catch (error) {
        return response.status(500).send(error)
    }
};

export default handler;
