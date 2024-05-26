import { hash } from "crypto";

class Utils {
    static baseUrl: string = 'http://localhost:3000/api';

    static getUserFromDb = () => {
        const user = fetch(`${this.baseUrl}/users/`);
    }

    static async hashPassword(password: string | null): Promise<string> {
        // const hashedPassword = await hash(password,);
        const hashedPassword = "";
        return hashedPassword;
    }
}

export default Utils;