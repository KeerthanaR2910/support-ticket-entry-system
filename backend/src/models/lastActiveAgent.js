import mongoose from "mongoose";

const lastActiveAgentSchema = mongoose.Schema(
    {
        agentId: {
            type: String,
            required: true,
        }
    }, { __v : false });


export const LastActiveAgent = mongoose.model('Last-Active-Agent', lastActiveAgentSchema);
