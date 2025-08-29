import { Router } from "express";
import SensorsController from "../controllers/sensors.controller";
import { validateSensorExists } from "../middlewares/sensors.middleware";

const router = Router();

router.post("/", SensorsController.create);
router.get("/", SensorsController.getAll);
router.get("/active", SensorsController.getActive);
router.get("/type/:type", SensorsController.getByType);
router.get("/parking-slot/:parkingSlotId", SensorsController.getByParkingSlotId);
router.get("/:id", validateSensorExists, SensorsController.getById);
router.put("/:id", validateSensorExists, SensorsController.update);
router.delete("/:id", validateSensorExists, SensorsController.delete);

export default router;
