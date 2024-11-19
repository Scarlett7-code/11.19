import prisma from "../models/prismaClient.js"


const getProjectDetailsByProjectId=async(projectId)=>{
return await prisma.ProjectDetail.findUnique({
    where: {projectId}
})
}

export default {getProjectDetailsByProjectId}