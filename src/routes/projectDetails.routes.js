import express from "express"
import projectDetailsController from "../controllers/projectDetails.controller.js"

const router=express.Router()

router.get("/:projectId", projectDetailsController.getProjectDetailsByProjectId )



export default router