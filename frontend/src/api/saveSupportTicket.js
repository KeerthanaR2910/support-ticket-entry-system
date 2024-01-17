const saveSupportTicket = async (data) => {
    try{
       const response = await fetch("http://localhost:8888/support-tickets",{
           method:"POST",
           headers: {
               'Content-Type': 'application/json',
           },
           body: JSON.stringify(data)
       })
        if (response.status !== 200) {
            return new Error(response.statusText);
        }
        return response.json();
    }catch (error) {
        return new Error(error.message)
    }
}

export default  saveSupportTicket;