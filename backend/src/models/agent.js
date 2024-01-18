import mongoose from "mongoose";

const supportAgentSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        active: {
            type: Boolean,
        },
        dateCreated: {
            type: Date,
        },
        lastActiveTimeStamp: {
            type: Date,
        }
    }
);

export const SupportAgent = mongoose.model('Support-Agent', supportAgentSchema);
