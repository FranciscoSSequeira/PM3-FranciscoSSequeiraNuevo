import CreateCredentialDto from "../dto/CreateCredentialDto";
import ICredential from "../interfaces/ICredentials";

let id: number = 6;

const credentials: ICredential[] = [
    {id:1, username:"jvega", password:"123456"},
    {id:2, username:"mlopez", password:"123456"},
    {id:3, username:"cmendez", password:"123456"},
    {id:4, username:"fruiz", password:"123456"},
    {id:5, username:"sperez", password:"123456"}
]

export const createCredential = async ({
    username,
    password
}: CreateCredentialDto) => {
    const newCredential:ICredential = {
        id,
        username,
        password,
    }

    credentials.push(newCredential);
    id++
    return newCredential.id;
}