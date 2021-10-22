import { Component, OnInit } from '@angular/core';
import { DataDbService } from '../services/data-db.service';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'contactForm',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  
  CreateFormGroup() {
      return new FormGroup({
        email: new FormControl(''),
        name: new FormControl(''),
        Telefono: new FormControl(''),
        message: new FormControl('')
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
    this.dbData.saveMessage(this.contactForm.value);
  }

 

}
