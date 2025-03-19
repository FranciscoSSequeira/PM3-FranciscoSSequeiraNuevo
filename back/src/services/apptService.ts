import { AppointmentStatus } from "../interfaces/IAppointments";
import IAppointment from "../interfaces/IAppointments";

const appointments: IAppointment[] = [
    {
        id:1,
        date: new Date("2024-05-02"),
        time: "17:30",
        status: AppointmentStatus.ACTIVE,
        userId: 1
    },
    {
        id:2,
        date: new Date("2024-05-02"),
        time: "18:00",
        status: AppointmentStatus.ACTIVE,
        userId: 1
    }
]

