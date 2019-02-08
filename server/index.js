const express = require("express")
const mesctrl = require("./controllers/messages_controller")
const bodyparser = require("body-parser")

const app = express();

app.use(bodyparser.json());
app.use( express.static( __dirname + '/../public/build' ) );


//create
app.post("/api/messages", mesctrl.create)

//read
app.get("/api/messages", mesctrl.read)

//update
app.put("/api/messages/:id", mesctrl.update)

//delete
app.delete("/api/messages/:id", mesctrl.delete)

app.listen(3001, () => console.log("bang"))
