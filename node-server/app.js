const express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
const cors = require("cors")
const app = express();
const port = 3000;

console.log("middleware")
app.use(cors())
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static('public'));
app.post('/',multer({ dest: './uploads/'}).single('data'),function(req,res){
        console.log(req.body.file);
        res.status(204).end();
});
app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});