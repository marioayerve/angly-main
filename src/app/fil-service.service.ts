import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//import * as fs from 'fs';

//const multer = require('multer');
//const app = express();

//import { fstat } from 'fs';
//import * as fs from 'fs';
//const upload = multer({ dest: 'uploads/' });

@Injectable({
  providedIn: 'root'
})
export class UserService {

  

  private url = 'assets/data/support.json';
  constructor(private http: HttpClient) { }

  copyFile(sourcePath: string, destPath: string) {

    
    console.log("Copiando archivos..");
    console.log(`File ${sourcePath} copied to ${destPath}`);
    console.log("Llegamos aqui!");

    /*app.post('/upload', upload.single('file'), function (req, res, next) {
      // File has been uploaded and moved to the specified path
      res.send('File uploaded successfully');
    });*/

    return this.http.put(this.url, sourcePath);
    

    /*const body = {
      sourcePath: sourcePath,
      destPath: destPath
    };*/

    //return this.http.post<any>(url, sourcePath);

    //console.log(`File ${sourcePath} copied to ${destPath}`);
    //console.log("Llegamos aqui!");
    //return this.http.post('/api/copyfile', body);
    
    
  }

  /*copyFile(sourcePath: string, destPath: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      fs.rename(sourcePath, destPath, (error) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  }*/
  
}

