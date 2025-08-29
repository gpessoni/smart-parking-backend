import { Router } from "express";
import ParkingSensorDataController from "../controllers/parking_sensor_data.controller";
import { validateParkingSensorDataExists } from "../middlewares/parking_sensor_data.middleware";

const router = Router();

router.post("/", ParkingSensorDataController.create);
router.get("/", ParkingSensorDataController.getAll);
router.get("/parking-sensor/:parkingSensorId", ParkingSensorDataController.getByParkingSensorId);
router.get("/parking/:parkingId", ParkingSensorDataController.getByParkingId);
router.get("/:id", validateParkingSensorDataExists, ParkingSensorDataController.getById);
router.put("/:id", validateParkingSensorDataExists, ParkingSensorDataController.update);
router.delete("/:id", validateParkingSensorDataExists, ParkingSensorDataController.delete);

export default router;
