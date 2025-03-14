import { Router } from "express";
import { cancelAppointmentsByIdController, createAppointmentsController, getAppointmentsByIdController, getAppointmentsController } from "../controllers/appointmentsController";

const appointmentsRouter = Router();

// GET /appointments => Obtener el listado de todos los turnos de todos los usuarios.
appointmentsRouter.get("/", getAppointmentsController );

// GET /appointments => Obtener el detalle de un turno específico.
appointmentsRouter.get("/:id", getAppointmentsByIdController );

// POST /appointments/schedule => Agendar un nuevo turno.
appointmentsRouter.post("/schedule", createAppointmentsController );

// PUT /appointments/cancel => Cambiar el estatus de un turno a “cancelled”.
appointmentsRouter.put("/cancel/:id", cancelAppointmentsByIdController);

export default appointmentsRouter;