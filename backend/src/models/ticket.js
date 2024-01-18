import mongoose from 'mongoose';


const ticketSchema = mongoose.Schema(
    {
        topic: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        dateCreated: {
            type: Date,
            default: Date.now()
        },
        severity: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        assignedTo: {
            type: String,
        },
        status: {
            type: String,
            required: true,
            default: "New"
        },
        resolvedOn: {
            type: Date
        },
    }
);


export const Ticket = mongoose.model('Ticket', ticketSchema);