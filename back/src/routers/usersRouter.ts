import { Router } from "express";
import { getUsersByIdController, getUsersController, loginUserController, registerUserController } from "../controllers/usersControllers";

const userRouter = Router();

// GET /users => Obtener el listado de todos los usuarios.
userRouter.get("/", getUsersController);

// GET /users/:id => Obtener el detalle de un usuario específico.
userRouter.get("/:id", getUsersByIdController);

// POST /users/register => Registro de un nuevo usuario.
userRouter.post("/register", registerUserController);

// POST /users/login => Login del usuario a la aplicación.
userRouter.post("/login", loginUserController );

export default userRouter;