import { Component } from '@angular/core';
import { PizzaInterface } from './pizza-interface/pizza-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  
   pizzaria:string ='PizzariaBeagle'

listaPizzas:PizzaInterface[] = [
  {
    valor:35,
    sabor:'Calabresa',
    ingredienteUm:'Cebola',
    ingredienteDois:'Molho de tomate',
    pimenta: true
  },
  {
    valor:40,
    sabor:'Moda da Casa',
    ingredienteUm:'Queijo gorgonzola',
    ingredienteDois:'Ovos',
    pimenta: false
  },
  {
    valor:25,
    sabor:'4 Queijo',
    ingredienteUm:'Queijo',
    ingredienteDois:'Queijo',
    pimenta: false
  }
]
  
  
  
}