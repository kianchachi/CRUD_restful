const api = require('../controllers/controllers');

module.exports = (app) => {

    app.get("/tasks",api.showAll)
    app.get("/tasks/:id", api.showOne)
    app.post("/task", api.create)
    app.post("/tasks/:id", api.update)
    // app.post("/tasks/:id", api.edit)

    // app.post("/tasks/:id", api.updateR)
    // app.post("/tasks/:id", api.update)

    app.delete("/tasks/:id", api.delete)
    

};