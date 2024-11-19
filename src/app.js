import express from "express";
import projectDetailsRouter from "./routes/projectDetails.routes.js"


const app=express()

app.use(express.json())

app.use("/project-details", projectDetailsRouter)

export default app
