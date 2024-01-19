import {serviceConfig} from "../config";

const resolveTicket = async (id) => {
    try{
        const response = await fetch(`${serviceConfig.baseUrl}/support-tickets/resolve/${id}`,{
            method:"POST",
        })
        if (response.status === 200 || response.status === 201) {
            return response.json();
        }
        throw new Error(response)
    }catch (error) {
        throw new Error(error)
    }
}

export default resolveTicket