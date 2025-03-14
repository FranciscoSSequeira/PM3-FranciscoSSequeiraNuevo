import { Request, Response } from "express";

// GET /appointments => Obtener el listado de todos los turnos .
export const getAppointmentsController = (req: Request, res: Response) =>{
    res.status(200).json({
        message:"Obtener el listado de todos los turnos "
    })
}
// GET /appointments => Obtener el detalle de un turno específico.
export const getAppointmentsByIdController = (req: Request, res: Response) =>{
    res.status(200).json({
        message:"Obtener el detalle de un turno específico "
    })
}

// POST /appointments/schedule => Agendar un nuevo turno.
export const createAppointmentsController = (req: Request, res: Response) =>{
    res.status(200).json({
        message:"Agendar un nuevo turno "
    })
}

// PUT /appointments/cancel => Cambiar el estatus de un turno a “cancelled”.
export const cancelAppointmentsByIdController = (req: Request, res: Response) =>{
    res.status(200).json({
        message:"Cambiar el estatus de un turno a cancelled"
    })
}