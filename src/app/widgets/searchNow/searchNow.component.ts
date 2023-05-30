import { Component, OnInit } from '@angular/core';
import { FormControl, UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'angly-searchNow',
  templateUrl: './searchNow.component.html',
  styleUrls: ['./searchNow.component.scss']
})
export class SearchNowComponent implements OnInit {

  /* Variables */
  searchForm : UntypedFormGroup;

  constructor(private formBuilder : UntypedFormBuilder) {
    this.searchForm = this.formBuilder.group({
        name : [null, [Validators.required] ]
      });
  }

  ngOnInit() {
  }

  searchNow(value:any)
  {
    if(this.searchForm.valid)
    {
      console.log(value);
    } else{
      console.log("Error!");
    }
  }

}
