import { Component, Input } from '@angular/core';
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
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
@Input() item:ItemList|null|undefined;

}
