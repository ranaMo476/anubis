import { Component, OnInit } from '@angular/core';
import { Ourwork } from '../../shared/view/ourwork';
import { Product } from '../../shared/view/share/product';
@Component({
  selector: 'app-ourwork',
  templateUrl: './ourwork.component.html',
  styleUrls: ['./ourwork.component.css']
})
export class OurworkComponent  {

//  public work = Ourwork ;
 public product;
  // product!: Product;
  constructor( ) { 
   this.product = [
     {log:"log.png",link:"url"},
     {log:"log.png",link:"url"},
     {log:"log.png",link:"url"},

   ]
   
     
  }

  Oninit(){
  
  }

}
