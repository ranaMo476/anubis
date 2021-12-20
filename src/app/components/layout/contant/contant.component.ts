import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contant',
  templateUrl: './contant.component.html',
  styleUrls: ['./contant.component.css']
})
export class ContantComponent implements OnInit {

  constructor(  ) { 

  }
   contant=new FormGroup({
    name:new FormControl('',[ Validators.required]),
    phone:new FormControl('',[Validators.required]),
    address: new FormControl('',[Validators.required]),
    message: new FormControl('',[Validators.required])
   
  });
   

  sendSubmit(){
    console.log(this.contant.value);
  }
  ngOnInit() {
  }

}

    
  
 



