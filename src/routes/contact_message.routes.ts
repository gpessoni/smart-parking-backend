import { Router } from "express";
import ContactMessageController from "../controllers/contact_message.controller";
import { validateContactMessageExists } from "../middlewares/contact_message.middleware";

const router = Router();

router.post("/", ContactMessageController.create);
router.get("/", ContactMessageController.getAll);
router.get("/:id", validateContactMessageExists, ContactMessageController.getById);
router.put("/:id", validateContactMessageExists, ContactMessageController.update);
router.delete("/:id", validateContactMessageExists, ContactMessageController.delete);

export default router;
