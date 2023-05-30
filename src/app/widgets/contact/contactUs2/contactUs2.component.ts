import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'angly-contactUs2',
  templateUrl: './contactUs2.component.html',
  styleUrls: ['./contactUs2.component.scss']
})
export class ContactUs2Component implements OnInit {

	@Input() contact : any;
	lat: number = -2.002193;
	lng: number = -79.4839117;

	constructor() { }

	ngOnInit() {
	}

}
