//Missing Safety Against Traversal Attacks
//Fix default Title given to files
//Optional Metadata is not stored with upload

import express from 'express'; //includes bodyParser module
import fs from 'fs/promises'
import multer from 'multer';
import path from 'path';

const app = express();
const port = 3000; // For now

//Get the absolute directory using server url location, instead of from where node was ran
const __dirname = import.meta.dirname;
console.log("A", __dirname);
const uploadDir = path.join(__dirname, 'uploads'); //What will be used 
const metadataDir = path.join(__dirname, 'metadata');

console.log("B")

//Setting Up Middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('dist'));


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        const timestamp_str = new Date().toISOString().replace(/[.:]/g, '');
        cb(null, timestamp_str + file.originalname);
    }
});

const upload = multer({ storage: storage });


//Upload endpoint
app.post('/upload', upload.single('file'), async (req, res) => {
    if (!req.file)
        return res.status(500).send({ message: 'No File Received' }); //Sending Http error

    let metadataPath = '';
    try {
        const metadata = req.body.metadata ? req.body.metadata : {};

        //Predefined
        metadata.filename = path.parse(req.file.filename).name
        metadata.timestamp = new Date().toISOString();
        metadata.mimetype = req.file.mimetype;
        metadata.size = req.file.size;

        //Metadata Fields
        metadata.title = req.body.title
        metadata.author = req.body.author
        metadata.publisher = req.body.publisher
        metadata.tags = req.body.tags
        metadata.series = req.body.series
        metadata.identifier = req.body.identifier

        metadataPath = path.join(metadataDir, `${req.file.filename}.json`)
        await fs.writeFile(metadataPath, JSON.stringify(metadata));


        res.status(201).send({
            message: 'File upload successful!',
            filename: req.file.filename
        })
    }
    catch (err) {
        fs.unlink(metadataPath);
        res.status(500).send({ message: 'Failed upload' });
    }
})

//API endpoints for fetching files and metadata
app.get('/api/getJSONFileList', async (req, res) => {
    console.log('API Call To Fetch Metadata Files')
    try {
        const files = await fs.readdir(metadataDir);
        const jsonFiles = files.filter(file => file.endsWith('.json'));
        
        console.log("JSON File Names:",jsonFiles);

        const allJsonData = await Promise.all(
            jsonFiles.map(file => getJSONFromFileName(path.join(metadataDir, file)))
        );
        console.log(allJsonData)
        res.status(200).json(allJsonData); // Send the data as JSON response
    } catch (err) {
        console.error('Error reading metadata directory:', err);
        res.status(500).json({ error: 'Failed to read metadata directory' });
    }
});

async function getJSONFromFileName(filePath) {//Helper Function for each JSON file
    try {
        console.log("Looking at file ", filePath)
        const data = await fs.readFile(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Error reading or parsing JSON file:', filePath, err);
        return null;
    }
}

app.get('*', (req, res) => {
    const indexPath = path.join(__dirname, 'index.html');
    console.log("Launching from page");
    res.sendFile(indexPath);
});

app.listen(port, () => {
    console.log('Server is running');
})