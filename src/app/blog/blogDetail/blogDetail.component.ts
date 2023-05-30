import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { ChkService } from '../../service/chk.service';

@Component({
	selector: 'angly-blogDetail',
	templateUrl: './blogDetail.component.html',
	styleUrls: ['./blogDetail.component.scss']
})
export class BlogDetailComponent implements OnInit {

	 /* Variables */
	blogDetail       : any;
	categories       : any;
	popularPosts     : any;
	instagramGallary : any;
	tags             : any;

	/*
	 * Social links
	 */
	socialDetails : any = [
		{ icon : 'fa-facebook'},
		{ icon : 'fa-twitter text-info'},
		{ icon : 'fa fa-pinterest-p text-danger'},
	]

	/*
	 * Classes of social ul, li
	 */
	socialsClasses : any = {ulClass:"", liClass:"", linkClass:""}

	constructor(private pageTitleService: PageTitleService, private service:ChkService) {

		/* Page title */
		this.pageTitleService.setTitle(" Latest Blog Detail");

		/* Page subTitle */
		this.pageTitleService.setSubTitle(" Build something incredible! ");

			this.service.getBlogColumn3().
			subscribe(response => {this.blogDetail = response},
						err => console.log(err),
						() => this.blogDetail
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
		this.service.getTags().
				 subscribe(response => { this.tags = response },
				 err => console.log(err),
				 () => this.tags
				 );
	}

	ngOnInit() {
	}

}
