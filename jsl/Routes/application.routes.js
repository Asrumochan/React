import express from "express";
import Applications from "../models/applications.model.js";
import {
    createApplication,
  deleteApplication,
  getAllApplicationById,
  getAllApplications,
  getStats,
  updateApplication,
} from "../Controllers/application.controller.js";

const ApplicationRouter = express.Router();

ApplicationRouter.get("/", getAllApplications);

ApplicationRouter.get("/stats", getStats);
ApplicationRouter.get("/:id", getAllApplicationById);

ApplicationRouter.post("/", createApplication)
ApplicationRouter.put("/", updateApplication)
ApplicationRouter.delete("/",deleteApplication)

export default ApplicationRouter;
