import { Car } from "./car";

export interface User {
    id: any;
    full_name: string | undefined,
    phone_number: string |undefined,
    cod_fisc: string | undefined,
    email: string | undefined,
    secret: string | undefined,
    createdAt: string | undefined,
    updatedAt: string | undefined,
    car?: Car;
}
