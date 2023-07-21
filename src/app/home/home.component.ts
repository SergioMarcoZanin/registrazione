import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(){}

  ngOnInit(): void {
    
  }

  onSubmit(form: NgForm){
    const email= form.value.email
    const password= form.value.password
    console.log(form)
    form.reset()
  }

}
