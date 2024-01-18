import mongoose from "mongoose";

const lastActiveAgentSchema = mongoose.Schema(
    {
        agentId: {
            type: String,
            required: true,
        }
    }, { _v : false });


export const LastActiveAgent = mongoose.model('Last-Active-Agent', lastActiveAgentSchema);
