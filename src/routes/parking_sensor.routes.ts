import { Router } from "express";
import ParkingSensorController from "../controllers/parking_sensor.controller";
import { validateParkingSensorExists } from "../middlewares/parking_sensor.middleware";

const router = Router();

router.post("/", ParkingSensorController.create);
router.get("/", ParkingSensorController.getAll);
router.get("/active", ParkingSensorController.getActive);
router.get("/type/:type", ParkingSensorController.getByType);
router.get("/parking/:parkingId", ParkingSensorController.getByParkingId);
router.get("/:id", validateParkingSensorExists, ParkingSensorController.getById);
router.put("/:id", validateParkingSensorExists, ParkingSensorController.update);
router.delete("/:id", validateParkingSensorExists, ParkingSensorController.delete);

export default router;
