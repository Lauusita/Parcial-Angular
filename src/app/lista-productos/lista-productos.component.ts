import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [NgFor, MatIconModule],
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})
export class ListaProductosComponent {
  products = [
    {
      name: 'Aretes perlas',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac ipsum nisl.',
      price: 20,
      image: 'img1.png'
    },
    {
      name: 'Zapatos formales hombre',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac ipsum nisl.',
      price: 200,
      image: 'img2.png'
    },
    {
      name: 'Cinturón color negro',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac ipsum nisl.',
      price: 50,
      image: 'img3.png'
    },
    {
      name: 'Boina negra',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac ipsum nisl.',
      price: 30,
      image: 'img4.png'
    },
    {
      name: 'Sets de medias',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac ipsum nisl.',
      price: 5,
      image: 'img5.png'
    },
    {
      name: 'Zapatillas negras',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac ipsum nisl.',
      price: 100,
      image: 'img6.png'
    },
    {
      name: 'Zapatos blancos',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac ipsum nisl.',
      price: 150,
      image: 'img7.png'
    },
    {
      name: 'Bolso mujer beige',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac ipsum nisl.',
      price: 60,
      image: 'img8.png'
    }
  ];
}
