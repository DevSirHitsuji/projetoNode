class UsersDAO {

    constructor(banco) {
        this.db = banco;
    }

    getAllData() {
        const SQL = `SELECT * FROM users`;

        return new Promise((resolve, reject) => {
            this.db.all(SQL, (erro, rows) => {
                if (!erro) {
                    resolve(rows)
                }else{
                    reject(erro);
                }
            });
        })    
    }

    insertNewData(newUser) {
        const SQL = `INSERT INTO users(id, name, email, password) VALUES (?, ?, ?, ?)`;

        return new Promise((resolve, reject) => {
            this.db.run(SQL, 
                [
                newUser.id, 
                newUser.nome,
                newUser.email, 
                newUser.password
                ], 
                (erro) => {
                    if (!erro) {
                        resolve(newUser)
                    }else{
                        reject(erro);
                    }
                });
        })
    }

    deletUser(id) {
        const SQL = "DELETE FROM users WHERE id = ?";

        return new Promise((res, rej) => {
            this.db.run(SQL, id, (erro) => {
                if (!erro){
                    res("User deleted");
                }else{
                    rej(erro);
                }
            });
        });
    }
}

export default UsersDAO;