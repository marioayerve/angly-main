import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const app = express();

export class serviceFile{
    execCopy(){
        app.post('/api/subir', upload.single('file'), (req, res) => {
            // req.file contains information about the uploaded file
            // Use fs module to save the file to a directory on the server
            res.send('File uploaded successfully!');
          });
    }
}


  
app.listen(3000, () => console.log('Server started on port 3000'));

/*@Injectable({
    providedIn: 'root'
})
export class CargaService{
    constructor(private http: HttpClient){}

    subirArchivo(formData){
        let urlApi = 'http://localhost:3000/api/subir';
        return this.http.post(urlApi, formData);
    }
}*/