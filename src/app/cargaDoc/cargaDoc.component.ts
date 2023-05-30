import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../core/page-title/page-title.service';
import { ChkService } from '../service/chk.service';
import { HttpClient } from '@angular/common/http';
//import { serviceFile } from '../cargaDoc/cargaDoc.service';
import { CargaArchivo } from '../../app/server.js';
import { UserService } from '../../app/fil-service.service';
//import {  } from '../cargaDoc/cargaDoc.service';
//import * as fs from 'fs-extra';

//import * as fs from 'fs';
//import { callbackify } from 'util';

@Component({
  selector: 'angly-pricing',
  templateUrl: './cargaDoc.component.html',
  styleUrls: ['./cargaDoc.component.scss']
})
export class PricingComponent implements OnInit {

  /* Variables */
  pricingContent : any;

  year = [
    {name: '2020'},
    {name: '2021'},
    {name: '2022'},
    {name: '2023'}
  ];

  mes = [
    {name: 'Enero'},
    {name: 'Febrero'},
    {name: 'Marzo'},
    {name: 'Abril'},
    {name: 'Mayo'},
    {name: 'Junio'},
    {name: 'Julio'},
    {name: 'Agosto'},
    {name: 'Septiembre'},
    {name: 'Octubre'},
    {name: 'Noviembre'},
    {name: 'Diciembre'}
  ];

  selected: string = '2022';
  selected2: string = 'Enero';
  //origen: string = '';
  destino: string = './doc/'+this.selected + '/'+ this.selected2;

  doc: string = '';

  constructor( private pageTitleService: PageTitleService, private service:ChkService, private http: HttpClient, private userService:UserService) { //, private cargaService: CargaService

    /* Page title */
    this.pageTitleService.setTitle(" Cargar Archivos LOTAID ");

    /* Page subTitle */
    this.pageTitleService.setSubTitle(" Suba aqui sus archivos. ");

    this.service.getPricingPageContent().
      subscribe(response => {this.pricingContent = response},
               err => console.log(err),
               () => this.pricingContent
             );     

   }

  ngOnInit() {  }
  
  subir(){
    console.log(this.selected + '-'+ this.selected2);

    //const formData = new FormData();
    //formData.append('file', this.doc);
    this.userService.copyFile(this.doc,'./doc/'+this.selected + '/'+ this.selected2);

    /*this.userService.copyFile(this.doc, '/'+this.selected + '/'+ this.selected2).subscribe(result => {
      // Handle success
    }, error => {
      // Handle error
    });*/

    /*this.http.post('/api/subir', formData).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );*/

    //fs.renameSync(this.doc, this.destino);
    //fs.copyFile(this.doc, this.destino, (err) => {

    //});
    /*console.log(this.selected);
    console.log(this.selected2);
    console.log(this.doc);*/
    //let formData = new FormData();
    //formData.append("cargaDoc[]", this.selected + '/'+ this.selected2, this.doc);

    //service

    //console.log(formData);

    /*this.cargaService.subirArchivo(formData).subscribe((res) => {
      console.log('Response:', res);
  });*/

  }
  urls = [];

  onselect(e){
    if(e.target.files){
      for(let i=0; i<File.length; i++)
      {
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[i]);
        this.doc = e.target.files[i].name;
        reader.onload = (events:any)=>{
          this.urls.push(events.target.result);
        }
      }
    }
  }

}
