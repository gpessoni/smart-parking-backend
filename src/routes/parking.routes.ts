import { Router } from "express";
import ParkingController from "../controllers/parking.controller";
import { validateParkingExists } from "../middlewares/parking.middleware";

const router = Router();

router.post("/", ParkingController.create);
router.get("/", ParkingController.getAll);
router.get("/active", ParkingController.getActive);
router.get("/:id", validateParkingExists, ParkingController.getById);
router.put("/:id", validateParkingExists, ParkingController.update);
router.delete("/:id", validateParkingExists, ParkingController.delete);

export default router;
