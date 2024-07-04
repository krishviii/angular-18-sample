import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./card/card.component";

interface ItemList{
  id:number,
  type:string,
  name:string,
  size:number,
  price:number,
  rental:number,
  image:string
}

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, CommonModule, CardComponent]
})

export class AppComponent {
  title = 'shopping-cart';
  itemList:ItemList[]=[{
    id:1,
    type: 'Burberry',
    name:'Flowy Dress with pink and gold',
    size: 4,
    price:129.99,
    rental: 12.00,
    image:'assets/Image-Master.png'
  },
  {
    id:2,
    type: 'Prada',
    name:'Beach dress',
    size: 8,
    price:129.99,
    rental: 12.00,
    image:'assets/Image-Master-1.png'
  },
  {
    id:3,
    type: 'Bhandage',
    name:'Red dress for evening wear',
    size: 12,
    price:129.99,
    rental: 12.00,
    image:'assets/Image-Master-2.png'
  },
  {
    id:4,
    type: 'Prada',
    name:'Wedding guest',
    size: 12,
    price:129.99,
    rental: 12.00,
    image:'assets/Image-Master-3.png'
  },
  {
    id:5,
    type: 'Ansell',
    name:'Nightwear',
    size: 14,
    price:129.99,
    rental: 12.00,
    image:'assets/Image-Master-4.png'
  },
  {
    id:6,
    type: 'Desacada',
    name:'Summer dress',
    size: 8,
    price:129.99,
    rental: 12.00,
    image:'assets/Image-Master-5.png'
  }];

  constructor(){

  }

}
