import { Request, Response } from "express";

// GET /users => Obtener el listado de todos los usuarios.
export const getUsersController = (req: Request , res: Response) => {
    res.status(200).json({
        status:200,
        message: "Obtener el listado de todos los usuarios"
    
});
}

// GET /users/:id => Obtener el detalle de un usuario específico.
export const getUsersByIdController = (req:Request , res:Response) => {
    res.status(200).json({
        status:200,
        message: "Obtener el detalle de un usuario específico"
    
});
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
