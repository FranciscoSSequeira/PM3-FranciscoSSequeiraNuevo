import { Request, Response } from "express";
import { getUsersByIdService, getUsersService } from "../services/userService";
import IUser from "../interfaces/IUser";

// GET /users => Obtener el listado de todos los usuarios.
export const getUsersController = async (req: Request , res: Response) => {
    try {
        const users : IUser[] = await getUsersService();
        res.status(200).json(users);
        
    } catch (e) {
        res.status(500).json({
            message: "Ha ocurrido un error al obtener la lista de usuarios",
            error: e,
        })
    }
}

// GET /users/:id => Obtener el detalle de un usuario específico.
export const getUsersByIdController = async (req:Request , res:Response) => {
    try {
        const {id} = req.params;
        const user : IUser | undefined = await getUsersByIdService(Number(id));
        res.status(200).json(user);
    } catch (e) {
        res.status(404).json({
            message: "Ha ocurrido un error al obtener el usuario",
            error: (e as Error)?.message,
        })
    }
};

// POST /users/register => Registro de un nuevo usuario.
export const registerUserController = (req:Request , res:Response) => {
    res.status(201).json({
        status:201,
        message: "Registro de un nuevo usuario."
    
});
};

// POST /users/login => Login del usuario a la aplicación.
export const loginUserController = (req:Request , res:Response) => {
    res.status(200).json({
        status:200,
        message: "Login del usuario a la aplicación."
    
});
};
