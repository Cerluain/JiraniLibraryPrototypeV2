import express from 'express';
import multer from 'multer';
import path from 'path';
import cors from 'cors'; // what is this?

const app = express();
const port = 8000; // For now

app.use(cors());

const uploadDir = path.join(__dirname,'uploads');
//const metadataDir = path.join(__dirmname,'metadata');  May do it this way, maybe not

const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, uploadDir); 
    },
    filename: function(req, file, cb){
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({storage: storage});


//Upload endpoint
app.post(uploadDir, upload.single('file'), (req,res)=>{
    if(!req.file)
        return res.status(400).send({message: 'Upload a file'}); //Sending Http error
    
    res.status(200).send({
        message: 'File upload successful!',
        filename: req.file.filename
    })
})

app.listen(port, ()=>{
    console.log('Server is running');
})