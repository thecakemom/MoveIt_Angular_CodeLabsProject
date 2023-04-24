import { HttpClient } from '@angular/common/http';
import { Component, OnInit, NgModule } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  signupForm = new FormGroup({
      'username': new FormControl(""),
      'email': new FormControl(""),
      'password': new FormControl(""),
      'password_confirmation': new FormControl("")
    })

constructor(private http:HttpClient){}

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.signupForm);

    this.http.post("", this.signupForm.value)

  }
}
