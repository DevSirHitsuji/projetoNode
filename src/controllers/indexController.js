import UsersDAO from "../dao/usersDAO.js";
import User from "../models/userModel.js";

const indexController = (app, db) => {
    const userDao = new UsersDAO(db);
    app.get("/", async (request, response) => {
        try {
            const users = await userDao.getAllData();
            response.json(users);
        } catch (err) {
            console.error(err);
        }   
    });
    
    app.post("/", async (request, response) => {
        try {
            const newUser = new User(
                request.body.name, 
                request.body.email, 
                request.body.password
            );

            const newUserData = await userDao.insertNewData(newUser)
            response.json(newUserData);
        } catch (erro) {
            console.error(erro);
        }
    });
    
    app.put("/:id", (request, response) => {

    });
    
    app.delete("/:id", async (request, response) => {
        try{
            const id = request.params.id;
            const userDel = await userDao.deletUser(id);
            response.send(userDel);
        } catch (erro) {
            console.error(erro);
        }
    });

};

export default indexController;