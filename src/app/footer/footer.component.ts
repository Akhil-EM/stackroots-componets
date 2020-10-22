import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  //declaring variables
  loginForm:FormGroup
  submitted=false;

  constructor(private FormBuilder:FormBuilder) { }
  
  ngOnInit(): void {
     
     
     this.loginForm=this.FormBuilder.group({
       email:['',[Validators.required,Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)]],
       password:['',[Validators.required]]
     })
  
     
  }
  get f() { return this.loginForm.controls; }

  onSubmit(){
     
     this.submitted=true;
     if(this.loginForm.invalid==true){return;}
      
      
     console.log(this.loginForm.value);
     

  }

}
