import { Component } from '@angular/core';
import { PizzaInterface } from '../../pizza-interface/pizza-interface';
@Component({
  selector: 'app-lista-pizzas',
  standalone: false,
  templateUrl: './lista-pizzas.html',
  styleUrl: './lista-pizzas.css'
})
export class ListaPizzas {
@Input()
lista:AlunoInterface[]=[]
}
