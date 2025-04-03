const express=require("express");
const errorHandler = require("./middleware/errorHandler");
const app=express();
const dotenv=require("dotenv").config();
const port = process.env.PORT|| 5000;

/*app.get("/api/contacts",(req,res) =>
{
    res.send("get all contacts");
}
);*/

app.use(express.json());
app.use("/api/contacts",require("./routes/contactRoutes")); // This is the middleware
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server listening on the port ${port}`);
});

console.log("I'm in express project")