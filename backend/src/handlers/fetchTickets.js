import {Ticket} from "../models/ticket.js";

const handler = async (request, response) => {
    try {
        const pageNumber = request.query.page ?? 1;
        const pageLimit = request.query.limit ?? 10;
        const skipCount = (pageNumber-1) * pageLimit;

        const sortParams = request.query.sort;
        const sortModel = {}
        if(sortParams){
            sortParams.split(",").forEach((sortParam) => {
                const sort = sortParam.split(":");
                const sortableField = ["resolvedOn", "dateCreated"]
                const sortField = sort[0];
                if(sortableField.includes(sortField)){
                    const sortOption = sort[1]
                    if(sortOption){
                        sortModel[sortField] = sortOption;
                    }
                }
            })
        }

        const filterModel= {}
        if(request.query.severity) filterModel["severity"] = request.query.severity;
        if(request.query.type) filterModel["type"] = request.query.type;
        if(request.query.assignedTo) filterModel["assignedTo"] = request.query.assignedTo;
        if(request.query.status) filterModel["status"] = request.query.status;

        const tickets = await Ticket.find(filterModel).sort(sortModel).skip(skipCount).limit(pageLimit);
        const totalTicketCount = await Ticket.countDocuments(filterModel); //TODO
        const responseBody = {
            data: tickets,
            page: parseInt(pageNumber),
            limit: parseInt(pageLimit),
            totalCount: totalTicketCount
        }

        return response.status(200).json(responseBody);
    } catch (error) {
        return response.status(500).send({message: error.message});
    }
};

export default handler