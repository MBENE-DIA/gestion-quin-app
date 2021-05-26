import { User } from "../user/user";

export class Employer  {
    id: string;
    nom: string;
    prenom: string;
    telephone: string;
    user: User
    situationMatrimonial: string;
    adrese: string;
    genre: number;
    dateRecrutement: Date;

}

