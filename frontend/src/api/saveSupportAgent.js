import {serviceConfig} from "../config";

const saveSupportAgent = async (data) => {
    try{
        const response = await fetch(`${serviceConfig.baseUrl}/support-agents`,{
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        if (response.status === 200 || response.status === 201) {
            return response.json();
        }
        throw new Error(response);
    }catch (error) {
        throw new Error(error)
    }
}

export default saveSupportAgent