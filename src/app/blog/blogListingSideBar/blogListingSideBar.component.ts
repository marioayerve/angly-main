import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { ChkService } from '../../service/chk.service';

@Component({
  selector: 'angly-blogListingSideBar',
  templateUrl: './blogListingSideBar.component.html',
  styleUrls: ['./blogListingSideBar.component.scss']
})
export class BlogListingSideBarComponent implements OnInit {

	/* Variables */
	blogSidebar      : any;
	categories       : any;
	popularPosts     : any;
	instagramGallary : any;

	constructor(private service:ChkService, private pageTitleService: PageTitleService,) {

		/* Page title */
		this.pageTitleService.setTitle(" Instituciones / Respaldo ");

		/* Page subTitle */
		this.pageTitleService.setSubTitle(" Ayudanos a construir algo increible! ");

		this.service.getBlogListingSideBar().
			subscribe(response => {this.blogSidebar = response},
					 err       => console.log(err),
					 ()        => this.blogSidebar
				 );

		this.service.getcategories().
			subscribe(response => {this.categories = response},
					  err      => console.log(err),
					  ()       => this.categories
				 );
		this.service.getPopularPosts().
			subscribe(response => {this.popularPosts = response},
						 err    => console.log(err),
						 ()     => this.popularPosts
					 );

		this.service.getInstagramImages().
			subscribe(response => {this.instagramGallary = response},
					  err      => console.log(err),
					  ()       => this.instagramGallary
				 );

	}

	ngOnInit() {
	}

}
