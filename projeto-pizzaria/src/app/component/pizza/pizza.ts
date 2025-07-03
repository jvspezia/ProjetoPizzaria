import { Component, Input } from '@angular/core';
import { PizzaInterface } from '../../pizza-interface/pizza-interface';
@Component({
  selector: 'app-pizza',
  standalone: false,
  templateUrl: './pizza.html',
  styleUrl: './pizza.css'
})
export class Pizza {

  //Criando objeto
  @Input()
  pizza!: PizzaInterface 
}
