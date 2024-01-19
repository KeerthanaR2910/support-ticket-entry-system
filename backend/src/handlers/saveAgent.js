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

        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
        if(!(emailRegex.test(request.body.email))){
            return request.status(400).send({
                message: "email is not valid. Send valid email"
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
        console.log(error)
        return response.status(500).send(error)
    }
};

export default handler;
