import { Component, OnInit } from '@angular/core';
import { DataDbService } from '../services/data-db.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'contactForm',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  
  emailpattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
  CreateFormGroup() {
      return new FormGroup({
        name: new FormControl('',    [Validators.required, Validators.minLength(5)]),       
        email: new FormControl('',   [Validators.required, Validators.minLength(5), Validators.pattern(this.emailpattern)]),       
        Telefono: new FormControl('',[Validators.required, Validators.minLength(6)]),
        message: new FormControl('', [Validators.required, Validators.minLength(10),
           Validators.maxLength(100)])
      });

  }

  contactForm: FormGroup;
  constructor(private dbData: DataDbService) { 
       this.contactForm = this.CreateFormGroup();

  }

  ngOnInit(): void {
  }

  onResetForm(){
     this.contactForm.reset();
  }

  onSaveForm(){
   /* console.log('saved', this.contactForm.value);*/
   
   /* const newContact ={
       name: 'manuel',
       email: 'mturcios@gmail.com',
       Telefono: '31482483',
       message: 'Me intereza comprar AbsorbZ'

    }*/
    if (this.contactForm.valid) {
         this.dbData.saveMessage(this.contactForm.value);
         this.onResetForm();
         console.log('Valid');
    } else {
       console.log('NOt Valid');

    }
  }

  get name() { return  this.contactForm.get('name'); }
  get email() { return  this.contactForm.get('email'); }
  get Telefono() { return  this.contactForm.get('Telefono'); }
  get message() { return  this.contactForm.get('message'); }

}
