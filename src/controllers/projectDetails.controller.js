import projectDetailsService from "../services/projectDetails.service.js"


const getProjectDetailsByProjectId= async(req,res)=>{
const { projectId }=req.params

    try {
        const projectDetail=await projectDetailsService.getProjectDetailsByProjectId(projectId)
        res.status(200).json(projectDetail)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

export default {getProjectDetailsByProjectId}