/*
 * Send message
 * Used in another component.
 */
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: '[angly-sendMessage]',
  templateUrl: './sendMessage.component.html',
  styleUrls: ['./sendMessage.component.scss']
})
export class SendMessageComponent implements OnInit {

   sendMessageForm : UntypedFormGroup;

   constructor( private formBuilder : UntypedFormBuilder) {

      this.sendMessageForm = this.formBuilder.group({
         first_name : [null, [Validators.required] ],
         last_name  : [null, [Validators.required] ],
         email      : [null, [Validators.required] ],
         textarea   : [null, [Validators.required] ]
      });
   }

   ngOnInit() {
   }

   /*
    * sendMessage
    */
   sendMessage(values:any)
   {
     if(this.sendMessageForm.valid)
     {
       console.log(values);
     } else{
       console.log("Error!");
     }
   }

}
