import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../core/page-title/page-title.service';
import { ChkService } from '../service/chk.service';

@Component({
  selector: 'angly-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  /* Variables */
  featuresContent : any;

  constructor(private pageTitleService: PageTitleService, private service:ChkService) {

	 /* Page title */
	 this.pageTitleService.setTitle(" Emergencias ");

	 /* Page subTitle */
	 this.pageTitleService.setSubTitle(" En esta sección podran visualizar las emergencias atendidas a la que hemos actuado luego del llamado de nuestra comunidad. ");

	 this.service.getFeaturesContent().
		subscribe(response => {this.featuresContent = response},
					 err => console.log(err),
					 () => this.featuresContent
				);

  }

  ngOnInit() {}

}
