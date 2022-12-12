import { v4 as uuidv4} from "uuid";
import { sha256 } from "js-sha256";

class User {
    constructor(nome, email, pass){
        this.id = uuidv4();
        this.nome = nome;
        this.email = email;
        this.password = sha256(pass);
    }
}

export default User;