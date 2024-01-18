import {SupportAgent} from "../models/agent.js";
import {LastActiveAgent} from '../models/lastActiveAgent.js'

export const updateAgentsActiveStatus = async (agent) => {
    await SupportAgent.updateOne({_id: agent._id},{$set: {active: true, lastActiveTimeStamp: Date.now()}})
}

export const getNextAvailableAgent = async () => {
    const lastActiveAgentsFromDb = await LastActiveAgent.find().limit(1);
    const firstAgent = await SupportAgent.find().sort({_id: 1}).limit(1);
    let nextAgent
    if(lastActiveAgentsFromDb.length === 0){
        nextAgent = firstAgent;
    }else{
        nextAgent = await SupportAgent.find({_id: {$gt: lastActiveAgentsFromDb[0].agentId}}).sort().limit(1)
    }
    let nextAvailableAgent;
    if(nextAgent.length === 0)
        nextAvailableAgent = firstAgent[0];
    else
        nextAvailableAgent = nextAgent[0];

    if(lastActiveAgentsFromDb.length === 0){
        await LastActiveAgent.create({
            agentId : nextAvailableAgent._id
        })
    }else{
        await LastActiveAgent.updateOne({_id: lastActiveAgentsFromDb[0]._id},{
            agentId : nextAvailableAgent._id
        }, {upsert: true})
    }

    return nextAvailableAgent
}
