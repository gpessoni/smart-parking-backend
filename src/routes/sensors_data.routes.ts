import { Router } from "express";
import SensorsDataController from "../controllers/sensors_data.controller";
import { validateSensorDataExists } from "../middlewares/sensors_data.middleware";

const router = Router();

router.post("/", SensorsDataController.create);
router.get("/", SensorsDataController.getAll);
router.get("/active", SensorsDataController.getActive);
router.get("/sensor/:sensorId", SensorsDataController.getBySensorId);
router.get("/parking-slot/:parkingSlotId", SensorsDataController.getByParkingSlotId);
router.get("/:id", validateSensorDataExists, SensorsDataController.getById);
router.put("/:id", validateSensorDataExists, SensorsDataController.update);
router.delete("/:id", validateSensorDataExists, SensorsDataController.delete);

export default router;
