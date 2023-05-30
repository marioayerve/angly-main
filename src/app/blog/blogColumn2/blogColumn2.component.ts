import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { ChkService } from '../../service/chk.service';

@Component({
  selector: 'angly-blogColumn2',
  templateUrl: './blogColumn2.component.html',
  styleUrls: ['./blogColumn2.component.scss']
})
export class BlogColumn2Component implements OnInit {

	/* Variables */
	blogColumn2 : any;

	constructor(private pageTitleService: PageTitleService, private service:ChkService) {

		/* Page title */
		this.pageTitleService.setTitle(" VEHÍCULOS ");

		/* Page subTitle */
		this.pageTitleService.setSubTitle(" Por esto llegamos a tiempo a servir .. ");

		this.service.getBlogColumn2().
		  subscribe(response => {this.blogColumn2 = response},
						err => console.log(err),
						() => this.blogColumn2
				  );
	}

	ngOnInit() {
	}

}
