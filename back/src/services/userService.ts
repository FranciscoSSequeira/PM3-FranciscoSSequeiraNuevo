import CreateUserDto from "../dto/CreateUserDto";
import IUser from "../interfaces/IUser";
import { createCredential } from "./credentialService";

const id:number = 6;

const users: IUser[] = [
    {
        id: 1,
        name: "Jorge Vega",
        email: "jvega@gmail.com",
        nDni: "34098834",
        birthdate: new Date("1991-02-05"),
        credentialsId: 1,
    },
    { 
        id: 2,
        name: "Mariana López",
        email: "mlopez@gmail.com",
        nDni: "29876543",
        birthdate: new Date("1987-06-12"),
        credentialsId: 2,
    },
    { 
        id: 3,
        name: "Carlos Méndez",
        email: "cmendez@hotmail.com",
        nDni: "31543211",
        birthdate: new Date("1993-09-25"),
        credentialsId: 3,
    },
    { 
        id: 4,
        name: "Fernanda Ruiz",
        email: "fruiz@yahoo.com",
        nDni: "35219876",
        birthdate: new Date("1995-12-08"),
        credentialsId: 4,
    },
    { 
        id: 5,
        name: "Santiago Pérez",
        email: "sperez@outlook.com",
        nDni: "33011234",
        birthdate: new Date("1990-04-30"),
        credentialsId: 5,
    }
]

export const getUsersService = async (): Promise<IUser[]> => users;

export const getUsersByIdService = async (id:number): Promise< IUser | undefined > => {
    const user: IUser | undefined = users.find((user) => user.id == id);
    if(!user) {
        throw Error("usuario no encontrado");
    }
    
    return user;
};

export const createUserService = async ({
    nDni,
    name,
    birthdate,
    email,
    password,
    username
}: CreateUserDto) => {
    const newUser: IUser = {
        id,
        name,
        nDni,
        birthdate: new Date(birthdate),
        email,
        credentialsId: await createCredential({username,password})
    }

    users.push(newUser);
    return newUser;
}