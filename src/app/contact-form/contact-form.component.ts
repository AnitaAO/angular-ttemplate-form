import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contactMethod = [
    { id: 1, name: "Email"},
    { id: 2, name: "Phone"}
  ]

  constructor() { }

  ngOnInit() {
  }
  log(email: any){
    console.log(email)
  }

  click(fullName: any){
    console.log(fullName)
  }

  submit(contactForm: any){
    contactForm.valid
  }


}