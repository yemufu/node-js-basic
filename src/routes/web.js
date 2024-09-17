import express from "express";
import homeController from "../controller/homeController";

let router = express.Router();

const initWebRoutes = (app) => {
    router.get("/", homeController.getHompage);

    return app.use("/", router);
}

export default initWebRoutes;