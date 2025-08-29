import { Router } from "express";
import ParkingSlotController from "../controllers/parking_slot.controller";
import { validateParkingSlotExists } from "../middlewares/parking_slot.middleware";

const router = Router();

router.post("/", ParkingSlotController.create);
router.get("/", ParkingSlotController.getAll);
router.get("/available", ParkingSlotController.getAvailable);
router.get("/parking/:parkingId", ParkingSlotController.getByParkingId);
router.get("/:id", validateParkingSlotExists, ParkingSlotController.getById);
router.put("/:id", validateParkingSlotExists, ParkingSlotController.update);
router.delete("/:id", validateParkingSlotExists, ParkingSlotController.delete);

export default router;
