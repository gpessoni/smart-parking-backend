import { Request, Response, NextFunction } from "express";
import UserService from "../services/user.service";

export const validateUserExists = async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.params.id;
    const existingUser = await UserService.getUserById(userId);

    if (!existingUser) {
        return res.status(404).json({ message: "Usuário não encontrado." });
    }
    next();
};
