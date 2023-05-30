import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../core/page-title/page-title.service';
import { ChkService } from '../service/chk.service';

@Component({
  selector: 'angly-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  /* Variables */
  contact : any;

  lat: number = -2.002193;
	lng: number = -79.4839117;

  constructor( private pageTitleService: PageTitleService, private service:ChkService ) {

	 /* Page title */
	 this.pageTitleService.setTitle(" Mantengamonos En Contacto ");

	 /* Page subTitle */
	 this.pageTitleService.setSubTitle(" Información para contacto. ");

	 this.service.getContactContent().
		subscribe(response => {this.contact = response},
					 err      => console.log(err),
					 ()       => this.contact
				);
  }

  ngOnInit() {
  }

}
