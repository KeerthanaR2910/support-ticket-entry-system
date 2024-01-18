const getSupportTickets = async (queryParams) => {
    try{
        return fetch(`http://localhost:8888/support-tickets?${queryParams}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response) => {
            if (response.status === 200 || response.status === 201) {
                return response.json();
            }
            throw new Error(response);
        })
    }catch (error) {
        throw new Error(error)
    }
}

export default getSupportTickets