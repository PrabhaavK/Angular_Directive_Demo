import { Component } from '@angular/core';
import { Product } from '../Models/Products';


@Component({
  selector: 'app-structdircetive',
  templateUrl: './structdircetive.component.html',
  styleUrls: ['./structdircetive.component.css']
})
export class StructdircetiveComponent {

  products:Product[] =[
    {id:1,name:"SamsungMobile",price:100},
    {id:2,name:"SamsungTablet",price:500},
    {id:3,name:"SamsungBuds",price:1000},
    {id:4,name:"SamsungTV",price:700},
    {id:5,name:"SamsungAC",price:560},
  ]



  fruit:string;
  paid:boolean=true;
  x:number = 100;

}
